import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';
import Home from '../pages/home/index';

const Message = lazy(() => import('../pages/message/index'));
const MessageChild = lazy(() => import('../pages/message/child/index'));
const My = lazy(() => import('../pages/my/index'));
const Counter = lazy(() => import('../pages/counter/index'));
const NotFound = lazy(() => import('../pages/not-found/index'));

// 渲染懒加载路由
const lazyElement = (component: string | number | boolean | JSX.Element | Iterable<React.ReactNode> | null | undefined) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {component}
    </Suspense>
  );
};

// 路由列表
let routes = [
  {
    path: '/',
    element: <Navigate to="/home"/>,
    exact: true
  },
  {
    path: '/home',
    element: <Home/>,
    exact: true
  },
  {
    path: '/message',
    element: lazyElement(<Message/>),
    children: [
      {
        path: 'child',
        element: lazyElement(<MessageChild/>)
      }
    ]
  },
  {
    path: '/my',
    element: lazyElement(<My/>)
  },
  {
    path:'/counter',
    element:lazyElement(<Counter/>)
  },
  {
    path: '*',
    element: <NotFound/>
  }
];

export { routes };


const WrappedRoutes = () => {
  return useRoutes(routes);
};

export default WrappedRoutes;
