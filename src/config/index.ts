/**
 * @description: 公共配置
 */

const MODE_URL = {
  // 生产环境
  production: {
    apiBaseUrl: 'https://h5.prd.f.com',
    cdnBaseUrl: 'https://f-h5.cdn.f.com/resource/'
  },
  // 测试环境
  test: {
    apiBaseUrl: 'https://h5.test.f.com',
    cdnBaseUrl: 'https://f-h5-test.cdn.f.com/resource/'
  },
  // 开发环境
  development: {
    apiBaseUrl: 'https://h5.test.f.com',
    cdnBaseUrl: ''
  },
  // 数据mock
  mock: {
    apiBaseUrl: '',
    cdnBaseUrl: ''
  }
}

// @ts-ignore // todo f
const API_BASE_URL = MODE_URL[process.env.REACT_APP_ENV].apiBaseUrl

export { API_BASE_URL, MODE_URL }
