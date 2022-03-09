import {NavigationContainer} from '@react-navigation/native';
import React, {FC, Suspense, useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {setupInterceptors} from './api/instance';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from './screens/splash';
import {persistor, store} from './store';
const App: FC = () => {
    return (
        <Suspense fallback="Loading...">
            <Provider store={store}>
                <PersistGate loading={<SplashScreen />} persistor={persistor}>
                    <NavigationContainer>
                        <AppNavigator />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </Suspense>
    );
};

setupInterceptors(store);

export default App;
