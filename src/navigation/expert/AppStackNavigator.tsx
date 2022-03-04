import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateEventScreen from '@src/screens/home/expert/create_event';
import CreatePostScreen from '@src/screens/home/expert/create_post';
import React from 'react';
import RootNavigator from './ExpertRootNavigator';
import {AppStackParamList} from './NavigatorParams';
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
    return (
        <AppStack.Navigator
            initialRouteName="ExpertRoot"
            screenOptions={{
                headerShown: false,
            }}>
            <AppStack.Screen name="ExpertRoot" component={RootNavigator} />
            <AppStack.Screen name="CreatePost" component={CreatePostScreen} />
            <AppStack.Screen name="CreateEvent" component={CreateEventScreen} />
        </AppStack.Navigator>
    );
};

export default AppStackNavigator;
