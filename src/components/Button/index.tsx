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
    View,
    ViewStyle,
} from 'react-native';

interface IButtonProps extends TouchableHighlightProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    variant?: 'primary' | 'secondary';
    selected?: boolean;
    disabled?: boolean;
}
const Button: React.FC<IButtonProps> = props => {
    const {title, style, selected, variant = 'primary', textStyle, disabled, ...otherProps} = props;
    let buttonStyle = {
        backgroundColor: COLORS.white_3,
        color: COLORS.dark_gray_2,
    };
    if (variant === 'secondary') {
        buttonStyle = {
            backgroundColor: COLORS.white_1,
            color: COLORS.black_1,
        };
    }
    if (disabled) {
        return (
            <View style={[styles.wrapper, style]}>
                <Text style={[styles.text, {color: COLORS.dark_gray_2}, textStyle]}>{title}</Text>
            </View>
        );
    }
    if (selected) {
        return (
            <View style={[styles.wrapper, {borderColor: COLORS.dark_gray_2, borderWidth: 1}, style]}>
                <Text style={[styles.text, {color: COLORS.black_1}, textStyle]}>{title}</Text>
            </View>
        );
    }

    return (
        <TouchableHighlight
            style={[styles.wrapper, styles.shadow, buttonStyle, style]}
            activeOpacity={0.8}
            underlayColor={COLORS.light_blue_1}
            {...otherProps}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableHighlight>
    );
};

export default Button;

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scaleSize(4),
        paddingHorizontal: scaleSize(24),
        borderRadius: scaleSize(60),
    },
    shadow: {
        //shadow
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: COLORS.dark_blue_2,
        elevation: 6,
    },

    text: {
        fontSize: scaleSize(20),
        color: COLORS.dark_gray_2,
        fontWeight: 'bold',
    },
});
