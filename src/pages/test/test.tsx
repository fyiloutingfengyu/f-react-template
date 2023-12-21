import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoodsListAsync } from '@/redux/features/test/testSlice';
import styles from './test.module.scss';
import { showFailToast } from '@/utils/package-antd-mobile';
import { getGoodsDetail } from '@/api/test';

export default function Test() {
  const [goodsDetail, setGoodsDetail] = useState<any>({});
  const dispatch = useDispatch();
  const goodsList = useSelector((state: any) => {
    console.log(11, state.test.goodsData);
    return state.test.goodsData;
  });

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

  return (
    <div className={styles.testPage}>
      {list(goodsList)}
      <div>
        <div>{goodsDetail.title}</div>
        <div>{goodsDetail.price}</div>
      </div>
    </div>
  );
}
