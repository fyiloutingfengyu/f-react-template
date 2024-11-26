/**
 * @description: 格式化日期
 * @method dateFormat
 * @param {Date} date 需要格式化的日期类型
 * @param {string} format 自定义的格式
 * @returns {string} 格式化之后的日期字符串
 */
const dateFormat = (date: Date, format: string) => {
  const dateObj = new Date(date);
  const map: any = {
    M: dateObj.getMonth() + 1, //月份
    d: dateObj.getDate(), //日
    h: dateObj.getHours(), //小时
    m: dateObj.getMinutes(), //分
    s: dateObj.getSeconds(), //秒
    S: dateObj.getMilliseconds() //毫秒
  };

  format = format.replace(/([yMdhmsS])+/g, function (all, item) {
    let val = map[item];

    if (val !== undefined) {
      if (all.length > 1) {
        val = '0' + val;
        val = val.substr(val.length - 2);
      }
      return val;
    } else if (item === 'y') {
      return (dateObj.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });
  return format;
};

/**
 * @description: 获取localStorage
 * @method getLocalStorage
 * @param {string} name - localStorage的名称
 */
const getLocalStorage = (name: string) => {
  return localStorage.getItem(name) || '';
};

/**
 * @description: 存入localStorage
 * @method setLocalStorage
 * @param {string} name - localStorage的名称
 * @param {string} value - 存入的值
 */
const setLocalStorage = (name: string, value: string) => {
  return localStorage.setItem(name, value);
};

/**
 * @description: 删除localStorage
 * @method removeLocalStorage
 * @param {string} name - localStorage的名称
 */
const removeLocalStorage = (name: string) => {
  localStorage.removeItem(name);
};

/**
 * @description: 读取location.search中的参数值
 * @param {string} name 名称
 * @return {string} url中的参数的值
 */
const getUrlParam = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const search = window.location.search.substr(1);
  const result = search.match(reg);

  if (result != null) {
    return decodeURIComponent(result[2]);
  } else {
    return '';
  }
};

const userAgent = navigator.userAgent;

/**
 * @description: 判断是否是Android
 * @return {boolean}
 */
const isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1;

/**
 * @description: 判断是否是iOS
 * @return {boolean}
 */
const isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

/**
 * @description: 设置页面标题
 * @method setPageTitle
 * @param {string} title - 标题内容
 */
const setPageTitle = (title: string) => {
  document.title = title;

  if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
    const iframe = document.createElement('iframe');

    iframe.src = '/favicon.ico';
    iframe.style.display = 'none';
    iframe.onload = function () {
      setTimeout(function () {
        iframe.remove();
      }, 10);
    };

    document.body.appendChild(iframe);
  }
};

/**
 * @description 获取数据类型
 */
const getDataType = (data: any) => {
  const type = typeof data;

  if (data === null) {
    return 'null';
  } else if (type === 'object') {
    const typeStr = Object.prototype.toString.call(data);

    return typeStr.slice(8, -1).toLowerCase();
  } else {
    return type;
  }
};

export {
  dateFormat,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  getUrlParam,
  isAndroid,
  isiOS,
  setPageTitle,
  getDataType
};
