import React, {FC} from 'react';
import {View} from 'react-native';
import {IBoxProps} from './types';
import {SafeAreaView} from 'react-native-safe-area-context';
const Box: FC<IBoxProps> = props => {
    const {children, container, bgColor, sx, safeArea = false, ...other} = props;
    const containerStyle = [
        {
            backgroundColor: bgColor,
        },
        container && {
            flex: 1,
        },
        {...other},
        sx,
    ];
    if (safeArea) {
        return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
    }
    return <View style={containerStyle}>{children}</View>;
};

export default Box;
