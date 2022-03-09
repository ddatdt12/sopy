import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeTabProps} from '../TabNavigatorParams';
import {TabNavigatorParamsList} from '../TabNavigatorParams';

//Home Prop
type UserHomeScreenProps = CompositeScreenProps<HomeTabProps, UserRootScreenProps>;

//App Stack Navigator
export type UserStackParamList = {
    UserRoot: NavigatorScreenParams<TabNavigatorParamsList>;
    FeelingModal: undefined;
    EmotionDiary: undefined;
    DashboardEmotionDiary: undefined;
};
type EmotionDiaryScreenProps = NativeStackScreenProps<UserStackParamList, 'EmotionDiary'>;
type DashboardEmotionDiaryScreenProps = NativeStackScreenProps<UserStackParamList, 'DashboardEmotionDiary'>;
type UserRootScreenProps = NativeStackScreenProps<UserStackParamList, 'UserRoot'>;
type FeelingModalScreenProps = NativeStackScreenProps<UserStackParamList, 'FeelingModal'>;

export type {
    UserHomeScreenProps,
    UserRootScreenProps,
    FeelingModalScreenProps,
    EmotionDiaryScreenProps,
    DashboardEmotionDiaryScreenProps,
};
