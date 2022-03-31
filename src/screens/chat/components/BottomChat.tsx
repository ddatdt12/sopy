import {scaleSize} from '@core/utils';
import {COLORS, STYLES} from '@src/assets/const';
import Messages from '@src/screens/chat/components/Message';
import {User} from '@src/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type BottomChatProps = {
    friend: User;
};
const BottomChat: React.FC<BottomChatProps> = ({friend}) => {
    return (
        <View style={{flex: 1, zIndex: -10}}>
            <Messages friend={friend} />
        </View>
    );
};

export default BottomChat;

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
