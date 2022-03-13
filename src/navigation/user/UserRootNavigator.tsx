import {scaleSize} from '@core/utils';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, STYLES} from '@src/assets/const';
import TabBarButton from '@src/components/TabBarButton';
import ChatScreen from '@src/screens/chat';
import HomeScreen from '@src/screens/home/user';
//Profile
import UserProfileScreen from '@src/screens/profile/user/index';
import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreStackScreen from '../ExploreStackScreen';
import {TabNavigatorParamsList} from '../TabNavigatorParams';

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();
const UserRootNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarButton: props => <TabBarButton {...props} />,
                tabBarActiveTintColor: COLORS.black_2,
                tabBarBackground: () => <View style={{flex: 1, backgroundColor: 'transparent'}} />,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: COLORS.white_3,
                    bottom: scaleSize(12),
                    borderRadius: scaleSize(24),
                    marginHorizontal: scaleSize(6),
                    height: scaleSize(64),
                    ...STYLES.shadow,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: props => <Ionicons name="home-sharp" {...props} />,
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreStackScreen}
                options={{
                    tabBarIcon: props => <Ionicons name="search" {...props} />,
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarIcon: props => <Ionicons name="chatbubble-ellipses" {...props} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={UserProfileScreen}
                options={{
                    tabBarIcon: props => <Ionicons name="person" {...props} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default UserRootNavigator;
