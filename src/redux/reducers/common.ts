import ACTION_TYPES from '../actions/action-types';

const user = window.localStorage.getItem('token');
const initialState = {
  isLoading: false,
  isLogin: !!user,
  userInfo: {},
};

function commonReducer(state = initialState, action: { type: any; userInfo: any; }) {
  switch (action.type) {
    case ACTION_TYPES.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.CHECK_LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    case ACTION_TYPES.CHECK_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case ACTION_TYPES.GET_USER_INFO_SUCCESS:
      return {
        userInfo: action.userInfo
      };
    case ACTION_TYPES.GET_USER_INFO_FAILURE:
      return {
        userInfo: {} // todo f
      };
    default:
      return state;
  }
}

export default commonReducer;
