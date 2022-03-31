import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    style?: StyleProp<ViewStyle>;
}

const LinearStroke: React.FC<Props> = ({children, style}) => {
    return (
        <LinearGradient
            colors={['red', 'white']}
            style={[
                {
                    padding: 2,
                },
                style,
            ]}>
            {children}
        </LinearGradient>
    );
};

export default LinearStroke;
