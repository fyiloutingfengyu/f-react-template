/**
 * @description: 公共的interface
 */

interface CommonOptions {
  method?: string;
  params?: any;
  headers?: any;
  type?: any; // 根据类型设置请求头
  isRepeatable?: boolean; // 请求是否可以重复
  flag?: string;
  isManualDealError?: boolean; // 是否手动处理后台返回的错误
  isManualDealHttpError?: boolean; // 是否手动处理http请求错误
  isLoading?: boolean; // 是否添加loading
  loadingConfig?: any; // loading的相关配置
}

// API请求的参数
export interface RequestOptions extends CommonOptions {
  urlParamsStr?: string;
}

// 公共请求的参数
export interface HttpOptions extends CommonOptions {
  url: string;
}

// 请求成功时后台接口返回的数据（axios.then中data下面的数据）
export interface ServerResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 用户信息
export interface UserInfo {
  userId: string;
  userName: string;
  mobile: string;
}

// 公共state
export interface CommonState {
  token: string;
  userInfo: UserInfo;
}
