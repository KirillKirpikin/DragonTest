import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rocketsSlice from './slices/rocketsSlice';
import oneRocketSlice from './slices/oneRocketSlice'
import userSlice from './slices/userSlice';

const rootReduser = combineReducers({
    rockets: rocketsSlice,
    oneRocket: oneRocketSlice,
    user: userSlice
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['user']
}

const persistedReduser = persistReducer(persistConfig, rootReduser)


const store = configureStore({
    reducer: persistedReduser,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store);
export default store;