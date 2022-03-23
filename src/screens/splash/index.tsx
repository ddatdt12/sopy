import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@src/assets/const';
import {IMAGES} from '@src/assets';
import {scaleSize} from '@core/utils';

type Props = {};

const SplashScreen = (props: Props) => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <View
                style={{
                    flex: 1,
                    marginVertical: scaleSize(60),
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Image source={IMAGES.splash.shape} />
                <Image source={IMAGES.splash.reflex} />
            </View>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.gray_1,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
