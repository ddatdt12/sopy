import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
    Intro: undefined;

    //Auth
    Register: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;

    //Root Stack
    Root: undefined;

    EmotionDiary: undefined;
    DashboardEmotionDiary: undefined;
};

export type HomeStackParamList = {
    Intro: undefined;

    //Auth
    Register: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;

    //Root Stack
    Root: undefined;

    EmotionDiary: undefined;
    DashboardEmotionDiary: undefined;
};

//Authentication
type ExpertLoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'ExpertLogin'>;
type UserLoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'UserLogin'>;
type RegisterScreenProps = NativeStackScreenProps<AuthStackParamList, 'Register'>;
type IntroScreenProps = NativeStackScreenProps<AuthStackParamList, 'Intro'>;
type RoleChooseScreenProps = NativeStackScreenProps<AuthStackParamList, 'RoleChoose'>;

type RootStackProps = NativeStackScreenProps<AuthStackParamList, 'Root'>;

//Emotion Diary
type EmotionDiaryScreenProps = NativeStackScreenProps<AuthStackParamList, 'EmotionDiary'>;
type DashboardEmotionDiaryScreenProps = NativeStackScreenProps<AuthStackParamList, 'DashboardEmotionDiary'>;

export type {
    ExpertLoginScreenProps,
    UserLoginScreenProps,
    RegisterScreenProps,
    IntroScreenProps,
    RoleChooseScreenProps,
    EmotionDiaryScreenProps,
    DashboardEmotionDiaryScreenProps,
    RootStackProps,
};
