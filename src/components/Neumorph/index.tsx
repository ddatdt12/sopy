import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
const Neumorph: React.FC<ViewProps> = ({children, style, ...others}) => {
    return (
        <View style={styles.topShadow}>
            <View style={styles.bottomShadow}>
                <View style={[styles.inner, style]} {...others}>
                    {children}
                </View>
            </View>
        </View>
    );
};

export default Neumorph;

const styles = StyleSheet.create({
    topShadow: {
        borderRadius: scaleSize(12),
        shadowColor: '#FBFFFF',
        shadowOffset: {
            width: -6,
            height: -6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,

        elevation: 12,
    },
    bottomShadow: {
        borderRadius: scaleSize(12),
        shadowColor: COLORS.dark_gray_1,
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,

        elevation: 12,
    },
    inner: {
        backgroundColor: '#E9F0F7',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#E2ECFD',
        borderWidth: 1,
    },
});
