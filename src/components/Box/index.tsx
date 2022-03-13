import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {IBoxProps} from './types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '@src/assets/const';
import SplashScreen from '@src/screens/splash';
const Box: FC<IBoxProps> = props => {
    const {children, container, bgColor, sx, loading, safeArea = false, ...other} = props;
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
    if (loading) {
        return <SplashScreen />;
    }
    if (safeArea) {
        return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
    }
    return <View style={containerStyle}>{children}</View>;
};

export default Box;
