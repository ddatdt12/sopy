// import {Shadow} from 'react-native-neomorph-shadows';
// import Text from '../Text';
import {scaleSize} from '@core/utils/DeviceUtils';
import {COLORS} from '@src/assets/const';
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
    return (
        <View style={style}>
            {/* FIXME: Implement inner shadow */}
            <View style={[styles.inputWrapper, iconInputStyle, inputStyle]}>
                {icon && <View style={styles.icon}>{icon}</View>}
                <TextInput
                    style={[styles.input, textInputStyle]}
                    {...inputProps}
                    autoComplete={'off'}
                    autoCorrect={false}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
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
        backgroundColor: COLORS.white_1,
        borderRadius: scaleSize(40),
        borderColor: COLORS.dark_gray_2,
        borderWidth: 1,
    },
    input: {
        flex: 1,
    },
    error: {
        color: COLORS.error_1,
        fontSize: scaleSize(16),
        marginTop: scaleSize(4),
        marginLeft: scaleSize(8),
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
