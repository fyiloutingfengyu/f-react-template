import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoodsListAsync } from '@/store/testSlice';
import styles from './test.module.scss';
import { showFailToast } from '@/utils/wrap-antd-mobile';
import { getGoodsDetail } from '@/api/test';

export default function Test() {
  const [goodsDetail, setGoodsDetail] = useState<any>({});
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  const dispatch = useDispatch();
  const goodsList = useSelector((state: any) => {
    console.log(11, state.test.goodsData);
    return state.test.goodsData;
  });

  useEffect(() => {
    console.log('new count', count);
  }, [count]);

  useEffect(() => {
    dispatch(getGoodsListAsync());
  }, [dispatch]);

  // 获取商品详情
  const getGoodsDetailInfo = (id: string) => {
    getGoodsDetail({
      isManualDealError: true,
      isManualDealHttpError: true,
      params: {
        id: id
      }
    }).then(res => {
      console.log(666, res);
      if (res.data.code === 200) {
        setGoodsDetail(res.data.data);
      } else {
        showFailToast('后台接口返回错误');
      }
    }).catch(err => {
      showFailToast(err.message);
    });
  };

  const list = (list: any[]) => {
    let goods = [];
    for (let i = 0, len = list.length; i < len; i++) {
      goods.push(
        <li
          className={styles.goodsItem}
          key={list[i].id}
          onClick={() => getGoodsDetailInfo(list[i].id)}
        >
          {list[i].title}
        </li>
      );
    }

    return <ul className={styles.goodsList}>{goods}</ul>;
  };

  const updateState = () => {
    setCount(value => {
      console.log('prev value', value);
      return value + 1;
    });

    countRef.current += 1;
    console.log('countRef.current', countRef.current);
  };

  return (
    <div className={styles.testPage}>
      {list(goodsList)}
      <div>
        <div>{goodsDetail.title}</div>
        <div>{goodsDetail.price}</div>
      </div>
      <button
        type="button"
        onClick={() => updateState()}
      >
        update
      </button>
    </div>
  );
}
