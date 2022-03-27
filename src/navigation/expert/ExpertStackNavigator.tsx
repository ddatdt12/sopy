import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateEventScreen from '@src/screens/home/expert/create_event';
import CreatePostScreen from '@src/screens/home/expert/create_post';
import ExpertEditProfileScreen from '@src/screens/profile/profile_expert/ExpertEditProfile';
import {useAppSelector} from '@src/store';
import React, {useRef} from 'react';
import ExpertChatStackNavigator from './ChatStackNavigator';
import RootNavigator from './ExpertRootNavigator';
import {ExpertStackParamList} from './type';
import ChatContext from '@src/context/ChatContext';
const ExpertStack = createNativeStackNavigator<ExpertStackParamList>();

const ExpertStackNavigator = () => {
    const user = useAppSelector(state => state.auth.user);
    const ws = useRef(
        new WebSocket(`ws://mental-health-gdsc-app.herokuapp.com/ws/chat/${user?.firebase_user_id}`),
    ).current;

    return (
        <ChatContext.Provider value={{ws}}>
            <ExpertStack.Navigator
                initialRouteName="ExpertRoot"
                screenOptions={{
                    headerShown: false,
                }}>
                <ExpertStack.Screen name="ExpertRoot" component={RootNavigator} />
                {/* Explore */}
                <ExpertStack.Screen name="CreatePost" component={CreatePostScreen} />
                <ExpertStack.Screen name="CreateEvent" component={CreateEventScreen} />

                {/* CHat */}
                <ExpertStack.Screen name="ExpertChatStack" component={ExpertChatStackNavigator} />

                <ExpertStack.Screen name="EditProfile" component={ExpertEditProfileScreen} />
            </ExpertStack.Navigator>
        </ChatContext.Provider>
    );
};

export default ExpertStackNavigator;
