import React, {FC} from 'react';
import {StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle} from 'react-native';

interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>;
    icon?: React.Component;
}

const Input: FC<InputProps> = props => {
    const {style, children, icon, ...inputProps} = props;
    return (
        <View style={[styles.inputWrapper, style]}>
            <View>{icon && icon}</View>
            <TextInput style={styles.input} {...inputProps} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        // borderWidth: 1.5,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#F5F9FD',
        borderWidth: 1,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    input: {
        flex: 1,
    },
});
