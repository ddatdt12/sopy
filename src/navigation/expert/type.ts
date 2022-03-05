import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ExploreTabProps, HomeTabProps, TabNavigatorParamsList} from '../TabNavigatorParams';

//Expert Home Prop
type ExpertHomeScreenNavigationProps = CompositeScreenProps<HomeTabProps, ExpertRootScreenProps>;
type ExploreScreenNavigationProps = CompositeScreenProps<ExploreTabProps, SearchScreenProps>;

//App Stack Navigator
export type ExpertStackParamList = {
    ExpertRoot: NavigatorScreenParams<TabNavigatorParamsList>;
    CreatePost: undefined;
    CreateEvent: undefined;
    Search: undefined;
};
type ExpertRootScreenProps = NativeStackScreenProps<ExpertStackParamList, 'ExpertRoot'>;
type CreatePostScreenProps = NativeStackScreenProps<ExpertStackParamList, 'CreatePost'>;
type CreateEventScreenProps = NativeStackScreenProps<ExpertStackParamList, 'CreateEvent'>;
type SearchScreenProps = NativeStackScreenProps<ExpertStackParamList, 'Search'>;

export type {
    ExpertHomeScreenNavigationProps,
    ExploreScreenNavigationProps,
    ExpertRootScreenProps,
    CreatePostScreenProps,
    CreateEventScreenProps,
};
