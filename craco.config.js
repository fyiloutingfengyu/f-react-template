const path = require('path');
const sassResourcesLoader = require('craco-sass-resources-loader');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isEnvProduction = process.env.NODE_ENV === 'production';
let productionPlugins = [];
// gzip 压缩
const compressPlugin = new CompressionWebpackPlugin({
  algorithm: 'gzip',
  /*test: new RegExp(
    '\\.(' +
    ['js', 'css'].join('|') +
    ')$'
  ),
  threshold: 1024,
  minRatio: 0.8*/
});

const newTerserPlugin = new TerserPlugin({
  terserOptions: {
    compress: {
      drop_debugger: true,
      drop_console: true,
      pure_funcs: ['console.log']
    },
    format: {
      comments: false // 删除所有注释
    }
  },
  parallel: true,  // 多核打包，提升打包速度
  extractComments: false // 是否将注释全部集中到一个文件中
});

// 打包分析
const analyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: 'static', // 生成report.html文件
  openAnalyzer: false, // 关闭自动在浏览器中打开报告
});

if (isEnvProduction) {
  productionPlugins.push(newTerserPlugin, compressPlugin);
  console.log('productionPlugins', productionPlugins);
}

if (process.env.ANALYZER_ENV) {
  productionPlugins.push(analyzerPlugin);
}

module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            [
              'postcss-px-to-viewport-8-plugin',
              {
                unitToConvert: 'px', // 要转化的单位，默认为 px
                viewportWidth: file => {
                  let num = 750;

                  if (file.indexOf('antd-mobile') !== -1) {
                    num = 375;
                  }

                  return num;
                },
                unitPrecision: 6, // 转换后的精度(保留的小数位数)
                propList: ['*'], // 要转换单位的CSS属性，*代表全部css属性都进行单位转换
                viewportUnit: 'vw', // 转换后的单位，默认vw
                fontViewportUnit: 'vw', // 字体转换后的单位，默认vw
                selectorBlackList: ['ignore-'], // 包含'ignore-'字符串的选择器不会被转换，
                minPixelValue: 1, // 小于或等于1px则不进行转换
                mediaQuery: true, // 是否在媒体查询的css代码中进行单位转换，默认false
                replace: true, // 是否转换后直接更换属性值
                landscape: false // 是否处理横屏情况
              },
            ],
          ],
        },
      },
    },
  },
  webpack: {
    plugins: [
      ...productionPlugins
    ],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/styles/variables.scss'
      },
    },
  ],
  // todo f
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|git)$/,
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        }
      }
    ],
  },
  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    open: false,
    port: 5001,
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/api': '/api'
        },
        changeOrigin: true
      }
    }
  }
};
