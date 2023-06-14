const path = require('path');

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
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
};
