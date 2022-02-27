import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import Card from '@src/components/Card';
import {RoleChooseScreenProps} from '@src/navigation/AuthStackParams';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import ImageBackground from '../login/components/ImageBackground';

const RoleScreen: React.FC<RoleChooseScreenProps> = ({navigation}) => {
    return (
        <ImageBackground source={IMAGES.bg_intro_step_1}>
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>Who are you?</Text>
                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.6}
                    underlayColor="#B4D1FC"
                    onPress={() => navigation.push('UserLogin')}>
                    <Card style={styles.roleCard}>
                        <Text style={styles.text}>A User</Text>
                    </Card>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.6}
                    underlayColor="#B4D1FC"
                    onPress={() => navigation.push('ExpertLogin')}>
                    <Card style={styles.roleCard}>
                        <Text style={styles.text}>An Expert</Text>
                    </Card>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
};

export default RoleScreen;

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
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scaleSize(100),
    },
    title: {
        fontSize: 44,
        fontWeight: 'bold',
        margin: 20,
        color: '#193566',
    },
    roleCard: {
        padding: 40,
        minWidth: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F9FD',
    },
    touchableHighlight: {
        borderRadius: 12,
        marginVertical: 25,
    },
    text: {
        fontSize: 36,
        color: '#193566',
    },
});
