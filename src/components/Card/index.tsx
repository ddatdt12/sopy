import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface ICardProps {
    style?: {};
}
const Card: React.FC<ICardProps> = ({children, style}) => {
    return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: scaleSize(12),
        shadowColor: COLORS.dark_gray_1,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 5,

        elevation: 12,
    },
});
