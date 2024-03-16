import React from 'react';
import { Button } from 'antd-mobile';
import './index.scss';
import { http } from '@/utils/http';
import loginApi from '@/api/login';
import history from '@/router/history';

const my = () => {
  const toLogin = () => {
    http({
      url: loginApi.login.url,
      method: loginApi.login.method,
      params: {
        mobilePhone: '18888888888',
        pwd: '123'
      }
    }).then(res => {
      console.log('http login', res);
    }).catch(err => {
      console.log(err);
    });
  };

  const toMessagePage = () => {
    history.push('/message/child', {
      name: 'f',
      id: 1
    });
  };

  const toVueChild = () => {
    window.history.pushState(null, '', '/sub-vue')
  }

  return (
    <div>
      <h3>my</h3>
      <Button
        className="test-btn"
        color="primary"
        onClick={() => toLogin()}
      >
        login
      </Button>
      <Button
        className="test-btn"
        color="default"
        size="large"
        onClick={() => toMessagePage()}
      >
        to message
      </Button>
      <Button onClick={()=>toVueChild()}>to vue 子应用</Button>
    </div>
  );
};

export default my;
