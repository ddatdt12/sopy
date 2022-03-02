import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootNavigatorParamsList = {
    Home: undefined;
    Explore: undefined;
    Chat: undefined;
    Profile: undefined;
};

type HomeTabProps = BottomTabNavigationProp<RootNavigatorParamsList, 'Home'>;
type ExploreTabProps = BottomTabNavigationProp<RootNavigatorParamsList, 'Explore'>;
type ChatTabProps = BottomTabNavigationProp<RootNavigatorParamsList, 'Chat'>;
type ProfileTabProps = BottomTabNavigationProp<RootNavigatorParamsList, 'Profile'>;

export type {HomeTabProps, ExploreTabProps, ChatTabProps, ProfileTabProps};
