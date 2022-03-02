import {COLORS, SIZES} from '@src/assets/const';
import React from 'react';
import {ColorValue, StyleSheet, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface IProps extends TouchableOpacityProps {
    icon: React.ReactNode;
    size?: number;
    bgColor?: ColorValue | undefined;
}

const IconButton: React.FC<IProps> = props => {
    const {icon, size, bgColor, style, ...otherProps} = props;
    return (
        <TouchableOpacity
            style={[
                {
                    width: size || SIZES.circleButton,
                    height: size || SIZES.circleButton,
                    backgroundColor: bgColor || COLORS.white_3,
                    borderRadius: (size || SIZES.circleButton) / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                style,
            ]}
            {...otherProps}>
            {icon}
        </TouchableOpacity>
    );
};

export default IconButton;

const styles = StyleSheet.create({});
