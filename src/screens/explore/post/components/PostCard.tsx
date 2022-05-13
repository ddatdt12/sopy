import {scaleSize} from '@core/utils';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import Card from '@src/components/Card';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {GestureResponderEvent} from 'react-native-modal';

interface IPostCard {
    title: string;
    author: string;
    image: string;
    style?: {
        width?: number;
        margin?: number;
    };
    onPress?: (event: GestureResponderEvent) => void;
}
const PostCard: React.FC<IPostCard> = props => {
    const {title, author, image, onPress, style} = props;

    return (
        <TouchableHighlight
            underlayColor={'#D7E7F7'}
            onPress={onPress}
            style={[styles.card, {width: style?.width, margin: style?.margin, ...STYLES.deepShadow}]}>
            <View style={{height: '100%'}}>
                <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{author}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default PostCard;

const width = Dimensions.get('window').width / 2;
const styles = StyleSheet.create({
    card: {
        height: scaleSize(225),
        backgroundColor: COLORS.white_1,
        borderRadius: scaleSize(10),
        overflow: 'hidden',
        // flex: 1,
        minWidth: width - scaleSize(24),
        maxWidth: width - scaleSize(24),
        marginBottom: scaleSize(20),
        marginHorizontal: scaleSize(6),
    },

    image: {
        width: '100%',
        height: scaleSize(150),
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: scaleSize(10),
        paddingVertical: scaleSize(16),
    },
    title: {
        ...FONTS.h4,
        color: COLORS.black_2,
    },
    subtitle: {
        fontSize: scaleSize(14),
        color: COLORS.dark_gray_2,
    },
});
