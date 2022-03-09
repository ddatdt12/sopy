import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import Button from '@src/components/Button';
import IconButton from '@src/components/IconButton';
import Neumorph from '@src/components/Neumorph';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
    title: string;
    goBack: () => void;
    submitButtonOption?: {
        onPress: () => void;
        disabled: boolean;
    };
};

const Header = (props: Props) => {
    const {submitButtonOption, goBack, title} = props;
    return (
        <View style={styles.header}>
            <View style={[styles.headerLeft]}>
                <Neumorph circle>
                    <IconButton
                        icon={<Ionicons name="chevron-back" size={scaleSize(20)} />}
                        onPress={() => goBack()}
                        activeOpacity={0.8}
                    />
                </Neumorph>
            </View>

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
                {title}
            </Text>
            {/* </View> */}
            <Button
                title="Done"
                variant="secondary"
                style={[styles.button]}
                activeOpacity={0}
                {...submitButtonOption}
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
