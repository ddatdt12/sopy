import { scaleSize } from '@core/utils';
import { COLORS } from '@src/assets/const';
import React from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';

interface IProps extends TouchableWithoutFeedbackProps {
  icon: React.ReactNode;
  size?: number;
  bgColor?: ColorValue | undefined;
}

const IconButton: React.FC<IProps> = (props) => {
  const { icon, size, bgColor, style, ...otherProps } = props;
  return (
    <TouchableOpacity
      style={[
        {
          width: size || scaleSize(36),
          height: size || scaleSize(36),
          backgroundColor: bgColor || COLORS.white_3,
          borderRadius: (size || scaleSize(36)) / 2,
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
