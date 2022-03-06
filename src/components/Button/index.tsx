import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {
    ActivityIndicator,
    ColorValue,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableHighlight,
    TouchableHighlightProps,
    View,
    ViewStyle,
} from 'react-native';
import {STYLES} from '@src/assets/const';
import LinearStroke from '../LinearStroke';
interface IButtonProps extends TouchableHighlightProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    variant?: 'primary' | 'secondary';
    color?: ColorValue;
    selected?: boolean;
    disabled?: boolean;
    loading?: boolean;
}
const Button: React.FC<IButtonProps> = props => {
    const {title, style, selected, variant = 'primary', textStyle, color, loading, disabled, ...otherProps} = props;
    let bgColorStyle: {backgroundColor: ColorValue} = {
        backgroundColor: COLORS.white_3,
    };
    if (variant === 'secondary') {
        bgColorStyle = {
            backgroundColor: COLORS.light_blue_1,
        };
    } else if (color) {
        bgColorStyle = {
            backgroundColor: color,
        };
    }
    if (loading) {
        return (
            <View style={[styles.wrapper, styles.border, style]}>
                {/* <Text style={[styles.text, styles.secondary, textStyle]}>{title}</Text> */}
                <View
                    style={{
                        width: '100%',
                        ...bgColorStyle,
                        backgroundColor: 'transparent',
                    }}>
                    <ActivityIndicator size="small" color={COLORS.dark_blue_1} />
                </View>
            </View>
        );
    }
    if (disabled) {
        return (
            <View style={[styles.wrapper, style, {backgroundColor: 'transparent'}]}>
                <Text style={[styles.text, {color: COLORS.dark_gray_1}, textStyle]}>{title}</Text>
            </View>
        );
    }
    if (selected) {
        return (
            <View style={[styles.wrapper, styles.border, style]}>
                <Text style={[styles.text, styles.secondary, textStyle]}>{title}</Text>
            </View>
        );
    }

    return (
        <TouchableHighlight
            style={[styles.wrapper, STYLES.deepShadow, bgColorStyle, style]}
            activeOpacity={0.8}
            underlayColor={COLORS.light_blue_1}
            {...otherProps}>
            <Text style={[styles.text, styles[variant], textStyle]}>{title}</Text>
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
        backgroundColor: COLORS.white_3,
    },
    text: {
        fontSize: scaleSize(20),
        color: COLORS.dark_gray_2,
        fontWeight: 'bold',
    },
    primary: {
        color: COLORS.dark_gray_2,
    },
    secondary: {
        color: COLORS.black_1,
    },
    border: {borderColor: COLORS.dark_gray_2, borderWidth: 1},
});
