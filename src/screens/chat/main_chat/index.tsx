import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import {UserChatStackProps} from '@src/navigation/user/type';
import BottomChat from '@src/screens/chat/components/BottomChat';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import React from 'react';

const MainChatScreen: React.FC<UserChatStackProps<'MainChat'>> = ({navigation, route}) => {
    const {withStranger, user: messenger} = route.params;
    const withExpert = messenger.role === 'expert';
    return (
        <Box bgColor={COLORS.gray_1} container safeArea>
            <HeaderChat
                profile={!withStranger && withExpert}
                emotion={!withStranger && withExpert}
                user={route?.params?.user}
                goToProfile={() => navigation.navigate('ExpertProfileChat')}
            />
            <BottomChat />
        </Box>
    );
};

export default MainChatScreen;
