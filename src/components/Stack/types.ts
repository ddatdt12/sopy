import {FlexAlignType, StyleProp, ViewStyle, ViewProps} from 'react-native';

interface IStackProps extends ViewProps {
    space?: number;
    direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
    children: JSX.Element | JSX.Element[];
}

export type {IStackProps};
