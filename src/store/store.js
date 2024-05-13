import { configureStore } from "@reduxjs/toolkit";
import persistSessionReducer from "../store/authSesion/sessionSlice.js";
import persistCartReducer from "../store/cart/cartSlice.js";
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

const persistCart = persistReducer(persistConfig, persistCartReducer.reducer);

export const store = configureStore({
  reducer: {
    auth: persistdReducer,
    cart: persistCart,
  },
});

export const persistor = persistStore(store);
