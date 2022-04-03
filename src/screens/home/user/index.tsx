import {scaleSize} from '@core/utils';
import {useFocusEffect} from '@react-navigation/native';
import postApi from '@src/api/postApi';
import {IMAGES} from '@src/assets';
import {SIZES, STYLES} from '@src/assets/const';
import Loading from '@src/components/Loading';
import {useAppSelector} from '@src/store';
import {Post} from '@src/types';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeelingModal from './components/FeelingModal';
import PostCard from './components/PostCard';
import PostDetails from './components/PostDetails';

const HomeScreen: React.FC = () => {
    const {t} = useTranslation();
    const user = useAppSelector(state => state.auth.user);

    return (
        <View style={styles.container}>
            <Image source={IMAGES.home_user.box} style={styles.backgroundTop} />
            <Image source={IMAGES.home_user.circle_box} style={styles.backgroundCenter} />
            <Image source={IMAGES.home_user.tam_giac} style={styles.backgroundBottom} />

            <View style={styles.textContainer}>
                <Text style={styles.text1}>
                    {t('Hi')} {user?.name},
                </Text>
            </View>

            <FeelingModal/>
        </View>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: '#EBF3FA',
        position: 'relative',
    },
    backgroundTop: {
        flex: 1,
        position: 'absolute',
        top: 9,
        right: 10,
    },
    backgroundCenter: {
        flex: 1,
        position: 'absolute',
        bottom: 135,
        right: 45
    },
    backgroundBottom: {
        flex: 1,
        position: 'absolute',
        bottom: 200,
        right: 30,
    },
    textContainer: {
        marginTop: scaleSize(28),
        marginLeft: -10,
    },
    text1: {
        marginHorizontal: 30,
        color: '#8F9BB2',
        fontSize: 24,
        fontWeight: 'bold',
    },
    text2: {
        marginTop: 5,
        marginHorizontal: 30,
        color: '#334C78',
        fontSize: 24,
        fontWeight: 'bold',
    },
    backgroundLine: {
        position: 'absolute',
        left: 10,
        bottom: 59,
    },

    img: {
        flex: 1,
        position: 'absolute',
        //bottom: 20,
        right: 40 / 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Slide: {
        //marginHorizontal: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        paddingHorizontal: scaleSize(8),
        paddingVertical: scaleSize(4),
        ...STYLES.deepShadow,
    },
    SlideText: {
        textAlign: 'center',
        color: '#8F9BB2',
        fontSize: scaleSize(16),
        fontWeight: '500',
        marginHorizontal: scaleSize(10),
    },
});
