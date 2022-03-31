import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Stack from '@src/components/Stack';
import {COLORS} from '@src/assets/const';
import {scaleSize} from '@core/utils';
import {useTranslation} from 'react-i18next';
import {feelingColors} from '../data';
import dayjs from 'dayjs';

type Props = {
    time: Date;
    feel: String;
    reason: String;
};

const DiaryCard = (props: Props) => {
    const {t} = useTranslation();
    const {time, feel, reason} = props;
    const feelColors = feelingColors.find(f => f.label === feel)?.color;

    const formatDate = dayjs(time).format('HH:mm, DD/MM/YYYY');

    return (
        <View style={[styles.card]}>
            <View>
                <Text style={styles.titleLabel}>
                    Time:{' '}
                    <Text
                        style={{
                            color: COLORS.gray_4,
                        }}>
                        {formatDate}
                    </Text>
                </Text>
            </View>
            <View style={styles.lineWrapper}>
                <Text style={styles.label}>{t('Your feeling')}:</Text>
                <View style={styles.textWrapper}>
                    <Text style={[styles.text, {color: feelColors}]}>{feel}</Text>
                </View>
            </View>
            <View style={styles.lineWrapper}>
                <Text style={styles.label}>{t('Why')}:</Text>
                <View style={styles.textWrapper}>
                    <Text>{reason}</Text>
                </View>
            </View>
        </View>
    );
};

export default DiaryCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.light_blue_2,
        padding: scaleSize(10),
        borderRadius: scaleSize(10),
        marginVertical: scaleSize(10),
    },
    lineWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: scaleSize(2),
    },
    textWrapper: {
        flex: 2,
        backgroundColor: COLORS.white_3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleSize(10),
        paddingVertical: scaleSize(2),
    },
    titleLabel: {
        color: COLORS.black_1,
        fontWeight: '500',
        fontSize: scaleSize(16),
    },
    label: {
        flex: 1,
        color: COLORS.dark_gray_2,
        fontWeight: '500',
        fontSize: scaleSize(16),
    },
    text: {
        fontSize: scaleSize(16),
        fontWeight: 'bold',
    },
});
