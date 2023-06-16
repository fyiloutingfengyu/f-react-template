import Mock from 'mockjs';

const mockFiles = require.context('./modules', true, /\.ts$/);
let mocks: any[] = [];

mockFiles.keys().forEach((key: any) => {
  mocks.push(...mockFiles(key));
});

mocks.forEach(item => {
  // .(点)匹配除"\n"和"\r"之外的任何单个字符
  Mock.mock(RegExp(item.url + '.*'), item.method, item.response);
});

// 注意事项： // todo f
// 1、请求的方法使用小写，如'get', 'GET'不生效；
// 2、nextwork中看不到请求，因为请求发出去之前就被mock拦截了
