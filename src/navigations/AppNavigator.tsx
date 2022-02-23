import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoleScreen from '@src/screens/role';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import IntroScreen from '../screens/intro';
import ExpertLoginScreen from '../screens/login/expert';
import UserLoginScreen from '../screens/login/user';
import RegisterScreen from '../screens/register';
import {IRootState} from '../store';
import {IAuthState} from '../store/authSlice';
import {RootStackParamList} from './RootStackParams';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator: FC = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}} initialRouteName={'RoleChoose'}>
            <AuthStack.Screen name="Intro" component={IntroScreen} />
            <AuthStack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
            <AuthStack.Screen name="UserLogin" component={UserLoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="RoleChoose" component={RoleScreen} />
        </AuthStack.Navigator>
    );
};

const AppNavigator: FC = ({children}) => {
    const auth = useSelector<IRootState, IAuthState>(state => state.auth);

    if (auth.token) {
        return <AuthNavigator />;
    }
    return <AuthNavigator />;
};

export default AppNavigator;
