import {scaleSize} from '@core/utils';
import {COLORS, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import IconButton from '@src/components/IconButton';
import {UserChatStackProps} from '@src/navigation/user/type';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import Messages from '@src/screens/chat/components/Message';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainChatScreen: React.FC<UserChatStackProps<'MainChat'>> = ({navigation, route}) => {
    const {withStranger, user: partner} = route.params;

    console.log('My partner: ', partner);
    const withExpert = partner.is_expert;
    return (
        <Box bgColor={COLORS.gray_1} container safeArea>
            <HeaderChat
                profile={!withStranger && withExpert}
                emotion={withExpert}
                user={route?.params?.user}
                goToProfile={() =>
                    navigation.navigate('ExpertProfileChat', {
                        expert: partner,
                    })
                }
            />
            <View style={{flex: 1, zIndex: -10}}>
                <IconButton
                    style={[styles.button, {left: scaleSize(-4)}]}
                    icon={<Ionicons name="images" size={20} color={COLORS.dark_gray_2} />}
                />
                <Messages friend={route.params.user} />

                <IconButton
                    style={[styles.button, {right: scaleSize(15)}]}
                    icon={<Ionicons name="heart" size={22} color={'#EFA19E'} />}
                />
            </View>
        </Box>
    );
};

export default MainChatScreen;

const styles = StyleSheet.create({
    button: {
        borderRadius: scaleSize(60),
        backgroundColor: COLORS.white_3,
        marginLeft: scaleSize(16),
        ...STYLES.deepShadow,
        position: 'absolute',
        bottom: scaleSize(15),
        zIndex: 3,
    },
});
