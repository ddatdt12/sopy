import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setToken} from '@src/api/instance';
import NavHeader from '@src/components/NavHeader';
import ExpertLoginScreen from '@src/screens/auth/login/expert';
import UserLoginScreen from '@src/screens/auth/login/user';
import RegisterScreen from '@src/screens/auth/register';
import RoleScreen from '@src/screens/auth/role';
import {SearchScreen} from '@src/screens/explore';
import IntroScreen from '@src/screens/intro';
import SendEmailScreen from '@src/screens/reset_password';
import {useAppSelector} from '@src/store';
import React, {useEffect} from 'react';
import {AppStackParamList} from './AppStackParams';
import ExpertStackNavigator from './expert/ExpertStackNavigator';
import UserStackNavigator from './user/UserStackNavigator';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
    const auth = useAppSelector(state => state.auth);

    useEffect(() => {
        setToken(auth.token);
    }, [auth.token]);

    const renderRoot = () => {
        if (auth.user?.is_expert) {
            return <AppStack.Screen name="Expert" component={ExpertStackNavigator} />;
        }
        return <AppStack.Screen name="User" component={UserStackNavigator} />;
    };
    return (
        <AppStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={'Intro'}>
            {!auth.token ? (
                <>
                    <AppStack.Group
                        screenOptions={{
                            headerShown: true,
                            headerShadowVisible: false,
                            title: '',
                            headerTransparent: true,
                            // header: props => <NavHeader {...props} />,
                        }}>
                        <AppStack.Screen name="Intro" component={IntroScreen} />
                        <AppStack.Screen name="RoleChoose" component={RoleScreen} />
                        <AppStack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
                        <AppStack.Screen name="UserLogin" component={UserLoginScreen} />
                        <AppStack.Screen name="Register" component={RegisterScreen} />
                    </AppStack.Group>

                    <AppStack.Screen
                        name="SendResetPassEmail"
                        options={{
                            headerShown: true,
                            headerShadowVisible: false,
                            title: 'Reset password',
                            header: props => <NavHeader {...props} />,
                        }}
                        component={SendEmailScreen}
                    />
                </>
            ) : (
                <AppStack.Group screenOptions={{headerShown: false}}>
                    {renderRoot()}
                    <AppStack.Screen name="ExploreSearch" component={SearchScreen} />
                </AppStack.Group>
            )}
        </AppStack.Navigator>
    );
};

export default AppNavigator;
