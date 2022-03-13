import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavHeader from '@src/components/NavHeader';
import {SearchScreen} from '@src/screens/explore';
import CreateEventScreen from '@src/screens/home/expert/create_event';
import CreatePostScreen from '@src/screens/home/expert/create_post';
import ExpertEditProfileScreen from '@src/screens/profile/Expert/ExpertEditProfile';
import React from 'react';
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
            <ExpertStack.Screen name="CreatePost" component={CreatePostScreen} />
            <ExpertStack.Screen name="CreateEvent" component={CreateEventScreen} />
            <ExpertStack.Screen name="EditProfile" component={ExpertEditProfileScreen} />
            <ExpertStack.Group
                screenOptions={{
                    presentation: 'modal',
                }}>
                <ExpertStack.Screen name="Search" component={SearchScreen} />
            </ExpertStack.Group>
        </ExpertStack.Navigator>
    );
};

export default ExpertStackNavigator;
