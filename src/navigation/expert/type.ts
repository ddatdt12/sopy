import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ExploreTabProps, HomeTabProps, ProfileTabProps, TabNavigatorParamsList} from '../TabNavigatorParams';

//Expert Home Prop
type ExpertHomeCompositeProps = CompositeScreenProps<HomeTabProps, ExpertRootScreenProps>;
type ExpertExploreCompositeProps = CompositeScreenProps<ExploreTabProps, SearchScreenProps>;
type ExpertProfileCompositeProps = CompositeScreenProps<ProfileTabProps, ExpertRootScreenProps>;

//App Stack Navigator
export type ExpertStackParamList = {
    ExpertRoot: NavigatorScreenParams<TabNavigatorParamsList>;
    CreatePost: undefined;
    CreateEvent: undefined;
    Search: undefined;
    EditProfile: undefined;
};
type ExpertRootScreenProps = NativeStackScreenProps<ExpertStackParamList, 'ExpertRoot'>;
type CreatePostScreenProps = NativeStackScreenProps<ExpertStackParamList, 'CreatePost'>;
type CreateEventScreenProps = NativeStackScreenProps<ExpertStackParamList, 'CreateEvent'>;
type SearchScreenProps = NativeStackScreenProps<ExpertStackParamList, 'Search'>;
type EditProfileScreenProps = NativeStackScreenProps<ExpertStackParamList, 'EditProfile'>;

export type {
    ExpertHomeCompositeProps,
    ExpertExploreCompositeProps,
    ExpertProfileCompositeProps,
    ExpertRootScreenProps,
    CreatePostScreenProps,
    CreateEventScreenProps,
    EditProfileScreenProps,
};
