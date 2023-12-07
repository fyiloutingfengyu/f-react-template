import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoodsListAsync, getGoodsDetailAsync } from '@/redux/features/test/testSlice';
import styles from './test.module.scss';
import { showFailToast } from '@/utils/package-antd-mobile';

export default function Test() {
  const [count, setCount] = useState(0);
  const [goodsList, setGoodsList] = useState([]);
  const [goodsDetail, setGoodsDetail] = useState<any>({});
  const dispatch = useDispatch();
  const goodsData = useSelector((state: any) => {
    return state.test.goodsData;
  });
  const detailData = useSelector((state: any) => {
    return state.test.goodsDetail;
  });

  useEffect(() => {
    const counter = setInterval(() => {
      setCount(c => {
          if (c >= 10) {
            clearInterval(counter);
          }

          return c + 1;
        }
      );
    }, 1000);

    // componentWillUnmount
    return () => clearInterval(counter);
  }, []);

  // todo f useReducer

  useEffect(() => {
    dispatch(getGoodsListAsync());
  }, [dispatch]);

  useEffect(() => {
    if (goodsData.code === 200) {
      setGoodsList(() => {
        return goodsData.data;
      });
    } else {
      showFailToast(goodsData.message);
    }

  }, [goodsData]);

  useEffect(() => {
    if (detailData.status === 500) {
      showFailToast(detailData.message);
    } else {
      console.log('666detailData', detailData);
      if (detailData.code === 200) {
        setGoodsDetail(detailData.data);
      } else {
        showFailToast('后台接口返回错误');
      }
    }
  }, [detailData]);

  const list = (list: any[]) => {
    let goods = [];
    for (let i = 0, len = list.length; i < len; i++) {
      goods.push(
        <li
          className={styles.goodsItem}
          key={list[i].id}
          onClick={() => dispatch(getGoodsDetailAsync(list[i].id))}
        >
          {list[i].title}
        </li>
      );
    }

    return <ul className={styles.goodsList}>{goods}</ul>;
  };

  return (
    <div className={styles.testPage}>
      <div>{count}</div>
      {list(goodsList)}
      <div>
        <div>{goodsDetail.title}</div>
        <div>{goodsDetail.price}</div>
      </div>
    </div>
  );
}
