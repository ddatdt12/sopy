import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
// import {Shadow} from 'react-native-neomorph-shadows';
// import Text from '../Text';
import {scaleSize} from '@core/utils/DeviceUtils';
import {COLORS} from '@src/assets/const';
import InnerShadow from './InnerShadow';
interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
    icon?: React.ReactElement;
    width?: number;
    height?: number;
    inputStyle?: StyleProp<ViewStyle>;
    error?: string;
    iconPosition?: 'start' | 'end';
}

const Input: FC<InputProps> = props => {
    const {style, children, width, height, inputStyle, icon, iconPosition, error, ...inputProps} = props;

    const iconInputStyle: StyleProp<ViewStyle> =
        (icon &&
            iconPosition === 'end' && {
                flexDirection: 'row-reverse',
            }) ||
        undefined;
    return (
        <View style={style}>
            {/* FIXME: Implement inner shadow */}
            <InnerShadow style={[styles.inputWrapper, iconInputStyle]}>
                {icon && <View style={styles.icon}>{icon}</View>}
                <TextInput style={[styles.input, inputStyle]} {...inputProps} />
            </InnerShadow>
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
        borderColor: 'gray',
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
