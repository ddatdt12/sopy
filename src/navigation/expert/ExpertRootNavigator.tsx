import {scaleSize} from '@core/utils';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SIZES, STYLES} from '@src/assets/const';
import TabBarButton from '@src/components/TabBarButton';
import ExpertChatHomeScreen from '@src/screens/chat/expert';
import ExploreScreen from '@src/screens/explore';
import ExpertHomeScreen from '@src/screens/home/expert';
import ExpertProfileScreen from '@src/screens/profile/profile_expert';
//Profile
import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MainTabParamsList} from '../TabNavigatorParams';

const Tab = createBottomTabNavigator<MainTabParamsList>();
const ExpertRootNavigator: React.FC = () => {
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
                    bottom: SIZES.tabBarBottom,
                    borderRadius: scaleSize(24),
                    marginHorizontal: scaleSize(6),
                    height: SIZES.bottomBarHeight,
                    ...STYLES.shadow,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={ExpertHomeScreen}
                options={{
                    tabBarIcon: props => <Ionicons name="home-sharp" {...props} />,
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarIcon: props => <Ionicons name="search" {...props} />,
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ExpertChatHomeScreen}
                options={{
                    tabBarIcon: props => <Ionicons name="chatbubble-ellipses" {...props} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ExpertProfileScreen}
                options={{
                    tabBarIcon: props => <Ionicons name="person" {...props} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default ExpertRootNavigator;
