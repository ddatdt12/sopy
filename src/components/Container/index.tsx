import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {IContainerProps} from './types';

const Container: FC<IContainerProps> = props => {
    const {children, fullScreen, bgColor, ...other} = props;
    return (
        <SafeAreaView
            style={[
                {
                    backgroundColor: bgColor,
                },
                fullScreen && {
                    flex: 1,
                },
                {...other},
            ]}>
            {children}
        </SafeAreaView>
    );
};

export default Container;
