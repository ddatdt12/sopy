import {scaleSize} from '@core/utils';
import {ColorValue, ViewProps, ViewStyle} from 'react-native';

interface IBoxProps extends ViewStyle, Omit<ViewProps, 'style'> {
    bgColor?: ColorValue;
    container?: boolean;
    sx?: ViewProps['style'];
    safeArea?: boolean;
    loading?: boolean;
}

export type {IBoxProps};
