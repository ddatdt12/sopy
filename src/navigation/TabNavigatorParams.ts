import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type TabNavigatorParamsList = {
    Home: undefined;
    Explore: undefined;
    Chat: undefined;
    Profile: undefined;
};

type HomeTabProps = BottomTabScreenProps<TabNavigatorParamsList, 'Home'>;
type ExploreTabProps = BottomTabScreenProps<TabNavigatorParamsList, 'Explore'>;
type ChatTabProps = BottomTabScreenProps<TabNavigatorParamsList, 'Chat'>;
type ProfileTabProps = BottomTabScreenProps<TabNavigatorParamsList, 'Profile'>;

export type {HomeTabProps, ExploreTabProps, ChatTabProps, ProfileTabProps};
