import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeTabProps} from '../TabNavigatorParams';
import {TabNavigatorParamsList} from '../TabNavigatorParams';

//Expert Home Prop
type UserHomeScreenNavigationProps = CompositeScreenProps<HomeTabProps, UserRootScreenProps>;

//App Stack Navigator
export type UserStackParamList = {
    UserRoot: NavigatorScreenParams<TabNavigatorParamsList>;
    FeelingModal: undefined;
};
type UserRootScreenProps = NativeStackScreenProps<UserStackParamList, 'UserRoot'>;
type FeelingModalScreenProps = NativeStackScreenProps<UserStackParamList, 'FeelingModal'>;

export type {UserHomeScreenNavigationProps, UserRootScreenProps, FeelingModalScreenProps};
