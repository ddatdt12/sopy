import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from '@src/screens/explore';
import CreateEventScreen from '@src/screens/home/expert/create_event';
import CreatePostScreen from '@src/screens/home/expert/create_post';
import ExpertEditProfileScreen from '@src/screens/profile/expert/ExpertEditProfile';
import React from 'react';
import ExpertChatStackNavigator from './ChatStackNavigator';
import RootNavigator from './ExpertRootNavigator';
import {ExpertStackParamList} from './type';
const ExpertStack = createNativeStackNavigator<ExpertStackParamList>();

const ExpertStackNavigator = () => {
    return (
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
    );
};

export default ExpertStackNavigator;
