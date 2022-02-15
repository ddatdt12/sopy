import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface ICenterProps {
    width?: number;
    height?: number;
    style?: StyleProp<ViewStyle>;
}
const Center: FC<ICenterProps> = props => {
    const {children, width, height, style} = props;
    return (
        <View
            style={[
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: width,
                    height: height,
                },
                style,
            ]}>
            {children}
        </View>
    );
};

export default Center;

const styles = StyleSheet.create({});
