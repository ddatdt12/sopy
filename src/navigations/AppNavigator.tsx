import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExploreScreen from '@src/screens/explore';
import HomeScreen from '@src/screens/home';
import PostScreen from '@src/screens/posts';
import PostDetailsScreen from '@src/screens/post_details';
import RoleScreen from '@src/screens/role';
import SearchScreen from '@src/screens/search';
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
        <AuthStack.Navigator screenOptions={{headerShown: false}} initialRouteName={'UserLogin'}>
            <AuthStack.Screen name="Intro" component={IntroScreen} />
            <AuthStack.Screen name="Home" component={HomeScreen} />
            <AuthStack.Screen name="Explore" component={ExploreScreen} />
            <AuthStack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
            <AuthStack.Screen name="UserLogin" component={UserLoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="RoleChoose" component={RoleScreen} />
            <AuthStack.Screen name="PostDetails" component={PostDetailsScreen} />
            <AuthStack.Screen name="Search" component={SearchScreen} />
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
