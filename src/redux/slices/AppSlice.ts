import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { MAIN_URL, getVacations, login, register } from "./actions";
import { isAxiosError } from "axios";

interface Vacation {
  id:number;
  destination: string;
  description: string;
  image: string;
  startDate: Date;
  endDate: Date;
  price: number;
}

interface AppState {
  vacations: Vacation[];
  isLoggedIn: boolean;
  userInfo: {
    id: number;
    name: string;
    lastname: string;
    userType: string;
  } | null;
}

const initialState: AppState = {
  isLoggedIn: false,
  userInfo: null,
  vacations: [],
};

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

export const registerAction = createAsyncThunk(
  `${MAIN_URL}/users/register`,
  async (
    {
      name,
      lastname,
      username,
      email,
      password,
    }: {
      name: string;
      lastname: string;
      username: string;
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await register(
        name,
        lastname,
        username,
        email,
        password
      );

      return {
        token: response.data.token,
        userInfo: {
          id: response.data.userId,
          name,
          lastname,
          username,
          userType: "user",
        },
      };
    } catch (error) {
      if (isAxiosError(error)) return rejectWithValue(error.response!.data);
      else rejectWithValue(error.message);
    }
  }
);

export const getVacationsAction = createAsyncThunk(
  `${MAIN_URL}/users/vacations`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getVacations();

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
    builder.addCase(registerAction.pending, (state) => {
      console.log("loading");
    });
    builder.addCase(registerAction.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.userInfo = payload!.userInfo;
      localStorage.setItem("token", payload!.token);
      console.log("register success ");
    });
    builder.addCase(registerAction.rejected, (state, { payload }) => {
      console.log(payload);
      console.log("register didn't success ");
    });
    builder.addCase(getVacationsAction.pending, (state) => {
      console.log("loading");
    });
    builder.addCase(getVacationsAction.fulfilled, (state, { payload }) => {
     state.vacations=payload!.vacations
      console.log("vacations pulled successfully ");
    });
    builder.addCase(getVacationsAction.rejected, (state, { payload }) => {
      console.log(payload);
      console.log("Count pull vacations ");
    });
  },
});

export const { setIsLoggedIn } = appSlice.actions;

export const selectIsLoggedIn = (state: RootState) =>
  state[appSlice.name].isLoggedIn;

export const selectVacations = (state: RootState) =>
  state[appSlice.name].vacations;
