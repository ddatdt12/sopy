import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import IMAGES from '@src/assets/images';
import Events from '@src/screens/explore/event/events';
import {Event} from '@src/screens/explore/event/types';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AvatarContainer from '../components/AvatarContainer';
import EventCard from '../components/EventCard';
import PopupDropdown from '../components/PopupDropdown';
import {ExpertMainTabProps} from '@src/navigation/expert/type';

const ExpertProfileScreen: React.FC<ExpertMainTabProps<'Profile'>> = ({navigation}) => {
    const renderItem = (item: Event) => {
        return <EventCard event={item} key={item.id} />;
    };
    const [optionsViewVisible, setOptionsViewVisible] = useState(false);
    const {t} = useTranslation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView /*contentContainerStyle={{paddingBottom: SIZES.bottomBarHeight + scaleSize(20)}}*/>
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
                        <TouchableOpacity>
                            <Text style={styles.optionsText}>{t('Change to Vietnamese')}</Text>
                        </TouchableOpacity>
                    </View>
                </PopupDropdown>
                <AvatarContainer name="Tan Expert" image="" />

                <Text style={styles.aboutText}>{t('About me')}</Text>

                <View style={styles.emailDescriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('Email')}: {'@gmail.com'}
                    </Text>
                </View>

                <View style={styles.aboutDescriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('About')}: {'Dat DT'}
                    </Text>
                </View>

                <Text style={styles.activitiesText}>{t('Activities')}</Text>

                {Events.length ? (
                    <View style={{paddingHorizontal: scaleSize(14)}}>{Events.map(renderItem)}</View>
                ) : (
                    <Text style={styles.noEventText}>No posts or events</Text>
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
