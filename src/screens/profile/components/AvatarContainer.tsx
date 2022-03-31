import {scaleSize} from '@core/utils/DeviceUtils';
import {FONTS, STYLES} from '@src/assets/const';
import React from 'react';
import {Image, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface avatarContainerProps {
    name?: string;
    picture?: string;
    style?: StyleProp<ViewStyle>;
}

const AvatarContainer = (props: avatarContainerProps) => {
    const {name, picture, style} = props;
    return (
        <View>
            <View style={[styles.avatarContainer, style]}>
                <View style={styles.avatarShadow}>
                    <Image source={{uri: picture}} style={styles.profileImage} />
                </View>
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    );
};

export default AvatarContainer;

const styles = StyleSheet.create({
    profileImage: {
        width: scaleSize(89),
        height: scaleSize(89),
        borderRadius: scaleSize(89 / 2),
        alignSelf: 'center',
    },
    name: {
        alignSelf: 'center',
        ...FONTS.subtitle2,
        fontSize: scaleSize(26),
        color: '#334C78',
        marginTop: scaleSize(10),
    },
    avatarContainer: {
        borderRadius: 10,
        backgroundColor: '#F5F9FD',
        alignSelf: 'center',
        maxWidth: scaleSize(250),
        marginTop: scaleSize(6),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(30),
        ...STYLES.mediumShadow,
    },
    avatarShadow: {
        height: scaleSize(89),
        width: scaleSize(89),
        borderRadius: scaleSize(89 / 2),
        marginTop: scaleSize(13),
        alignSelf: 'center',
        ...STYLES.mediumShadow,
    },
});
