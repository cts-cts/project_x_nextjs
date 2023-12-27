import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitilState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isAdmin: boolean;
};

const initialState: InitilState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isAdmin: false,
  } as AuthState,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "123456",
          isAdmin: false,
        },
      };
    },

    logOut: () => {
      return initialState;
    },
  },
});

export const { login, logOut } = auth.actions;

export default auth.reducer;
