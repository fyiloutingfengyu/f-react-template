import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGoodsList } from '@/api/test';

const initialState = {
  goodsData: {}
};

// 获取商品列表
export const getGoodsListAsync: any = createAsyncThunk(
  'test/goodsList',
  async () => {
    try {
      const response: any = await getGoodsList();

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
