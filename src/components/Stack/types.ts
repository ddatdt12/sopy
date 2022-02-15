import {FlexAlignType, StyleProp, ViewStyle} from 'react-native';

interface IStackProps extends Omit<ViewStyle, 'direction'> {
    space?: number;
    direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
    children: JSX.Element | JSX.Element[];
}

export type {IStackProps};
