import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpertLoginScreen from '@src/screens/auth/login/expert';
import UserLoginScreen from '@src/screens/auth/login/user';
import RegisterScreen from '@src/screens/auth/register';
import RoleScreen from '@src/screens/auth/role';
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
                    <AppStack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
                    <AppStack.Screen name="UserLogin" component={UserLoginScreen} />
                    <AppStack.Screen name="Register" component={RegisterScreen} />
                    <AppStack.Screen name="RoleChoose" component={RoleScreen} />
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
