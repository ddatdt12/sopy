import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import ImageBackground from '../components/ImageBackground';
import LoginForm from '../components/LoginForm';

const ExpertLoginScreen = () => {
    const {t} = useTranslation();

    return (
        <ImageBackground source={IMAGES.bg_intro_step_1}>
            <View style={styles.contentWrapper}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{t('Welcome')}</Text>
                    <Text style={styles.subtitle}>{t("Let's get started")}</Text>
                </View>
                <LoginForm />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{t('Mail us for creating account for Expert')}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

export default ExpertLoginScreen;

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        paddingHorizontal: scaleSize(36),
        marginTop: scaleSize(125),
    },
    textWrapper: {
        width: '100%',
        marginLeft: scaleSize(10),
        marginBottom: scaleSize(6),
    },
    title: {
        fontSize: scaleSize(44),
        fontWeight: 'bold',
        marginVertical: scaleSize(6),
        color: '#193566',
    },
    subtitle: {
        fontSize: scaleSize(24),
        fontWeight: '500',
        marginVertical: scaleSize(4),
        color: COLORS.dark_blue_1,
    },
    footer: {
        width: scaleSize(240),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: scaleSize(48),
    },
    footerText: {
        fontSize: scaleSize(18),
        textDecorationLine: 'underline',
        fontWeight: '500',
        textAlign: 'center',
        color: COLORS.dark_blue_1,
    },
});
