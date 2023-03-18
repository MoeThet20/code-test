import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import AuthReducer from './slice/AuthSlice';
import CardReducer from './slice/CardSlice';

const reducers = combineReducers({
    auth: AuthReducer,
    card: CardReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'card']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
