import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const InnerShadow: React.FC<ViewProps> = ({children, style}) => {
    return (
        <View style={[styles.container, style]}>
            {/* <View style={styles.shadow}>{children}</View> */}
            {children}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // padding: scaleSize(10),
    },
    shadow: {
        margin: 10,
        width: '100%',
        borderRadius: scaleSize(40),

        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 30,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowRadius: 30,
        shadowOpacity: 1,
        shadowOffset: {
            width: 122,
            height: 4,
        },
        elevation: 22,
    },
});

export default InnerShadow;
