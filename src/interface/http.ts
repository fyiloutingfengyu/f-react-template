// 缓存的url数组
interface UrlArr {
  [key: string]: any;
}

// 请求头
interface HeadersObj {
  'Content-Type': string;
  Authorization?: string;
}

// axios请求参数
interface AxiosConfig {
  headers: any;
  url: string;
  method: any;
  data?: any;
  params?: any;
}

export type {
  UrlArr,
  HeadersObj,
  AxiosConfig
}
