import {scaleSize} from '@core/utils';
import {unwrapResult} from '@reduxjs/toolkit';
import {IMAGES} from '@src/assets';
import {COLORS, FONTS} from '@src/assets/const';
import Text from '@src/components/Text';
import {AppStackProps} from '@src/navigation/AppStackParams';
import {facebookLogin, googleSignIn} from '@src/services/auth';
import {useAppDispatch} from '@src/store';
import {authActions} from '@src/store/authSlice';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import ImageBackground from '../../components/ImageBackground';
import LoginForm from '../../components/LoginForm';
import LogoButton from '../../components/LogoButton';
const UserLoginScreen: React.FC<AppStackProps<'UserLogin'>> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const handleFacebookLogin = async () => {
        const {user, error} = await facebookLogin();
        if (user) {
            const result = await dispatch(authActions.login(user.uid));
            try {
                await unwrapResult(result);
            } catch (errorLogin: any) {
                await dispatch(authActions.register(user));
            }
        } else if (error) {
            Alert.alert('Error', error);
        }
    };
    const handleGoogleLogin = async () => {
        //Just work only Android
        const {user, error} = await googleSignIn();
        console.log(user);
        if (user) {
            const result = await dispatch(authActions.login(user.uid));
            try {
                await unwrapResult(result);
            } catch (errorLogin: any) {
                await dispatch(authActions.register(user));
            }
        } else if (error) {
            Alert.alert('Error', error);
        }
    };
    return (
        <ImageBackground source={IMAGES.bg_intro_step_1}>
            <ScrollView contentContainerStyle={{paddingBottom: scaleSize(10)}}>
                <View style={styles.contentWrapper}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{t('Welcome')}</Text>
                        <Text style={styles.subtitle}>{t("Let's get started")}</Text>
                    </View>
                    <LoginForm />

                    <View style={{alignItems: 'center'}}>
                        <Text
                            style={{
                                color: COLORS.black_1,
                                fontSize: scaleSize(20),
                                marginVertical: scaleSize(20),
                            }}>
                            {t('Or')}
                        </Text>
                        <View style={styles.logoWrapper}>
                            <LogoButton source={IMAGES.facebook_logo} onPress={handleFacebookLogin} />
                            <LogoButton source={IMAGES.google_logo} onPress={handleGoogleLogin} />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>{t("Don't have an account?")}</Text>
                        <Text underline style={styles.footerText} onPress={() => navigation.push('Register')}>
                            {t('Sign up')}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default UserLoginScreen;

const styles = StyleSheet.create({
    logoBox: {
        width: scaleSize(36),
        height: scaleSize(36),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: scaleSize(36) / 2,
        marginHorizontal: scaleSize(10),
    },
    logo: {
        width: '60%',
        height: '60%',
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: scaleSize(30),
        marginTop: '30%',
        paddingTop: scaleSize(60),
    },
    textWrapper: {
        width: '100%',
        marginLeft: scaleSize(10),
        marginBottom: scaleSize(6),
    },
    title: {
        ...FONTS.largeTitle,
        marginVertical: scaleSize(6),
        color: '#193566',
    },
    subtitle: {
        ...FONTS.subtitle2,
        marginVertical: scaleSize(4),
        color: COLORS.dark_blue_1,
    },
    logoWrapper: {
        flexDirection: 'row',
    },

    footer: {
        width: scaleSize(280),
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '12%',
    },
    footerText: {
        fontSize: scaleSize(18),
        fontWeight: '500',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: COLORS.black_1,
        marginRight: scaleSize(5),
    },
});
