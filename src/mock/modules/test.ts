// todo f
// @ts-ignore
const getGoodsList = {
  url: '/api/goodsList',
  method: 'get',
  response: () => {
    return {
      'code': 200,
      'message': '请求成功',
      'data': [
        {
          id: 1,
          title: '商品1',
          price: 1,
        },
        {
          id: 2,
          title: '商品2',
          price: 2
        }
      ]
    };
  }
};

const getGoodsDetail = {
  url: '/api/goodsDetail',
  method: 'get',
  response: () => {
    return {
      'code': 200,
      'message': '请求成功',
      'data': {
        title: '商品1',
        price: 1
      }
    };
  }
};

module.exports = [
  getGoodsList,
  getGoodsDetail
];
