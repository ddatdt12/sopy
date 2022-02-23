import {scaleSize} from '@core/utils';
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import TextLink from '@src/components/TextLink';
import {auth} from '@src/config/firebase';
import {UserLoginScreenProps} from '@src/navigations/RootStackParams';
import {googleSignIn} from '@src/services/auth';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import ImageBackground from '../components/ImageBackground';
import LoginForm from '../components/LoginForm';
import LogoButton from '../components/LogoButton';

const UserLoginScreen: React.FC<UserLoginScreenProps> = ({navigation}) => {
    const {t} = useTranslation();
    const handleFacebookLogin = () => {
        // TODO: handle Facebook login
    };
    const handleGoogleLogin = async (event: GestureResponderEvent) => {
        //Just work only Android
        //Ios not setup
        const {user, error} = await googleSignIn();
        if (user) {
            Alert.alert('Notice', 'Success: ' + user.email);
        } else {
            Alert.alert('Error', error ?? 'Something went wrong!');
        }
    };
    return (
        <ImageBackground source={IMAGES.bg_intro_step_1}>
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
                    <TextLink
                        text={t('Sign up')}
                        style={styles.footerText}
                        onPress={() => navigation.push('Register')}
                    />
                </View>
            </View>
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
        paddingHorizontal: scaleSize(36),
        marginTop: scaleSize(80),
        // justifyContent: 'center',
        // marginTo:30,
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
    logoWrapper: {
        flexDirection: 'row',
    },

    footer: {
        width: scaleSize(280),
        justifyContent: 'center',
        paddingBottom: scaleSize(50),
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: scaleSize(40),
        marginBottom: scaleSize(10),
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
