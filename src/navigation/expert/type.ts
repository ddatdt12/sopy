import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainTabParamsList} from '../TabNavigatorParams';

export type ExpertMainTabProps<T extends keyof MainTabParamsList> = CompositeScreenProps<
    BottomTabScreenProps<MainTabParamsList, T>,
    ExpertStackProps<keyof ExpertStackParamList>
>;

//App Stack Navigator
export type ExpertStackParamList = {
    ExpertRoot: NavigatorScreenParams<MainTabParamsList>;
    CreatePost: undefined;
    CreateEvent: undefined;
    EditProfile: undefined;

    ExpertChatStack: NavigatorScreenParams<ExpertChatStackParamList>;
};
export type ExpertStackProps<T extends keyof ExpertStackParamList> = NativeStackScreenProps<ExpertStackParamList, T>;

export type ExpertChatStackParamList = {
    // Expert
    WithUserChat: {user: User};
    UserProfileChat: {user: User};
    DashboardEmotionDiary: undefined;
    ExpertSearchChat: undefined;
};

export type ExpertChatStackProps<T extends keyof ExpertChatStackParamList> = NativeStackScreenProps<
    ExpertChatStackParamList,
    T
>;
