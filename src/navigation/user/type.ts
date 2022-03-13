import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeTabProps, ProfileTabProps} from '../TabNavigatorParams';
import {TabNavigatorParamsList} from '../TabNavigatorParams';

//Home Prop
type UserHomeScreenProps = CompositeScreenProps<HomeTabProps, UserRootScreenProps>;
type UserProfileScreenProps = CompositeScreenProps<ProfileTabProps, UserRootScreenProps>;

//App Stack Navigator
export type UserStackParamList = {
    UserRoot: NavigatorScreenParams<TabNavigatorParamsList>;
    UserProfile: NavigatorScreenParams<UserProfileStackParamList>;
    FeelingModal: undefined;
};
type UserRootScreenProps = NativeStackScreenProps<UserStackParamList, 'UserRoot'>;

type FeelingModalScreenProps = NativeStackScreenProps<UserStackParamList, 'FeelingModal'>;

export type {UserHomeScreenProps, UserRootScreenProps, UserProfileScreenProps, FeelingModalScreenProps};

//Profile
export type UserProfileStackParamList = {
    EditProfile: undefined;
    EmotionDiary: undefined;
    DashboardEmotionDiary: undefined;
};
type EditProfileProps = NativeStackScreenProps<UserProfileStackParamList, 'EditProfile'>;
type EmotionDiaryProps = NativeStackScreenProps<UserProfileStackParamList, 'EmotionDiary'>;
type DashboardEmotionDiaryProps = NativeStackScreenProps<UserProfileStackParamList, 'DashboardEmotionDiary'>;

export type {EditProfileProps, EmotionDiaryProps, DashboardEmotionDiaryProps};
