import {ViewStyle} from 'react-native';

interface IContainerProps extends Omit<ViewStyle, 'direction'> {
    bgColor?: string;
    fullScreen?: boolean;
}

export type {IContainerProps};
