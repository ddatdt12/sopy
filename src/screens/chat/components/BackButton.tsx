import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS, STYLES} from '@src/assets/const';
import IconButton from '@src/components/IconButton';
import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {};

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <IconButton
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            icon={<Ionicons name="chevron-back-outline" size={scaleSize(30)} color={COLORS.dark_gray_2} />}
        />
    );
};

export default BackButton;

const styles = StyleSheet.create({
    backButton: {
        height: scaleSize(40),
        width: scaleSize(40),
        borderRadius: scaleSize(60),
        marginLeft: scaleSize(16),
        ...STYLES.center,
        ...STYLES.deepShadow,
    },
});
