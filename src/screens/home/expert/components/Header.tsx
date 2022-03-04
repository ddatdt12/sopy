import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from '@src/components/IconButton';
import Neumorph from '@src/components/Neumorph';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scaleSize} from '@core/utils';
import Button from '@src/components/Button';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import {Background} from 'victory-native';

type Props = {};

const Header = (props: Props) => {
    return (
        <View style={styles.header}>
            <View style={[styles.headerLeft]}>
                <Neumorph circle>
                    <IconButton
                        icon={<Ionicons name="chevron-back" size={scaleSize(20)} />}
                        // onPress={() => navigation.goBack()}
                        activeOpacity={0.8}
                    />
                </Neumorph>
            </View>
            {/* <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                }}> */}
            <Text
                style={[
                    FONTS.h3,
                    {
                        fontSize: scaleSize(20),
                        paddingTop: 6,
                        textAlignVertical: 'center',
                        alignSelf: 'center',
                    },
                ]}>
                Creating Event
            </Text>
            {/* </View> */}
            <Button
                title="Done"
                style={[styles.button, {backgroundColor: COLORS.light_blue_1}]}
                textStyle={{color: COLORS.black_1}}
                activeOpacity={0}
            />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: scaleSize(64),
    },
    headerLeft: {
        position: 'absolute',
        left: 10,
        backgroundColor: COLORS.gray_1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        position: 'absolute',
        right: 10,
        paddingHorizontal: scaleSize(10),
        paddingVertical: 6,
    },
});
