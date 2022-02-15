import {ColorValue, TextProps} from 'react-native';

export interface ITextProps extends TextProps {
    color?: ColorValue | undefined;
    fontSize?: number | undefined;
    lineHeight?: number | undefined;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
    underline?: boolean;
}
