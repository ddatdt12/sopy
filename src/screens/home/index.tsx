import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Button from '@src/components/Button';
import Center from '@src/components/Center';
import Stack from '@src/components/Stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import BackgroundImage from './components/BackgroundImage';

const HomeScreen = () => {
    const {t} = useTranslation();
    return (
        <BackgroundImage>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{t('Hi Tan')},</Text>
                <Text style={styles.title}>{t('Have a nice day')}</Text>
            </View>

            <Center style={{position: 'relative'}}>
                <Button title={t('Create post')} style={styles.button} textStyle={styles.text} />
                <Button title={t('Create event')} style={styles.button} textStyle={styles.text} />
                {/* <Stack justifyContent="center" style={styles.leftLine}>
                    <Center>
                        <View style={styles.dot} />
                    </Center>
                    <View style={styles.verticalLine} />
                    <Center>
                        <View style={styles.dot} />
                    </Center>
                </Stack> */}
            </Center>
        </BackgroundImage>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    titleWrapper: {},
    title: {
        color: COLORS.dark_blue_2,
        marginHorizontal: scaleSize(10),
    },
    button: {
        width: scaleSize(220),
        marginVertical: scaleSize(10),
    },
    text: {
        color: COLORS.dark_gray_2,
    },
    dot: {
        backgroundColor: 'red',
        width: scaleSize(10),
        height: scaleSize(10),
        borderRadius: scaleSize(10) / 2,
        marginVertical: scaleSize(10),
    },
    leftLine: {
        position: 'absolute',
        left: '0%',
    },
    verticalLine: {
        height: scaleSize(105),
        borderLeftColor: 'red',
        borderLeftWidth: 10,
    },
});
