import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGoodsList, getGoodsDetail } from '@/api/test';

const initialState = {
  goodsData: {},
  goodsDetail: {}
};

// 获取商品列表
const fetchGoodsList = () => {
  return new Promise((resolve, reject) => {
    getGoodsList({
      isManualDealError: true
    }).then(res => {
      console.log(res);
      resolve(res);
    }).catch(err => {
      console.log(err);
      reject(err);
    });
  });
};

// 获取商品详情
const fetchGoodsDetail = (id: number | string) => {
  return new Promise((resolve, reject) => {
    getGoodsDetail({
      isManualDealError: true,
      isManualDealHttpError: true,
      params: {
        id: id
      }
    }).then(res => {
      console.log(res);
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

export const getGoodsListAsync: any = createAsyncThunk(
  'test/goodsList',
  async () => {
    try {
      const response: any = await fetchGoodsList();

      console.log('1-response', response);
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

export const getGoodsDetailAsync: any = createAsyncThunk(
  'test/goodsDetail',
  async (id: string | number) => {
    try {
      const response: any = await fetchGoodsDetail(id);
      return response.data;
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  }
);

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGoodsListAsync.fulfilled, (state, action) => {
        state.goodsData = action.payload;
      })
      .addCase(getGoodsDetailAsync.fulfilled, (state, action) => {
        state.goodsDetail = action.payload;
      })
      .addCase(getGoodsDetailAsync.rejected, (state, action) => {
        state.goodsDetail = {
          status: 500,
          message: action.error.message
        };
      });
  }
});

export default testSlice.reducer;
