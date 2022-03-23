import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavHeader from '@src/components/NavHeader';
import ExpertLoginScreen from '@src/screens/auth/login/expert';
import UserLoginScreen from '@src/screens/auth/login/user';
import RegisterScreen from '@src/screens/auth/register';
import RoleScreen from '@src/screens/auth/role';
import {SearchScreen} from '@src/screens/explore';
import IntroScreen from '@src/screens/intro';
import SendEmail from '@src/screens/reset_password';
import SplashScreen from '@src/screens/splash';
import {useAppSelector} from '@src/store';
import React from 'react';
import {AppStackParamList} from './AppStackParams';
import ExpertStackNavigator from './expert/ExpertStackNavigator';
import UserStackNavigator from './user/UserStackNavigator';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
    const auth = useAppSelector(state => state.auth);

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
                        component={SendEmail}
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
