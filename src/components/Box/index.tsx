import React, {FC} from 'react';
import {View} from 'react-native';
import {IBoxProps} from './types';
import {SafeAreaView} from 'react-native-safe-area-context';
const Box: FC<IBoxProps> = props => {
    const {children, container, bgColor, sx, safeArea = false, ...other} = props;
    if (safeArea) {
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
    } else {
        return (
            <View
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
            </View>
        );
    }
};

export default Box;
