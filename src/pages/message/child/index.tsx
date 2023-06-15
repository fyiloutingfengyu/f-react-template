import React from 'react';
import './index.scss';
import testPic from '@/assets/test_pic.jpg';
import iconAlipay from '@/assets/icon_alipay.png';

const Child = () => {
  return (
    <div className="about-child">
      <h3 className="title">child</h3>
      <img className="test-img" src={testPic} alt=""/>
      <img className="test-img" src={iconAlipay} alt=""/>
    </div>
  );
};

export default Child;
