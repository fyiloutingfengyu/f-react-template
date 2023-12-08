import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  value1: number;
  status: 'idle' | 'loading' | 'failed';
  data: any;
}

const initialState: CounterState = {
  value: 0,
  value1: 0,
  status: 'idle',
  data: {}
};

const fetchCount = (amount = 1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: amount
      });
    }, 1000);
  });
};

// todo f
export const incrementAsync: any = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {

    const response = await fetchCount(amount);

    // @ts-ignore
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // todo f
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.log(5, 'incrementAsync');
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// todo f any 提取公共类型
export const selectCount = (state: any) => state.counter.value;
export const selectCount1 = (state: any) => state.counter.value1;
export const getData = (state: any) => state.counter.data;

// todo f
export const incrementIfOdd: any = (amount: number) => {
  // todo f
  return (dispatch: any, getState: any) => {
    const currentValue = selectCount(getState());

    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
};

export default counterSlice.reducer;

