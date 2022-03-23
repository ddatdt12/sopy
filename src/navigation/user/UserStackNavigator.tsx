import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import UserChatStackNavigator from './ChatStackNavigator';
import UserProfileStackNavigator from './ProfileStackNavigator';
import {UserStackParamList} from './type';
import UserRootNavigator from './UserRootNavigator';
const UserStack = createNativeStackNavigator<UserStackParamList>();

const UserStackNavigator = () => {
    return (
        <UserStack.Navigator
            initialRouteName="UserRoot"
            screenOptions={{
                headerShown: false,
            }}>
            <UserStack.Screen name="UserRoot" component={UserRootNavigator} />
            <UserStack.Screen name="ChatStack" component={UserChatStackNavigator} />
            <UserStack.Screen name="UserProfile" component={UserProfileStackNavigator} />
        </UserStack.Navigator>
    );
};

export default UserStackNavigator;
