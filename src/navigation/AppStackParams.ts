import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ExpertMainTabProps, ExpertStackParamList} from './expert/type';
import {MainTabParamsList} from './TabNavigatorParams';
import {UserMainTabProps, UserStackParamList} from './user/type';

export type AppStackParamList = {
    //Auth
    Intro: undefined;
    Register: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;
    //ResetPassword;
    SendResetPassEmail: undefined;

    //Expert
    Expert: NavigatorScreenParams<ExpertStackParamList>;
    User: NavigatorScreenParams<UserStackParamList>;
} & CommonStackParamList;
export type AppStackProps<T extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, T>;

export type CommonStackParamList = {
    ExploreSearch: undefined;
};

export type CommonStackProps<T extends keyof CommonStackParamList> = NativeStackScreenProps<CommonStackParamList, T>;

//global
export type MainTabCompositeProps<T extends keyof MainTabParamsList> = CompositeScreenProps<
    UserMainTabProps<T> & ExpertMainTabProps<T>,
    NativeStackScreenProps<CommonStackParamList>
>;
