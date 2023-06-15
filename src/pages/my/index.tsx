import React from 'react';
import { Button } from 'antd-mobile';
import './index.scss';
import { http } from '@/utils/http';
import loginApi from '@/api/login';

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
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <div>
      <h3>my</h3>

      <Button className="test-btn" color="primary" onClick={() => toLogin()}>login</Button>
    </div>
  );
};

export default my;
