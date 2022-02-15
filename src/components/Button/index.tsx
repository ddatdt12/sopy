import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableHighlight,
    TouchableHighlightProps,
    ViewStyle,
} from 'react-native';

interface IButtonProps extends TouchableHighlightProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<IButtonProps> = props => {
    const {title = 'Save', style, textStyle, ...otherProps} = props;
    return (
        <TouchableHighlight
            style={[styles.button, style]}
            activeOpacity={0.6}
            underlayColor={COLORS.light_blue_1}
            {...otherProps}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableHighlight>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scaleSize(12),
        paddingHorizontal: scaleSize(32),
        borderRadius: scaleSize(60),
        backgroundColor: COLORS.white_1,

        //shadow
        shadowColor: COLORS.dark_blue_1,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.48,
        // shadowRadius: 18,

        elevation: 15,
    },
    text: {
        fontSize: scaleSize(20),
        color: 'black',
        fontWeight: 'bold',
    },
});
