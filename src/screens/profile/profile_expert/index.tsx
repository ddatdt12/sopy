import {scaleSize} from '@core/utils';
import {useFocusEffect} from '@react-navigation/native';
import postApi from '@src/api/postApi';
import {COLORS, FONTS, SIZES, STYLES} from '@src/assets/const';
import IMAGES from '@src/assets/images';
import Loading from '@src/components/Loading';
import {ExpertMainTabProps} from '@src/navigation/expert/type';
import {useAppSelector} from '@src/store';
import {Post} from '@src/types';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AvatarContainer from '../components/AvatarContainer';
import EventCard from '../components/EventCard';
import PopupDropdown from '../components/PopupDropdown';

const ExpertProfileScreen: React.FC<ExpertMainTabProps<'Profile'>> = ({navigation}) => {
    const renderItem = (item: Post) => {
        return <EventCard event={item} key={item.id} />;
    };
    const [optionsViewVisible, setOptionsViewVisible] = useState(false);
    const {t, i18n} = useTranslation();
    const user = useAppSelector(state => state.auth.user);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const selectedLanguageCode = i18n.language;

    const handleChangeLanguagePress = () => {
        return i18n.changeLanguage(selectedLanguageCode === 'en' ? 'vi' : 'en');
    };
    useFocusEffect(
        React.useCallback(() => {
            let mounted = true;
            setLoading(true);
            (async () => {
                try {
                    const data = await postApi.getAllPostOfUser(user!.firebase_user_id);
                    if (mounted) {
                        setPosts(data);
                    }
                } catch (error) {
                    console.log(error);
                }
                if (mounted) {
                    setLoading(false);
                }
            })();

            return () => {
                mounted = false;
            };
        }, [user]),
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: SIZES.bottomBarHeight + scaleSize(20)}}>
                <PopupDropdown visible={optionsViewVisible} visibleToggle={() => setOptionsViewVisible(prev => !prev)}>
                    <View style={styles.optionsView}>
                        <TouchableOpacity
                            onPress={() => {
                                setOptionsViewVisible(false);
                                navigation.navigate('EditProfile');
                            }}>
                            <Text style={styles.optionsText}>{t('Edit Profile')}</Text>
                        </TouchableOpacity>
                        <Image source={IMAGES.optionsLine} style={styles.lineOption} />
                        <TouchableOpacity onPress={handleChangeLanguagePress}>
                            <Text style={styles.optionsText}>
                                {t('Change languages')}: {selectedLanguageCode === 'vi' ? 'EN' : 'VN'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </PopupDropdown>

                <AvatarContainer name={user?.name} picture={user?.picture} />
                <Text style={styles.aboutText}>{t('About me')}</Text>

                <View style={styles.emailDescriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('Email')}: {user?.email}
                    </Text>
                </View>

                <View style={styles.aboutDescriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('About')}: {user?.bio}
                    </Text>
                </View>

                <Text style={styles.activitiesText}>{t('Activities')}</Text>

                {loading ? (
                    <Loading />
                ) : posts.length !== 0 ? (
                    <View style={{paddingHorizontal: scaleSize(14)}}>{posts.map(renderItem)}</View>
                ) : (
                    <Text style={styles.noEventText}>{t('No posts or events')}</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ExpertProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_1,
    },
    aboutText: {
        fontSize: scaleSize(20),
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#8F9BB2',
        marginLeft: scaleSize(16),
        marginTop: scaleSize(30),
    },
    emailDescriptionContainer: {
        width: scaleSize(358),
        height: 'auto',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        justifyContent: 'center',
        paddingLeft: scaleSize(15),
        minHeight: scaleSize(48),
        padding: scaleSize(15),
    },
    aboutDescriptionContainer: {
        width: scaleSize(358),
        height: 'auto',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        justifyContent: 'center',
        padding: scaleSize(15),
        minHeight: scaleSize(48),
    },
    descriptionText: {
        fontSize: scaleSize(20),
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#334C78',
    },
    activitiesText: {
        ...FONTS.body3,
        fontSize: scaleSize(20),
        color: COLORS.dark_gray_2,
        marginLeft: scaleSize(16),
        marginTop: scaleSize(28),
    },
    optionsView: {
        justifyContent: 'space-between',
        width: scaleSize(200),
        height: 'auto',
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_3,
        paddingVertical: scaleSize(10),
        ...STYLES.deepShadow,
    },
    optionsText: {
        ...FONTS.subtitle4,
        fontSize: scaleSize(17),
        color: COLORS.dark_gray_2,
        marginLeft: scaleSize(10),
    },
    lineOption: {
        width: scaleSize(180),
        marginVertical: scaleSize(5),
        marginLeft: scaleSize(9),
    },
    noEventText: {
        ...FONTS.body1,
        fontSize: scaleSize(18),
        color: '#1D325E',
        alignSelf: 'center',
        marginTop: scaleSize(33),
    },
});
