import {COLORS, NON_AVATAR} from '@src/assets/const';
import Box from '@src/components/Box';
import {UserChatStackProps} from '@src/navigation/user/type';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import Messages from '@src/screens/chat/components/Message';
import React from 'react';
import {View} from 'react-native';
const MainChatScreen: React.FC<UserChatStackProps<'MainChat'>> = ({navigation, route}) => {
    const {withStranger, user: partner} = route.params;

    console.log('My partner: ', partner);
    const withExpert = partner.is_expert;
    return (
        <Box bgColor={COLORS.gray_1} container safeArea>
            <HeaderChat
                profile={!withStranger && withExpert}
                emotion={withExpert}
                isAnonymous={withStranger}
                user={route?.params?.user}
                goToProfile={() =>
                    navigation.navigate('ExpertProfileChat', {
                        expert: partner,
                    })
                }
            />
            <View style={{flex: 1, zIndex: -10}}>
                <Messages friend={withStranger ? {...partner, name: 'Anonymous', picture: NON_AVATAR} : partner} />
            </View>
        </Box>
    );
};

export default MainChatScreen;
