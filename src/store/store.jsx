import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/userSlice";
import { localStorageMiddleware } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: authReducer,
    },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),

})
