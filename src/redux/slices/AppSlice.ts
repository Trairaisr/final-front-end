import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { MAIN_URL, login } from "./actions";
import { isAxiosError } from "axios";

interface AppState {
  isLoggedIn: boolean;
  userInfo: {
    id: number;
    name: string;
    lastname: string;
    userType: string;
  } | null;
}

const initialState: AppState = { isLoggedIn: false, userInfo: null };

export const loginAction = createAsyncThunk(
  `${MAIN_URL}/users/login`,
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await login(username, password);

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) return rejectWithValue(error.response!.data);
      else rejectWithValue(error.message);
    }
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoggedIn: (state, { payload }: { payload: boolean }) => {
      state.isLoggedIn = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      console.log("loading");
    });
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.userInfo = payload.userInfo;
      localStorage.setItem("token", payload.token);
    });
    builder.addCase(loginAction.rejected, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export const { setIsLoggedIn } = appSlice.actions;

export const selectIsLoggedIn = (state: RootState) =>
  state[appSlice.name].isLoggedIn;
