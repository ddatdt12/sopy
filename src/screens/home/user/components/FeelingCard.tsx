import {scaleSize} from '@core/utils';
import Card from '@src/components/Card';
import Text from '@src/components/Text';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Feeling} from '../feeling';

interface Props {
    feeling: Feeling;
    size?: number;
}

const FeelingCard: React.FC<Props> = props => {
    const {
        size,
        feeling: {name, image, color, backgroundColor},
    } = props;
    return (
        <Card
            style={[
                styles.card,
                {backgroundColor},
                {
                    width: size,
                    height: size,
                },
            ]}>
            <Image source={image} style={styles.image} />
            <Text color={color} fontSize={scaleSize(18)} fontWeight="bold">
                {name}
            </Text>
        </Card>
    );
};
const styles = StyleSheet.create({
    image: {
        width: scaleSize(48),
        height: scaleSize(48),
    },
    card: {
        borderRadius: scaleSize(20),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: scaleSize(20),
        borderWidth: 1,
        borderColor: '#E9F0F74D',
        marginHorizontal: scaleSize(8),
    },
});
export default FeelingCard;
