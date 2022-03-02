import {IMAGES} from '@src/assets';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, Keyboard, ScrollView, Text, View} from 'react-native';
import ImageBackground from '../../components/ImageBackground';
import LoginForm from '../../components/LoginForm';
import styles from './styles';

const ExpertLoginScreen = () => {
    const {t} = useTranslation();

    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    return (
        <ImageBackground source={IMAGES.bg_intro_step_1}>
            <ScrollView>
                <View style={styles.contentWrapper}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{t('Welcome')}</Text>
                        <Text style={styles.subtitle}>{t("Let's get started")}</Text>
                    </View>
                    <LoginForm />
                    <View style={styles.footer}>
                        <Text style={styles.footerText} onPress={() => Alert.alert('Test')}>
                            {t('Mail us for creating account for Expert')}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default ExpertLoginScreen;
