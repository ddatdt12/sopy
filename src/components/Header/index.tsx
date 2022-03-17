import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '../IconButton';
import Neumorph from '../Neumorph';
import Button from '../Button';

type Props = {
    canGoBack?: boolean;
    goBack?: () => void;
    headerRight?: () => React.ReactNode;
    headerLeft?: () => React.ReactNode;
    title?: string;
};
const Header: FC<Props> = props => {
    const insets = useSafeAreaInsets();
    const {canGoBack, goBack, headerLeft, headerRight, title} = props;
    return (
        <View style={styles.header}>
            {canGoBack ? (
                <View style={[styles.headerLeft]} accessible={false}>
                    <Neumorph circle>
                        <IconButton
                            icon={<Ionicons name="chevron-back" size={scaleSize(25)} color={COLORS.dark_gray_2} />}
                            onPress={() => goBack && goBack()}
                            activeOpacity={0.8}
                        />
                    </Neumorph>
                </View>
            ) : (
                // <Button />
                headerLeft && <View style={[styles.headerLeft]}>{headerLeft()}</View>
            )}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {headerRight && <View style={styles.headerRight}>{headerRight()}</View>}
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
        zIndex: 10,
    },
    headerRight: {
        position: 'absolute',
        right: scaleSize(10),
    },
});
