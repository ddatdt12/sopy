import Button from '@src/components/Button';
import React from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Input from '@src/components/Input';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.background}
                source={require('@src/assets/images/background.png')}
                resizeMode="cover"
                blurRadius={3}
            />
            <View style={styles.contentWrapper}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Let's get started</Text>
                </View>
                <Input placeholder="Username" style={{marginVertical: 24}} />
                <Input placeholder="Password" />
                <Text style={styles.link}>Forgot password?</Text>

                <View style={{alignItems: 'center', paddingTop: 30}}>
                    <Button
                        title="Log In"
                        style={styles.button}
                        onPress={() => {
                            Alert.alert(
                                'Notice',
                                'Your password was incorrect. Please try again or tap “Forgot password” to reset it',
                            );
                        }}
                    />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Mail us for creating account for Expert</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF3FA',
        position: 'relative',
    },
    background: {
        position: 'absolute',
        left: '-22.55%',
        right: '-53.54%',
        top: '2.13%',
        bottom: '31.58%',
        opacity: 0.8,
        transform: [{rotate: '22.27deg'}],
        flex: 1,
        // transform: 'rotate(22.27deg)',
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: 36,
        marginTop: 125,
        // justifyContent: 'center',
        // marginTo:30,
    },
    textWrapper: {
        width: '100%',
        marginLeft: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 44,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#193566',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '500',
        marginVertical: 10,
        color: '#6D7FA0',
    },

    text: {
        fontSize: 36,
        color: '#193566',
    },
    link: {
        letterSpacing: 0.2,
        textDecorationLine: 'underline',
        fontSize: 18,
        marginVertical: 20,
    },
    button: {
        width: 200,
    },
    footer: {
        width: 240,
        justifyContent: 'center',
        paddingBottom: 50,
        alignSelf: 'center',
        marginTop: 40,
        // position: 'absolute',
        // bottom: 10,
    },
    footerText: {
        fontSize: 18,
        textDecorationLine: 'underline',
        fontWeight: '500',
        textAlign: 'center',
        color: '#677A9C',
    },
});
