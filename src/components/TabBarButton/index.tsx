import {isIOS, scaleSize} from '@core/utils';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {COLORS, STYLES} from '@src/assets/const';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const TabBarButton: React.FC<BottomTabBarButtonProps> = props => {
    const {style, children, ...otherProps} = props;
    const selected = props.accessibilityState?.selected;
    return (
        <View style={[style, {justifyContent: 'center', bottom: isIOS ? scaleSize(-13) : 0, height: '100%'}]}>
            <TouchableOpacity {...otherProps} style={STYLES.deepShadow} activeOpacity={0.9}>
                {selected ? (
                    <View
                        style={[
                            styles.button,
                            {
                                elevation: 0,
                                backgroundColor: COLORS.white_3,
                                borderWidth: 1,
                                borderColor: COLORS.dark_gray_2,
                                shadowOpacity: 0,
                            },
                        ]}>
                        {children}
                    </View>
                ) : (
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#FFFFFF4D', COLORS.white_3]}
                        start={{
                            x: 0.1,
                            y: 0.05,
                        }}
                        end={{
                            x: 0.8,
                            y: 0.8,
                        }}
                        style={[styles.button]}>
                        {children}
                    </LinearGradient>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaleSize(42),
        height: scaleSize(42),
        borderRadius: scaleSize(40) / 2,
        // bottom: scaleSize(-15),
        ...STYLES.deepShadow,
        zIndex: 1000,
    },
});
export default TabBarButton;
