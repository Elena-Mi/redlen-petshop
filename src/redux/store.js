import { configureStore, combineReducers } from "@reduxjs/toolkit";
import shop from './productSlice';
import cart from './cartSlice';
import { persistStore, 
    persistReducer,
    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({shop, cart});

const persistedReducer = persistReducer( persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  export const persistor = persistStore(store);
