import {NavigationContainer} from '@react-navigation/native';
import React, {FC, Suspense, useEffect} from 'react';
import {Provider} from 'react-redux';
import {setupInterceptors} from './api/instance';
import AppNavigator from './navigation/AppNavigator';
import {store} from './store';

const App: FC = () => {
    return (
        <Suspense fallback="Loading...">
            <Provider store={store}>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </Provider>
        </Suspense>
    );
};

setupInterceptors(store);

export default App;
