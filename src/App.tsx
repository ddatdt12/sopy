import {NavigationContainer} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {Provider} from 'react-redux';
import {setupInterceptors} from './api/instance';
import AppNavitor from './AppNavigator';
import {store} from './store';

const App: FC = () => {
    useEffect(() => {}, []);

    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppNavitor />
            </NavigationContainer>
        </Provider>
    );
};

setupInterceptors(store);

export default App;
