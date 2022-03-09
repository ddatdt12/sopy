import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {UserStackParamList} from './type';
import RootNavigator from './UserRootNavigator';
const UserStack = createNativeStackNavigator<UserStackParamList>();

const UserStackNavigator = () => {
    return (
        <UserStack.Navigator
            initialRouteName="UserRoot"
            screenOptions={{
                headerShown: false,
            }}>
            <UserStack.Screen name="UserRoot" component={RootNavigator} />
        </UserStack.Navigator>
    );
};

export default UserStackNavigator;
