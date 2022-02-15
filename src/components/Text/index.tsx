import React, {FC} from 'react';
import {Text as RText} from 'react-native';
import {ITextProps} from './types';

const Text: FC<ITextProps> = props => {
    const {color, fontSize, lineHeight, textAlign, fontWeight, style, children, underline, ...others} = props;
    return (
        <RText
            style={[
                {
                    color,
                    fontSize,
                    lineHeight,
                    textAlign,
                    fontWeight,
                    textDecorationLine: underline ? 'underline' : 'none',
                },
                style,
            ]}
            {...others}>
            {children}
        </RText>
    );
};

export default Text;
