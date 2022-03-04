import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, ViewProps} from 'react-native';

const BackgroundImage: React.FC<ViewProps> = ({children, style}) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <Image style={styles.background_2} source={IMAGES.bg_intro_step_1} resizeMode="cover" blurRadius={2} />
            <Image style={styles.background_2} source={IMAGES.bg_intro_step_1} resizeMode="cover" blurRadius={2} />
            {children}
        </SafeAreaView>
    );
};

export default BackgroundImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_1,
        position: 'relative',
    },
    background_1: {
        position: 'relative',
        left: 0,
        top: 0,
        width: scaleSize(300),
    },
    background_2: {
        position: 'absolute',
        left: 0,
        width: scaleSize(300),
        bottom: 0,
    },
});
