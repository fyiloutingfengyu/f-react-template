/**
 * @description: 公共的interface
 */

// 公共请求的参数
interface HttpOptions {
  url: string
  method?: string
  params?: any
  headers?: any
  type?: any // 根据类型设置请求头
  isRepeatable?: boolean // 请求是否可以重复
  flag?: string
  isManualDealError?: boolean // 是否手动处理后台返回的错误
  isManualDealHttpError?: boolean // 是否手动处理http请求错误
  isLoading?: boolean // 是否添加loading
  loadingConfig?: any // loading的相关配置
}

// loading 的参数
interface LoadingObj {
  overlay?: boolean
  message?: any
  duration?: number
  className?: any
  loadingType?: any
  forbidClick?: boolean
}

// 请求成功时后台接口返回的数据（axios.then中data下面的数据）
interface ServerResponse<T = any> {
  code: number
  data: T
  message: string
}

// 用户信息
interface UserInfo {
  userId: string
  userName: string
  mobile: string
  orgId: string
  orgName: string
  roleKey: string
  roleName: string
  inviteCode: string
}

// 公共state
interface CommonState {
  token: string
  userInfo: UserInfo
}

export type { HttpOptions, LoadingObj, ServerResponse, UserInfo, CommonState }
