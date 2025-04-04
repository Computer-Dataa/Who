import { combineReducers, configureStore }
  from '@reduxjs/toolkit';

import { ColorSlice } from '../slices/color'

const reducer = combineReducers({
  [ColorSlice.reducerPath]: ColorSlice.reducer,
});

export const store = configureStore({
  reducer,
})