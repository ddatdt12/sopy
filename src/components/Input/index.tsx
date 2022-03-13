// import {Shadow} from 'react-native-neomorph-shadows';
// import Text from '../Text';
import {scaleSize} from '@core/utils/DeviceUtils';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle} from 'react-native';
interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
    icon?: React.ReactElement;
    inputStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    error?: string;
    iconPosition?: 'start' | 'end';
}

const Input: FC<InputProps> = props => {
    const {style, children, inputStyle, textInputStyle, icon, iconPosition, error, ...inputProps} = props;

    const iconInputStyle: StyleProp<ViewStyle> =
        (icon &&
            iconPosition === 'end' && {
                flexDirection: 'row-reverse',
            }) ||
        undefined;
    const renderIcon = () => {
        return (
            <View
                style={[
                    styles.icon,
                    iconPosition === 'start' ? {marginRight: scaleSize(4)} : {marginLeft: scaleSize(4)},
                ]}>
                {icon}
            </View>
        );
    };
    const renderError = () => {
        if (error) {
            return <Text style={STYLES.error}>{error}</Text>;
        }
        return <></>;
    };
    return (
        <View style={style}>
            <View style={[styles.inputWrapper, iconInputStyle, inputStyle]}>
                {icon && renderIcon()}
                <TextInput
                    style={[styles.input, textInputStyle]}
                    {...inputProps}
                    autoComplete="off"
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    underlineColorAndroid={'transparent'}
                />
            </View>
            {renderError()}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: scaleSize(10),
        paddingVertical: 0,
        backgroundColor: COLORS.white_1,
        borderRadius: scaleSize(40),
        borderColor: COLORS.dark_gray_2,
        borderWidth: 1,
        height: scaleSize(46),
    },
    input: {
        flex: 1,
        ...FONTS.body4,
        color: '#193566',
        fontSize: scaleSize(16),
    },

    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
