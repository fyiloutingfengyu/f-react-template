import { configureStore } from '@reduxjs/toolkit';
import commonReducer from '@/store/commonSlice';
import counterReducer from '@/store/counterSlice';
import testReducer from '@/store/testSlice';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    counter: counterReducer,
    test: testReducer
  }
});
