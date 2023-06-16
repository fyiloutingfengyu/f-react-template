// 封装 BrowserRouter 处理组件外使用路由跳转页面不更新的问题
import React, { useState, useLayoutEffect } from 'react';
import type { History } from 'history';
import type { BrowserRouterProps as NativeBrowserRouterProps } from 'react-router-dom';
import { Router } from 'react-router-dom';

export interface BrowserRouterProps extends Omit<NativeBrowserRouterProps, 'window'> {
  history: History;
}

const BrowserRouter: React.FC<BrowserRouterProps> = React.memo((props) => {
  const { history, ...restProps } = props;
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => {
    // 监听到 history 路由改变时，重新设置当前的 action 和 location
    // 调用setState后会触发组件重新渲染，从history对象中重新初始化最新的action 和 location
    // 在其他地方调用 history.push 等会触发 history.listen
    history.listen(setState);
  }, [history]);

  return <Router {...restProps} location={state.location} navigationType={state.action} navigator={history}/>;
});

export default BrowserRouter;
