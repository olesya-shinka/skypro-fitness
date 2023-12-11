import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
  password: null,
};

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === userSlice.actions.initializeUserFromLocalStorage.type) {
    const storedEmail = localStorage.getItem("email");
    const storedToken = localStorage.getItem("token");
    const storedId = localStorage.getItem("id");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail && storedToken && storedId && storedPassword) {
      store.dispatch(userSlice.actions.setUser({ email: storedEmail, token: storedToken, id: storedId, password: storedPassword }));
    }
  }

  return next(action);
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.password = action.payload.password;
      localStorage.setItem("email", state.email);
      localStorage.setItem("token", state.token);
      localStorage.setItem("id", state.id);
      localStorage.setItem("password", state.password);
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.password = null;
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.setItem("password");
    },

    initializeUserFromLocalStorage() {
      // Пустное действие, middleware будет обрабатывать это действие
    },

  },
});

export const { setUser, removeUser, initializeUserFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;
export {localStorageMiddleware};