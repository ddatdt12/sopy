import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
// import {Shadow} from 'react-native-neomorph-shadows';
// import Text from '../Text';
import {scaleSize} from '@core/utils/DeviceUtils';
import InnerShadow from '../InnerShadow';
import {COLORS} from '@src/assets/const';
interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
    icon?: React.Component;
    width?: number;
    height?: number;
    inputStyle?: StyleProp<ViewStyle>;
    error?: string;
}

const Input: FC<InputProps> = props => {
    const {style, children, width, height, inputStyle, icon, error, ...inputProps} = props;
    return (
        <View>
            <InnerShadow
                style={[
                    {
                        shadowOffset: {width: scaleSize(5), height: scaleSize(3)},
                        shadowOpacity: 0.8,
                        shadowColor: '#AEAEC0',
                        shadowRadius: scaleSize(6),
                        borderRadius: scaleSize(25),
                        width: width ?? scaleSize(300),
                        height: height ?? scaleSize(50),
                        // ...include most of View/Layout styles
                    },
                    styles.inputWrapper,
                    style,
                ]}>
                <View>{icon && icon}</View>
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
        paddingHorizontal: scaleSize(10),
        alignItems: 'center',
        backgroundColor: '#F5F9FD',
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
});
