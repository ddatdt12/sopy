import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaleSize} from '@core/utils';
import {FONTS, STYLES} from '@src/assets/const';

type Props = {
    title: string;
    authorName: string;
    picture: string;
    direction?: 'left' | 'right';
    onPress: () => void;
};

const PostCard: React.FC<Props> = ({title, authorName, picture, direction = 'left', onPress}) => {
    return (
        <View style={{alignItems: direction === 'left' ? 'flex-start' : 'flex-end'}}>
            <TouchableOpacity style={styles.Post} onPress={onPress}>
                <View style={styles.wrapper}>
                    <Image
                        source={{uri: picture}}
                        style={{
                            width: scaleSize(70),
                            height: scaleSize(70),
                            borderRadius: scaleSize(10),
                            marginRight: scaleSize(10),
                        }}
                    />
                    <View style={styles.textWrapper}>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={FONTS.h4}>
                            {title}
                        </Text>
                        <Text>{authorName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    Post: {
        width: '80%',
        borderRadius: scaleSize(10),
        backgroundColor: '#F5F9FD',
        flexDirection: 'row',
        marginTop: scaleSize(10),
        overflow: 'hidden',
        alignItems: 'flex-end',
        ...STYLES.deepShadow,
    },
    wrapper: {
        flexDirection: 'row',
        borderRadius: scaleSize(10),
        padding: scaleSize(10),
    },
    textWrapper: {
        flex: 1,
    },
});
