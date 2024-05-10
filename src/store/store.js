import { configureStore } from "@reduxjs/toolkit";
import persistSessionReducer from "../store/authSesion/sessionSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistdReducer = persistReducer(
  persistConfig,
  persistSessionReducer.reducer
);

export const store = configureStore({
  reducer: {
    auth: persistdReducer,
  },
});

export const persistor = persistStore(store);
