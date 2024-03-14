/**
 * 当应用作为 qiankun 的子应用加载时，其内部的资源请求都使用 qiankun 提供的正确路径，
 * 确保资源能够被正确的加载
 */
// todo f
// @ts-ignore
if (window.__POWERED_BY_QIANKUN__) {
  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
