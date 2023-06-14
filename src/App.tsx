import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import WrappedRoutes from './router/index';
import TabBar from './components/tab-bar/index';
import './app.scss';

function App() {
  let uLocation = useLocation();
  const [urlPath, setUrlPath] = useState(uLocation.pathname);

  // 监听路由变化
  useEffect(() => {
    setUrlPath(uLocation.pathname);
  }, [uLocation]);

  useEffect(() => {
    console.log('最新 URL', urlPath);
  }, [urlPath]);

  return (
    <div className="base-layout">
      <nav className="nav-bar">
        <NavLink to="/">首页</NavLink>
        <NavLink to="/my">我的</NavLink>
      </nav>
      <WrappedRoutes/>
      <TabBar/>
    </div>
  );
}

export default App;
