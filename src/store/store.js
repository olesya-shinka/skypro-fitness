import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/userSlice";
import { localStorageMiddleware } from "./slices/userSlice";
import coursesReducer from './slices/coursesSlice'

export const store = configureStore({
    reducer: {
        user: authReducer,
        courses: coursesReducer,
    },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),

})