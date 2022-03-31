import {IMAGES} from '@src/assets';
import {ExpertMainTabProps, ExpertStackProps} from '@src/navigation/expert/type';
import {useAppSelector} from '@src/store';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
const ExpertHomeScreen: React.FC<ExpertMainTabProps<'Home'>> = ({navigation}) => {
    const user = useAppSelector(state => state.auth.user);
    const {t} = useTranslation();
    return (
        <View style={styles.container}>
            <Image source={IMAGES.bg_intro_step_1} style={styles.backgroundTop} />
            <Image source={IMAGES.bg_login_1} style={styles.backgroundBottom} resizeMode="contain" blurRadius={10} />

            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {t('Hi')} {user?.name},
                </Text>
                <Text style={styles.text}>{t('Have a nice day')} </Text>

                <View style={styles.spacebetween}>
                    <View style={styles.wrapper}>
                        <View style={styles.dot} />
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.Post} onPress={() => navigation.navigate('CreatePost')}>
                                <Text style={styles.PostText}>{t('Create post')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Image source={IMAGES.line} style={styles.backgroundLine} />

                    <View style={styles.wrapper}>
                        <View style={styles.dot} />
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.Post} onPress={() => navigation.navigate('CreateEvent')}>
                                <Text style={styles.PostText}>{t('Create event')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: '#EBF3FA',
    },
    backgroundTop: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: '-50%',
    },
    backgroundBottom: {
        flex: 1,
        position: 'absolute',
        bottom: '-5%',
        right: '-60%',
        height: '50%',
        width: '140%',
    },
    textContainer: {
        marginTop: 120,
        marginHorizontal: 8,
    },

    text: {
        marginHorizontal: 30,
        color: '#334C78',
        fontSize: 32,
        fontWeight: 'bold',
    },
    box: {
        // marginTop: 20,
        // marginLeft: 50,
    },
    Post: {
        justifyContent: 'center',
        height: 56,
        width: 250,
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#B7C4DD',
        elevation: 14,
    },
    PostText: {
        textAlign: 'center',
        fontSize: 24,
        color: '#8F9BB2',
        fontWeight: '600',
    },
    inner: {
        backgroundColor: '#F5F9FD',
        borderColor: '#E9F0F7',
        borderWidth: 1,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#B7C4DD',
    },
    spacebetween: {
        //justifyContent: "space-between",
        marginHorizontal: 30,
        marginTop: 10,
        position: 'relative',
    },
    backgroundLine: {
        position: 'absolute',
        left: 10,
        bottom: 59,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    dot: {
        backgroundColor: '#F5F9FD',
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        marginRight: 20,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#B7C4DD',
    },
    bottom: {
        marginHorizontal: 110,
        marginTop: 12,
    },
});
export default ExpertHomeScreen;
