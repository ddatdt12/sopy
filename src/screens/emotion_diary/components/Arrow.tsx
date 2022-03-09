import {ColorValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, STYLES} from '@src/assets/const';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scaleSize} from '@core/utils';

type Props = {
    size?: number;
    sizeIcon?: number;
    bgColor?: ColorValue;
    variant?: 'left' | 'right';
};

const Arrow: React.FC<Props> = ({size, sizeIcon, bgColor, variant = 'left'}) => {
    const nameIcon = variant === 'left' ? 'chevron-back' : 'chevron-forward';
    return (
        <View
            style={[
                {
                    width: size || SIZES.circleButton,
                    height: size || SIZES.circleButton,
                    backgroundColor: bgColor || COLORS.white_3,
                    borderRadius: (size || SIZES.circleButton) / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...STYLES.deepShadow,
                },
            ]}>
            {<Ionicons name={nameIcon} size={sizeIcon || scaleSize(20)} />}
        </View>
    );
};

export default Arrow;

const styles = StyleSheet.create({});
