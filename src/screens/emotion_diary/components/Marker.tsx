import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Stack from '@src/components/Stack';
import {scaleSize} from '@core/utils';
import {FONTS} from '@src/assets/const';

type Props = {
    text: string;
    color: string;
};

const Marker: React.FC<Props> = props => {
    const {text, color} = props;
    return (
        <Stack
            direction="row"
            space={4}
            justifyContent="center"
            alignItems="center"
            style={{marginVertical: scaleSize(6)}}>
            <View style={[styles.square, {backgroundColor: color}]} />
            <Text style={{color, ...FONTS.h3}}>{text}</Text>
        </Stack>
    );
};

export default Marker;

const styles = StyleSheet.create({
    square: {
        width: scaleSize(45),
        height: scaleSize(25),
        marginRight: scaleSize(10),
        borderRadius: scaleSize(8),
    },
});
