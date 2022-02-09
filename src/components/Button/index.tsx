import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableHighlight, TouchableHighlightProps, ViewStyle} from 'react-native';

interface IButtonProps extends TouchableHighlightProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<IButtonProps> = props => {
    const {title = 'Save', style, textStyle, ...otherProps} = props;
    return (
        <TouchableHighlight style={[styles.button, style]} activeOpacity={0.6} underlayColor="#B4D1FC" {...otherProps}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableHighlight>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 60,
        backgroundColor: '#F5F9FD',

        //shadow
        shadowColor: '#8A9BBD',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.48,
        // shadowRadius: 18,

        elevation: 15,
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
});
