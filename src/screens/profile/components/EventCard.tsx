import {COLORS, STYLES} from '@src/assets/const';
import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {scaleSize} from '../../../../core/utils';

interface EventCardProps {
    event: Post;
    style?: StyleProp<ViewStyle>;
}

const EventCard = (props: EventCardProps) => {
    const {
        event: {title, created_at},
    } = props;

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.time}>{created_at?.toUTCString()}</Text>
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
