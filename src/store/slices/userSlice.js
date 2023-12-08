import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === userSlice.actions.initializeUserFromLocalStorage.type) {
    const storedEmail = localStorage.getItem("email");
    const storedToken = localStorage.getItem("token");
    const storedId = localStorage.getItem("id");

    if (storedEmail && storedToken && storedId) {
      store.dispatch(userSlice.actions.setUser({ email: storedEmail, token: storedToken, id: storedId }));
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
      localStorage.setItem("email", state.email);
      localStorage.setItem("token", state.token);
      localStorage.setItem("id", state.id);
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("id");
    },

    initializeUserFromLocalStorage() {
      // Пустное действие, middleware будет обрабатывать это действие
    },

  },
});

export const { setUser, removeUser, initializeUserFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;
export {localStorageMiddleware};