import {
  type Action,
  configureStore,
  type ThunkAction,
} from "@reduxjs/toolkit";
import { appSlice } from "./slices/AppSlice";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
