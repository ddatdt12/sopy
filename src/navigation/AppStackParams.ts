import {ExpertStackParamList} from './expert/type';
import {User} from 'firebase/auth';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {UserStackParamList} from './user/type';

export type AppStackParamList = {
    //Auth
    Register: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;

    //Expert
    Expert: NavigatorScreenParams<ExpertStackParamList>;
    User: NavigatorScreenParams<UserStackParamList>;
};

//Authentication
type ExpertLoginScreenProps = NativeStackScreenProps<AppStackParamList, 'ExpertLogin'>;
type UserLoginScreenProps = NativeStackScreenProps<AppStackParamList, 'UserLogin'>;
type RegisterScreenProps = NativeStackScreenProps<AppStackParamList, 'Register'>;
type RoleChooseScreenProps = NativeStackScreenProps<AppStackParamList, 'RoleChoose'>;
type ExpertProps = NativeStackScreenProps<AppStackParamList, 'Expert'>;
type UserProps = NativeStackScreenProps<AppStackParamList, 'User'>;

type ExpertNavigationProp = CompositeScreenProps<ExpertProps, NativeStackScreenProps<ExpertStackParamList>>;
type UserNavigationProp = CompositeScreenProps<UserProps, NativeStackScreenProps<UserStackParamList>>;

export type {ExpertLoginScreenProps, UserLoginScreenProps, RegisterScreenProps, RoleChooseScreenProps};
