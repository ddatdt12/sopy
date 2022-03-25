import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavHeader from '@src/components/NavHeader';
import {DashboardEmotionDiaryScreen, EmotionDiaryScreen} from '@src/screens/emotion_diary';
import UserEditProfileScreen from '@src/screens/profile/profile_user/UserEditProfile';
import React from 'react';
import {UserProfileStackParamList} from './type';

const UserProfileStack = createNativeStackNavigator<UserProfileStackParamList>();

const UserProfileStackNavigator = () => {
    return (
        <UserProfileStack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <UserProfileStack.Screen name="EditProfile" component={UserEditProfileScreen} />
            <UserProfileStack.Group
                screenOptions={{
                    headerShown: true,
                    header: props => <NavHeader {...props} />,
                    title: 'Emotion Diary',
                }}>
                <UserProfileStack.Screen name="EmotionDiary" component={EmotionDiaryScreen} />
                <UserProfileStack.Screen name="DashboardEmotionDiary" component={DashboardEmotionDiaryScreen} />
            </UserProfileStack.Group>
        </UserProfileStack.Navigator>
    );
};

export default UserProfileStackNavigator;
