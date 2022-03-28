import {scaleSize} from '@core/utils';
import postApi from '@src/api/postApi';
import {COLORS, FONTS, NON_AVATAR} from '@src/assets/const';
import {Box} from '@src/components';
import {UserChatStackProps} from '@src/navigation/user/type';
import BackButton from '@src/screens/chat/components/BackButton';
import Profile from '@src/screens/chat/components/Profile';
import Events from '@src/screens/explore/event/events';
import {Event} from '@src/screens/explore/event/types';
import EventCard from '@src/screens/profile/components/EventCard';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ExpertProfileChatScreen: React.FC<UserChatStackProps<'ExpertProfileChat'>> = ({route}) => {
    const {t} = useTranslation();
    const [events, setEvents] = useState<Post[]>([]);
    const expert = route.params.expert;
    const renderItem = (item: Post) => {
        return <EventCard event={item} key={item.id} />;
    };

    useEffect(() => {
        let mouted = true;
        postApi
            .getEventsOfUser(expert.firebase_user_id)
            .then(data => {
                if (mouted) {
                    setEvents(data);
                }
            })
            .catch(e => {
                console.log('Error: ', e);
            });

        return () => {
            mouted = true;
        };
    }, [expert.firebase_user_id]);

    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <View style={{marginTop: scaleSize(15)}}>
                <BackButton />
            </View>

            <ScrollView>
                <Profile name={expert.name} picture={expert.picture ?? NON_AVATAR} email={expert.email} />

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {t('About')}: {expert.bio}
                    </Text>
                </View>

                <Text style={styles.label}>{t('Activities')}</Text>

                {events.length ? (
                    <View style={{paddingHorizontal: scaleSize(14)}}>{events.map(renderItem)}</View>
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
