import {COLORS, STYLES} from '@src/assets/const';
import {Post} from '@src/types';
import dayjs from 'dayjs';
import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {scaleSize} from '../../../../core/utils';

interface EventCardProps {
    event: Post;
    style?: StyleProp<ViewStyle>;
}

const EventCard = (props: EventCardProps) => {
    const {
        event: {title, created_at},
    } = props;
    const formatDate = dayjs(created_at! * 1000).format('HH:mm, DD MMM YYYY');
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.time}>{formatDate}</Text>
            <Text style={styles.content}>{title}</Text>
        </TouchableOpacity>
    );
};

export default EventCard;

const styles = StyleSheet.create({
    container: {
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_1,
        padding: scaleSize(16),
        marginVertical: scaleSize(10),
        minHeight: scaleSize(96),
        ...STYLES.mediumShadow,
    },
    time: {
        fontSize: scaleSize(16),
        fontFamily: 'Roboto',
        color: '#8F9BB2',
    },
    content: {
        fontSize: scaleSize(20),
        fontFamily: 'Roboto',
        color: '#334C78',
    },
});
