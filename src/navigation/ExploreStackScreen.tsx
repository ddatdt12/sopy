import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import ExploreScreen, {PostDetailsScreen} from '@src/screens/explore';
import SearchScreen from '@src/screens/explore/search';

const ExploreStack = createNativeStackNavigator<ExploreStackParamList>();

function ExploreStackScreen() {
    return (
        <ExploreStack.Navigator
            initialRouteName="MainExplore"
            screenOptions={{
                headerShown: false,
            }}>
            <ExploreStack.Screen name="MainExplore" component={ExploreScreen} />
            <ExploreStack.Screen name="PostDetails" component={PostDetailsScreen} />
            <ExploreStack.Group
                screenOptions={{
                    presentation: 'modal',
                }}>
                <ExploreStack.Screen name="Search" component={SearchScreen} />
            </ExploreStack.Group>
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
