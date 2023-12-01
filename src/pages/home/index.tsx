import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { Button } from 'antd-mobile';
import * as commonAction from '../../redux/actions/common';
import './index.scss';

import { useNavigate } from 'react-router-dom';

const Home = (props: { actions?: any; isLoading?: any; }) => {
  const navigate = useNavigate();
  console.log(666, process.env.NODE_ENV);

  const test = () => {
    navigate('/my');
  };

  useEffect(() => {
    props.actions.startLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoading } = props;
  console.log('isLoading', isLoading);

  return (
    <div className="container">
      <div className="title">home</div>
      <Button color="primary"
              className="rotation test-btn"
              onClick={() => test()}
      >test</Button>
    </div>
  );
};

const mapStateToProps = (state: { common: any; }) => {
  return { ...state.common };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    // 通过 bindActionCreators 将actions包装成可以直接被调用的函数
    // todo f
    actions: bindActionCreators(commonAction as any, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
