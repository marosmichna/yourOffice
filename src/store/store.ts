import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./userName/userNameSlice";

export const store = configureStore({
    reducer: {
        userName: userNameReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;