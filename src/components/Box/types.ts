import {ColorValue, ViewProps, ViewStyle} from 'react-native';

interface IBoxProps extends ViewStyle, Omit<ViewProps, 'style'> {
    bgColor?: ColorValue;
    container?: boolean;
    sx?: ViewProps['style'];
}

export type {IBoxProps};
