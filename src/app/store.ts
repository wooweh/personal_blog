import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist"
import { coreSlice } from "../features/core/coreSlice"
import { userSlice } from "../features/user/userSlice"
import { homeSlice } from "../features/home/homeSlice"
import { blogSlice } from "../features/blog/blogSlice"
import storageSession from "redux-persist/lib/storage/session"

const rootReducer = combineSlices(coreSlice, userSlice, homeSlice, blogSlice)

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: "root",
  storage: storageSession,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
})
export const persistor = persistStore(store)

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
