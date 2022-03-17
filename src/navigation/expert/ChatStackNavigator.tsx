import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavHeader from '@src/components/NavHeader';
import UserProfileChatScreen from '@src/screens/chat/expert/UserProfile';
import WithUserChatScreen from '@src/screens/chat/expert/WithUserChat';
import ChatSearchScreen from '@src/screens/chat/search';
import DashboardEmotionScreen from '@src/screens/emotion_diary/DashboardEmotionDiary';
import React from 'react';
import {ExpertChatStackParamList} from './type';

const ChatStack = createNativeStackNavigator<ExpertChatStackParamList>();

const ExpertChatStackNavigator: React.FC = () => {
    return (
        <ChatStack.Navigator
            screenOptions={() => ({
                //headerTitle: props => <HeaderChat {...props} />,
                headerShown: false,
            })}>
            <ChatStack.Screen name="ExpertSearchChat" component={ChatSearchScreen} />
            <ChatStack.Screen name="WithUserChat" component={WithUserChatScreen} />
            <ChatStack.Screen name="UserProfileChat" component={UserProfileChatScreen} />
            <ChatStack.Screen
                name="DashboardEmotionDiary"
                options={{
                    headerShown: true,
                    title: 'Emotion Diary',
                    header: props => <NavHeader {...props} />,
                }}
                component={DashboardEmotionScreen}
            />
        </ChatStack.Navigator>
    );
};
export default ExpertChatStackNavigator;
