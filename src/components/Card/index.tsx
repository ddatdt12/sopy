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
        borderRadius: 12,
        shadowColor: '#8A9BBD',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.48,
        shadowRadius: 18,

        elevation: 15,
    },
});
