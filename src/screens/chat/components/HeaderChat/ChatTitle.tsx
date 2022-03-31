import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {FONTS, NON_AVATAR} from '@src/assets/const';
import {DismissKeyboardView} from '@src/components';
import {t} from 'i18next';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface ChatTitleProps {
    name: string;
    avatar?: string;
    isAnonymous?: boolean;
}

const ChatTitle: React.FC<ChatTitleProps> = props => {
    const {name, avatar, isAnonymous = false} = props;
    return (
        <DismissKeyboardView>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // flexWrap: 'wrap',
                    paddingVertical: scaleSize(6),
                    width: '70%',
                }}>
                <Image
                    source={{uri: isAnonymous ? NON_AVATAR : avatar}}
                    style={{
                        marginLeft: scaleSize(20),
                        width: scaleSize(40),
                        height: scaleSize(40),
                        borderRadius: scaleSize(60),
                    }}
                />
                <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
                    {isAnonymous ? t('Anonymous') : name}
                </Text>
            </View>
        </DismissKeyboardView>
    );
};

export default ChatTitle;

const styles = StyleSheet.create({
    name: {
        ...FONTS.h2,
        marginLeft: scaleSize(16),
    },
});
