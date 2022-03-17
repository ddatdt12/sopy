import {scaleSize} from '@core/utils';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, STYLES} from '@src/assets/const';
import IconButton from '@src/components/IconButton';
import Messages from '@src/screens/chat/components/Message';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomChat = () => {
    return (
        <View style={{flex: 1, zIndex: -10}}>
            <IconButton
                style={[styles.button, {left: scaleSize(-4)}]}
                icon={<Ionicons name="images" size={20} color={COLORS.dark_gray_2} />}
            />
            <Messages />

            <IconButton
                style={[styles.button, {right: scaleSize(15)}]}
                icon={<Ionicons name="heart" size={22} color={'#EFA19E'} />}
            />
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
