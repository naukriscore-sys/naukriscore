import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import counterReducer from "@/redux/slice/counter"
import progressReducer from "./slice/progressBar"
import userReducer from "./slice/user"
import { rootApiSlice } from "./service/rootApislice"

// Combine all reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  progress: progressReducer,
  userData: userReducer,
  [rootApiSlice.reducerPath]: rootApiSlice.reducer,
})

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData"], // only persist user data (you can add others if needed)
}

// Wrap combined reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required by redux-persist
    }).concat(rootApiSlice.middleware),
})

// Persistor (for PersistGate)
export const persistor = persistStore(store)

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
