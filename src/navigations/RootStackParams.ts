import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Intro: undefined;
    Home: undefined;
    Explore: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;
    Register: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type ExpertLoginScreenProps = NativeStackScreenProps<RootStackParamList, 'ExpertLogin'>;
type UserLoginScreenProps = NativeStackScreenProps<RootStackParamList, 'UserLogin'>;
type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;
type IntroScreenProps = NativeStackScreenProps<RootStackParamList, 'Intro'>;
type RoleChooseScreenProps = NativeStackScreenProps<RootStackParamList, 'RoleChoose'>;

export type {
    HomeScreenProps,
    ExpertLoginScreenProps,
    UserLoginScreenProps,
    RegisterScreenProps,
    IntroScreenProps,
    RoleChooseScreenProps,
};
