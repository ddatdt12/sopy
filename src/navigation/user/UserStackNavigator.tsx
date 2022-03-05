import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RootNavigator from './UserRootNavigator';
import {UserStackParamList} from './type';
const UserStack = createNativeStackNavigator<UserStackParamList>();

const UserStackNavigator = () => {
    return (
        <UserStack.Navigator
            initialRouteName="UserRoot"
            screenOptions={{
                headerShown: false,
            }}>
            <UserStack.Screen name="UserRoot" component={RootNavigator} />
            <UserStack.Group screenOptions={{presentation: 'modal'}}>
                <UserStack.Screen name="FeelingModal" component={RootNavigator} />
            </UserStack.Group>
        </UserStack.Navigator>
    );
};

export default UserStackNavigator;
