import http from '@/utils/http';
import { RequestOptions } from '@/types/common';

export const getGoodsList = (options: RequestOptions = {}) => {
  return http({
    url: '/api/goodsList',
    method: 'get',
    ...options
  });
};

export const getGoodsDetail = (options: RequestOptions = {}) => {
  return http({
    url: '/api/goodsDetail',
    method: 'get',
    ...options
  });
};
