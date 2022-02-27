import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/Header';
import {DashboardEmotionDiaryScreen, EmotionDiaryScreen} from '@src/screens/emotion_diary';
import ExpertLoginScreen from '@src/screens/login/expert';
import UserLoginScreen from '@src/screens/login/user';
import RegisterScreen from '@src/screens/register';
import RoleScreen from '@src/screens/role';
import React from 'react';
import {AuthStackParamList} from './AuthStackParams';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
    return (
        <AuthStack.Navigator
            screenOptions={({navigation}) => ({
                headerShown: true,
                headerTransparent: true,
                headerShadowVisible: false,
                title: '',
            })}
            initialRouteName={'EmotionDiary'}>
            <AuthStack.Screen name="ExpertLogin" component={ExpertLoginScreen} />
            <AuthStack.Screen name="UserLogin" component={UserLoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="RoleChoose" component={RoleScreen} />
            <AuthStack.Group
                screenOptions={{
                    title: 'Emotion Diary',
                    headerShadowVisible: false,
                    headerShown: true,
                    header: props => <Header {...props} />,
                }}>
                <AuthStack.Screen name="EmotionDiary" component={EmotionDiaryScreen} />
                <AuthStack.Screen name="DashboardEmotionDiary" component={DashboardEmotionDiaryScreen} />
            </AuthStack.Group>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
