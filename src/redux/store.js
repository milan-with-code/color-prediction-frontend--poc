import {configureStore} from '@reduxjs/toolkit';
import timerReducer from './slices/timerSlice';
import counterReducer from './slices/counterSlice';
import bettingOptionsReducer from './slices/bettingOptionsSlice';

const store = configureStore({
  reducer: {
    timer: timerReducer,
    counter: counterReducer,
    bettingOptions: bettingOptionsReducer,
  },
});

export default store;
