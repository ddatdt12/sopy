import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

//Bottom Navigator

export type RootNavigatorParamsList = {
    Home: undefined;
    Explore: undefined;
    Chat: undefined;
    Profile: undefined;
};

type HomeTabProps = BottomTabScreenProps<RootNavigatorParamsList, 'Home'>;
type ExploreTabProps = BottomTabScreenProps<RootNavigatorParamsList, 'Explore'>;
type ChatTabProps = BottomTabScreenProps<RootNavigatorParamsList, 'Chat'>;
type ProfileTabProps = BottomTabScreenProps<RootNavigatorParamsList, 'Profile'>;

export type {HomeTabProps, ExploreTabProps, ChatTabProps, ProfileTabProps, ExpertHomeScreenNavigationProp};

//Expert Home Prop
type ExpertHomeScreenNavigationProp = CompositeScreenProps<HomeTabProps, ExpertRootScreenProps>;

//App Stack Navigator
export type AppStackParamList = {
    ExpertRoot: NavigatorScreenParams<RootNavigatorParamsList>;
    CreatePost: undefined;
    CreateEvent: undefined;
};
type ExpertRootScreenProps = NativeStackScreenProps<AppStackParamList, 'ExpertRoot'>;
type CreatePostScreenProps = NativeStackScreenProps<AppStackParamList, 'CreatePost'>;
type CreateEventScreenProps = NativeStackScreenProps<AppStackParamList, 'CreateEvent'>;

export type {ExpertRootScreenProps, CreatePostScreenProps, CreateEventScreenProps};
