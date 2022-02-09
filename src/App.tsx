import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import RoleScreen from '@src/screens/role';
import {store} from './store';
import LoginScreen from './screens/login';

const App: FC = () => {
    return (
        <Provider store={store}>
            <LoginScreen />
            {/* <RoleScreen /> */}
        </Provider>
    );
};

export default App;
