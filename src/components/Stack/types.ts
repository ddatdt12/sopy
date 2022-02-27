import {FlexAlignType, StyleProp, ViewStyle, ViewProps} from 'react-native';

interface IStackProps extends ViewProps {
    space?: number;
    direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
    children: JSX.Element | JSX.Element[];
    justifyContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | undefined;
    alignItems?: FlexAlignType | undefined;
}

export type {IStackProps};
