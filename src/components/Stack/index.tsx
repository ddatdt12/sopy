import React, {FC} from 'react';
import {View} from 'react-native';
import {IStackProps} from './types';
import {getSpacedChildren} from './utils';

const Stack: FC<IStackProps> = props => {
    const {children, space, direction, style, ...other} = props;
    return (
        <View
            style={[
                {
                    flexDirection: direction || 'column',
                },
                style,
            ]}
            {...other}>
            {getSpacedChildren(children, space, direction === 'row' ? 'X' : 'Y')}
        </View>
    );
};

export default Stack;
