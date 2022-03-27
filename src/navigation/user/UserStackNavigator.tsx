import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatContext from '@src/context/ChatContext';
import {useAppSelector} from '@src/store';
import React, {useRef} from 'react';
import UserChatStackNavigator from './ChatStackNavigator';
import UserProfileStackNavigator from './ProfileStackNavigator';
import {UserStackParamList} from './type';
import UserRootNavigator from './UserRootNavigator';

const UserStack = createNativeStackNavigator<UserStackParamList>();

const UserStackNavigator = () => {
    const user = useAppSelector(state => state.auth.user);
    const ws = useRef(
        new WebSocket(`ws://mental-health-gdsc-app.herokuapp.com/ws/chat/${user?.firebase_user_id}`),
    ).current;

    return (
        <ChatContext.Provider value={{ws}}>
            <UserStack.Navigator
                initialRouteName="UserRoot"
                screenOptions={{
                    headerShown: false,
                }}>
                <UserStack.Screen name="UserRoot" component={UserRootNavigator} />
                <UserStack.Screen name="ChatStack" component={UserChatStackNavigator} />
                <UserStack.Screen name="UserProfile" component={UserProfileStackNavigator} />
            </UserStack.Navigator>
        </ChatContext.Provider>
    );
};

export default UserStackNavigator;
