import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';

interface ITextLinkProps extends TextProps {
    text: string;
    style?: StyleProp<TextStyle>;
}
const TextLink: React.FC<ITextLinkProps> = props => {
    const {text, style, ...otherProps} = props;
    return (
        <Text style={[{textDecorationLine: 'underline'}, style]} {...otherProps}>
            {text}
        </Text>
    );
};

export default TextLink;

const styles = StyleSheet.create({});
