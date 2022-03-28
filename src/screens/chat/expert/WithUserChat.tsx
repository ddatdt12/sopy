import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import {ExpertChatStackProps} from '@src/navigation/expert/type';
import BottomChat from '@src/screens/chat/components/BottomChat';
import HeaderChat from '@src/screens/chat/components/HeaderChat/HeaderChat';
import React from 'react';

const WithUserChatScreen: React.FC<ExpertChatStackProps<'WithUserChat'>> = ({navigation, route}) => {
    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <HeaderChat
                profile={true}
                user={route.params.user}
                goToProfile={() =>
                    navigation.navigate('UserProfileChat', {
                        user: route.params.user,
                        showEmotion: route.params.showEmotion,
                    })
                }
            />
            <BottomChat friend={route.params.user} />
        </Box>
    );
};

export default WithUserChatScreen;
