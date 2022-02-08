import React from 'react';

import {FC} from 'react';
import {View} from 'react-native';
import IntroScreen from './screens/intro';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {IRootState, IStore} from './store';
import {IAuthState} from './store/authSlice';

const AuthStack = createNativeStackNavigator();

const AuthNavigator: FC = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Intro" component={IntroScreen} />
        </AuthStack.Navigator>
    );
};

const AppNavitor: FC = ({children}) => {
    const auth = useSelector<IRootState, IAuthState>(state => state.auth);

    if (auth.token) {
        return <AuthNavigator />;
    }
    return <AuthNavigator />;
};

export default AppNavitor;
