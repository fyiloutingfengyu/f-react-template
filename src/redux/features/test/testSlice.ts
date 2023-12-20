import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGoodsList } from '@/api/test';

const initialState = {
  goodsData: {}
};

// 获取商品列表
const fetchGoodsList = () => {
  return new Promise((resolve, reject) => {
    getGoodsList().then(res => {
      console.log(res);
      resolve(res);
    }).catch(err => {
      console.log(err);
      reject(err);
    });
  });
};

export const getGoodsListAsync: any = createAsyncThunk(
  'test/goodsList',
  async () => {
    try {
      const response: any = await fetchGoodsList();

      return response.data;
    } catch (err: any) {
      throw new Error(err);
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
      });
  }
});

export default testSlice.reducer;
