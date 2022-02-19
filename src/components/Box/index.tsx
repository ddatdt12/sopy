import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {IBoxProps} from './types';

const Box: FC<IBoxProps> = props => {
    const {children, container, bgColor, sx, ...other} = props;
    return (
        <SafeAreaView
            style={[
                {
                    backgroundColor: bgColor,
                },
                container && {
                    flex: 1,
                },
                {...other},
                sx,
            ]}>
            {children}
        </SafeAreaView>
    );
};

export default Box;
