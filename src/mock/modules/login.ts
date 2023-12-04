/**
 * @desc 登录相关的接口
 */
// 登录
// @ts-ignore
const login = {
  url: '/api/login',
  method: 'post',
  response: () => {
    return {
      'code': 401,
      'message': '请求成功',
      'data': {
        'user': {
          'userId': '11111101335040',
          'userName': 'Test',
          'mobile': '18111111111'
        },
        'token': {
          'tokenType': 'Bearer',
          'accessToken': 'tokenStr'
        }
      }
    };
  }
};

// 获取验证码
const getLoginCode = {
  url: '/api/login/captcha/15000000000',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: {},
      message: 'success'
    };
  }
};

module.exports = [
  login,
  getLoginCode
];
