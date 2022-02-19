import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Intro: undefined;
    Home: undefined;
    Explore: undefined;
    Register: undefined;
    RoleChoose: undefined;
    ExpertLogin: undefined;
    UserLogin: undefined;
    Posts: undefined;
    PostDetails: undefined;
    Search: undefined;
    EmotionDiary: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type ExploreScreenProps = NativeStackScreenProps<RootStackParamList, 'Explore'>;
type ExpertLoginScreenProps = NativeStackScreenProps<RootStackParamList, 'ExpertLogin'>;
type UserLoginScreenProps = NativeStackScreenProps<RootStackParamList, 'UserLogin'>;
type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;
type IntroScreenProps = NativeStackScreenProps<RootStackParamList, 'Intro'>;
type RoleChooseScreenProps = NativeStackScreenProps<RootStackParamList, 'RoleChoose'>;
type PostDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'PostDetails'>;
type MorePostScreenProps = NativeStackScreenProps<RootStackParamList, 'Posts'>;
type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

export type {
    HomeScreenProps,
    ExploreScreenProps,
    ExpertLoginScreenProps,
    UserLoginScreenProps,
    RegisterScreenProps,
    IntroScreenProps,
    RoleChooseScreenProps,
    MorePostScreenProps,
    PostDetailsScreenProps,
    SearchScreenProps,
};
