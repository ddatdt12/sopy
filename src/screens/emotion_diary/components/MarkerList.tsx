import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Stack from '@src/components/Stack';
import {scaleSize} from '@core/utils';
import Marker from './Marker';
import {feelingColors} from '../data';
import {useTranslation} from 'react-i18next';

type Props = {};

const MarkerList = (props: Props) => {
    const {t} = useTranslation();
    return (
        <Stack direction="row" justifyContent="center" style={{marginTop: scaleSize(20)}}>
            <View style={styles.column}>
                <View
                    style={{
                        alignItems: 'flex-start',
                    }}>
                    {feelingColors.slice(0, 4).map(feel => (
                        <Marker key={feel.label} text={t(feel.label)} color={feel.color} />
                    ))}
                </View>
            </View>

            <View style={styles.column}>
                <View
                    style={{
                        alignItems: 'flex-start',
                    }}>
                    {feelingColors.slice(4, feelingColors.length).map(feel => (
                        <Marker key={feel.label} text={t(feel.label)} color={feel.color} />
                    ))}
                </View>
            </View>
        </Stack>
    );
};

export default MarkerList;

const styles = StyleSheet.create({
    column: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
