import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from 'navigator';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'redux/Store';

export default function App() {
    let persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar style="light" />
                <RootNavigator />
            </PersistGate>
        </Provider>
    );
}
