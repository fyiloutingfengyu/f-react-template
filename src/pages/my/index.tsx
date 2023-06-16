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
        onClick={() => toMessagePage()}
      >
        to message
      </Button>
    </div>
  );
};

export default my;
