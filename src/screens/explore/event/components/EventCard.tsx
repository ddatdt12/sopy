import {scaleSize} from '@core/utils';
import {COLORS, STYLES} from '@src/assets/const';
import Card from '@src/components/Card';
import Neumorph from '@src/components/Neumorph';
import Stack from '@src/components/Stack';
import Text from '@src/components/Text';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {GestureResponderEvent} from 'react-native-modal';
import {Event} from '../types';

interface IEventCardProps {
    event: Event;
    onPress?: (event: GestureResponderEvent) => void;
}

const EventCard: React.FC<IEventCardProps> = props => {
    const {t} = useTranslation();
    const {
        event: {description, title, image},
        onPress,
    } = props;

    return (
        <TouchableOpacity onPress={onPress}>
            <Card style={styles.card}>
                <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
                    <View style={styles.content}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle} ellipsizeMode="clip" numberOfLines={3}>
                            {description}
                        </Text>
                        <Text color={COLORS.dark_gray_2} fontSize={scaleSize(16)} underline>
                            {t('See more')}
                        </Text>
                    </View>
                    <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
                </Stack>
            </Card>
        </TouchableOpacity>
    );
};

export default EventCard;
const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white_1,
        borderRadius: scaleSize(12),
        overflow: 'hidden',
        // width: '100%',
        height: scaleSize(160),
        padding: scaleSize(16),
        marginBottom: scaleSize(20),
        marginHorizontal: scaleSize(10),
        ...STYLES.shadow,
    },
    image: {
        width: '100%',
        height: scaleSize(120),
        flex: 1,
    },
    content: {
        flex: 2,
        justifyContent: 'center',
        marginRight: scaleSize(10),
    },
    title: {
        fontSize: scaleSize(18),
        fontWeight: '600',
        color: COLORS.black_2,
        marginBottom: scaleSize(5),
    },
    subtitle: {
        fontSize: scaleSize(16),
        color: COLORS.black_2,
    },
});
