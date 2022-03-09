import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/Header';
import ExpertLoginScreen from '@src/screens/auth/login/expert';
import UserLoginScreen from '@src/screens/auth/login/user';
import RegisterScreen from '@src/screens/auth/register';
import RoleScreen from '@src/screens/auth/role';
import IntroScreen from '@src/screens/intro';
import NewPassword from '@src/screens/reset_password/NewPassword';
import SendEmail from '@src/screens/reset_password/SendEmail';
import VerificationCode from '@src/screens/reset_password/VerificationCode';
import {useAppSelector} from '@src/store';
import React from 'react';
import {AppStackParamList} from './AppStackParams';
import ExpertStackNavigator from './expert/ExpertStackNavigator';
import UserStackNavigator from './user/UserStackNavigator';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
    const auth = useAppSelector(state => state.auth);

    const renderRoot = () => {
        if (auth.user?.role === 'expert') {
            return <AppStack.Screen name="Expert" component={ExpertStackNavigator} />;
        }

        return <AppStack.Screen name="User" component={UserStackNavigator} />;
    };
    return (
        <AppStack.Navigator
            screenOptions={{
                headerShown: true,
                headerTransparent: true,
                headerShadowVisible: false,
                title: '',
            }}
            initialRouteName={'RoleChoose'}>
            {!auth.token ? (
                <>
                    <AppStack.Screen name="Intro" component={IntroScreen} />
                    <AppStack.Screen name="RoleChoose" component={RoleScreen} />
                    <AppStack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
                    <AppStack.Screen name="UserLogin" component={UserLoginScreen} />
                    <AppStack.Screen name="Register" component={RegisterScreen} />

                    <AppStack.Group
                        screenOptions={{
                            headerShown: true,
                            headerShadowVisible: false,
                            title: 'Reset password',
                            header: props => <Header {...props} />,
                        }}>
                        <AppStack.Screen name="SendEmail" component={SendEmail} />
                        <AppStack.Screen name="VerificationCode" component={VerificationCode} />
                        <AppStack.Screen name="NewPassword" component={NewPassword} />
                    </AppStack.Group>
                </>
            ) : (
                <>{renderRoot()}</>
            )}
            {/* <AppStack.Group
                screenOptions={{
                    title: 'Emotion Diary',
                    headerShadowVisible: false,
                    headerShown: true,
                    header: props => <Header {...props} />,
                }}>
                <AppStack.Screen name="EmotionDiary" component={EmotionDiaryScreen} />
                <AppStack.Screen name="DashboardEmotionDiary" component={DashboardEmotionDiaryScreen} />
            </AppStack.Group> */}
        </AppStack.Navigator>
    );
};

export default AppNavigator;
