import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainTabParamsList} from '../TabNavigatorParams';

export type UserMainTabProps<T extends keyof MainTabParamsList> = CompositeScreenProps<
    BottomTabScreenProps<MainTabParamsList, T>,
    UserStackProps<keyof UserStackParamList>
>;

//App Stack Navigator
export type UserStackParamList = {
    UserRoot: NavigatorScreenParams<MainTabParamsList>;
    UserProfile: NavigatorScreenParams<UserProfileStackParamList>;
    FeelingModal: undefined;

    ChatStack: NavigatorScreenParams<UserChatStackParamList>;
};
export type UserStackProps<T extends keyof UserStackParamList> = NativeStackScreenProps<UserStackParamList, T>;

//Profile
export type UserProfileStackParamList = {
    EditProfile: undefined;
    EmotionDiary: undefined;
    DashboardEmotionDiary: undefined;
    Search: undefined;
    ChatStack: NavigatorScreenParams<UserChatStackParamList>;
};

export type UserProfileStackProps<T extends keyof UserProfileStackParamList> = NativeStackScreenProps<
    UserProfileStackParamList,
    T
>;

//Chat
export type UserChatStackParamList = {
    MainChat: {user: User; withStranger?: boolean};
    ChatSearch: undefined;
    ChooseExpert: undefined;
    ExpertProfileChat: {expert: User};
};
export type UserChatStackProps<T extends keyof UserChatStackParamList> = NativeStackScreenProps<
    UserChatStackParamList,
    T
>;
