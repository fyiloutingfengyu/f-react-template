// 封装 BrowserRouter 处理组件外使用路由跳转页面不更新的问题
import React from 'react';
import type { History } from 'history';
import type { BrowserRouterProps as NativeBrowserRouterProps } from 'react-router-dom';
import { Router } from 'react-router-dom';

export interface BrowserRouterProps extends Omit<NativeBrowserRouterProps, 'window'> {
  history: History;
}

const BrowserRouter: React.FC<BrowserRouterProps> = React.memo((props) => {
  const { history, ...restProps } = props;
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return <Router {...restProps} location={state.location} navigationType={state.action} navigator={history}/>;
});

export default BrowserRouter;
