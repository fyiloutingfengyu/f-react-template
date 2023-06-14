import ACTION_TYPES from './action-types';

export function startLoading() {
  return {
    type: ACTION_TYPES.LOADING_START,
  };
}

export function endLoading() {
  return {
    type: ACTION_TYPES.LOADING_END,
  };
}

export function loginSuccess() {
  return {
    type: ACTION_TYPES.CHECK_LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: ACTION_TYPES.CHECK_LOGIN_FAILURE,
  };
}

// 获取用户信息
export function getUserInfo() {
  return {
    type: ACTION_TYPES.GET_USER_INFO
  };
}


