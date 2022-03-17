import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainChatScreen from '@src/screens/chat/main_chat';
import ChatSearchScreen from '@src/screens/chat/search';
// User
import UserChatHomeScreen from '@src/screens/chat/user';
import ChooseExpertScreen from '@src/screens/chat/user/withExpert';
import ExpertProfileChatScreen from '@src/screens/chat/user/withExpert/ExpertProfile';
import React from 'react';
import {StyleSheet} from 'react-native';
import {UserChatStackParamList} from './type';

const ChatStack = createNativeStackNavigator<UserChatStackParamList>();

const UserChatStackNavigator: React.FC = () => {
    return (
        <ChatStack.Navigator
            screenOptions={() => ({
                //headerTitle: props => <HeaderChat {...props} />,
                headerShown: false,
            })}>
            <ChatStack.Screen name="ChatSearch" component={ChatSearchScreen} />
            <ChatStack.Screen name="MainChat" component={MainChatScreen} />
            <ChatStack.Screen name="ChooseExpert" component={ChooseExpertScreen} />
            <ChatStack.Screen name="ExpertProfileChat" component={ExpertProfileChatScreen} />
        </ChatStack.Navigator>
    );
};
export default UserChatStackNavigator;
const styles = StyleSheet.create({});
