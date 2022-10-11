import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { ShazamCoreApi } from "./services/ShazamCore";

export const store = configureStore({
  reducer: {
    [ShazamCoreApi.reducerPath]: ShazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ShazamCoreApi.middleware),
});
