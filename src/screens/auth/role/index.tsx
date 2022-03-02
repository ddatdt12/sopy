import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {FONTS} from '@src/assets/const';
import Card from '@src/components/Card';
import {RoleChooseScreenProps} from '@src/navigation/AuthStackParams';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import ImageBackground from '../components/ImageBackground';

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
        left: '-10%',
        right: '-53.54%',
        top: '5.13%',
        bottom: '10.58%',
        opacity: 0.8,
        transform: [{rotate: '22.27deg'}],
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: scaleSize(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        ...FONTS.largeTitle,
        fontSize: scaleSize(44),
        marginBottom: scaleSize(10),
        color: '#193566',
    },
    roleCard: {
        padding: scaleSize(40),
        minWidth: scaleSize(280),
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
