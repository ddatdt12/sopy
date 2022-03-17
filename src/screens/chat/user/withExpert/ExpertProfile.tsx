import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS, FONTS} from '@src/assets/const';
import {useTranslation} from 'react-i18next';
import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Box, Button} from '@src/components';
import BackButton from '@src/screens/chat/components/BackButton';
import EventCard from '@src/screens/profile/components/EventCard';
import {Event} from '@src/screens/explore/event/types';
import Events from '@src/screens/explore/event/events';
import AvatarContainer from '@src/screens/profile/components/AvatarContainer';
import Profile from '@src/screens/chat/components/Profile';

const ExpertProfileChatScreen: React.FC = props => {
    const {t} = useTranslation();
    const renderItem = (item: Event) => {
        return <EventCard event={item} key={item.id} />;
    };

    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <View style={{marginTop: scaleSize(15)}}>
                <BackButton />
            </View>

            <ScrollView>
                <Profile />

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('About')}: {'Dat DT'}
                    </Text>
                </View>

                <Text style={styles.label}>{t('Activities')}</Text>

                {Events.length ? (
                    <View style={{paddingHorizontal: scaleSize(14)}}>{Events.map(renderItem)}</View>
                ) : (
                    <Text style={styles.noEventText}>No posts or events</Text>
                )}
            </ScrollView>
        </Box>
    );
};

export default ExpertProfileChatScreen;

const styles = StyleSheet.create({
    descriptionContainer: {
        width: scaleSize(358),
        height: 'auto',
        borderRadius: scaleSize(30),
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        paddingHorizontal: scaleSize(15),
        paddingVertical: scaleSize(12),
    },
    descriptionText: {
        ...FONTS.body3,
        color: COLORS.dark_blue_2,
        fontSize: scaleSize(20),
    },
    label: {
        ...FONTS.subtitle3,
        fontSize: scaleSize(20),
        color: COLORS.dark_gray_2,
        marginLeft: scaleSize(16),
        marginTop: scaleSize(28),
    },
    noEventText: {
        ...FONTS.body1,
        fontSize: scaleSize(18),
        color: '#1D325E',
        alignSelf: 'center',
        marginTop: scaleSize(33),
    },
});
