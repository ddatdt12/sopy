import {scaleSize} from '@core/utils';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {HeaderButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {COLORS, FONTS} from '@src/assets/const';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '../IconButton';
import Neumorph from '../Neumorph';

const Header: FC<NativeStackHeaderProps> = props => {
    const insets = useSafeAreaInsets();
    const {
        navigation,
        options: {headerRight, headerTintColor, title},
    } = props;
    const headerRightProps: HeaderButtonProps = {
        canGoBack: navigation.canGoBack(),
        tintColor: headerTintColor,
    };

    return (
        <View
            style={{
                paddingTop: insets.top,
                backgroundColor: COLORS.gray_1,
            }}>
            <View style={styles.header}>
                {navigation.canGoBack() && (
                    <View style={[styles.headerLeft]}>
                        <Neumorph circle>
                            <IconButton
                                icon={<Ionicons name="chevron-back" size={scaleSize(20)} />}
                                onPress={() => navigation.goBack()}
                                activeOpacity={0.8}
                            />
                        </Neumorph>
                    </View>
                )}
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {headerRight && <View style={styles.headerRight}>{headerRight(headerRightProps)}</View>}
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        width: '100%',
        backgroundColor: COLORS.gray_1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scaleSize(20),
        paddingVertical: scaleSize(14),
        // paddingVertical: scaleSize(18),
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        ...FONTS.h2,
        color: COLORS.black_1,
    },
    headerLeft: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: scaleSize(10),
    },
    headerRight: {
        position: 'absolute',
        right: scaleSize(10),
    },
});
