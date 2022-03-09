import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@src/assets/const';

type Props = {};

const SplashScreen = (props: Props) => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={COLORS.light_blue_1} />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
