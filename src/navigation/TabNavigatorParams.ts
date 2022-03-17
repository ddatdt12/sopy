import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type MainTabParamsList = {
    Home: undefined;
    Explore: undefined;
    Chat: undefined;
    Profile: undefined;
};

type HomeTabProps = BottomTabScreenProps<MainTabParamsList, 'Home'>;
type ExploreTabProps = BottomTabScreenProps<MainTabParamsList, 'Explore'>;
type ChatTabProps = BottomTabScreenProps<MainTabParamsList, 'Chat'>;
type ProfileTabProps = BottomTabScreenProps<MainTabParamsList, 'Profile'>;

export type {HomeTabProps, ExploreTabProps, ChatTabProps, ProfileTabProps};
