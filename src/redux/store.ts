import { configureStore } from '@reduxjs/toolkit';
import commonReducer from '@/redux/features/common/commonSlice';
import counterReducer from '@/redux/features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    counter: counterReducer
  }
});
