import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import ExploreScreen from '@src/screens/explore';
import React from 'react';

const ExploreStack = createNativeStackNavigator<ExploreStackParamList>();

function ExploreStackScreen() {
    return (
        <ExploreStack.Navigator
            initialRouteName="MainExplore"
            screenOptions={{
                headerShown: false,
            }}>
            <ExploreStack.Screen name="MainExplore" component={ExploreScreen} />
        </ExploreStack.Navigator>
    );
}

export default ExploreStackScreen;

export type ExploreStackParamList = {
    //
    MainExplore: undefined;
    PostDetails: undefined;
    Search: undefined;
};
type ExploreScreenProps = NativeStackScreenProps<ExploreStackParamList, 'MainExplore'>;
type PostDetailsScreenProps = NativeStackScreenProps<ExploreStackParamList, 'PostDetails'>;
type SearchScreenProps = NativeStackScreenProps<ExploreStackParamList, 'Search'>;

export type {PostDetailsScreenProps, SearchScreenProps, ExploreScreenProps};
