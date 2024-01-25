import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd-mobile';
import './index.scss';
import { startLoading } from '@/store/commonSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => {
    console.log(51,state);
    return state.common.isLoading;
  });

  const navigate = useNavigate();
  console.log(666, process.env.NODE_ENV);

  const test = () => {
    navigate('/my');
  };

  useEffect(() => {
    dispatch(startLoading());
  }, [dispatch]);

  console.log('8', isLoading);

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

export default Home;
