import {scaleSize} from '@core/utils';
import IconButton from '@src/components/IconButton';
import Neumorph from '@src/components/Neumorph';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureResponderEvent} from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../../../assets/const';

type DoneButtonProps = {
    onPress: ((event: GestureResponderEvent) => void) | undefined;
};
const DoneButton: React.FC<DoneButtonProps> = ({onPress}) => {
    return (
        <Neumorph circle style={{bottom: scaleSize(4)}}>
            <IconButton
                onPress={onPress}
                icon={<Ionicons name="checkmark" size={scaleSize(25)} />}
                size={scaleSize(42)}
                activeOpacity={0.8}
            />
        </Neumorph>
    );
};

export default DoneButton;

const styles = StyleSheet.create({
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        // width: sca,
        height: 45,
        borderRadius: 50,
        backgroundColor: COLORS.white_3,
        position: 'absolute',
        right: '50%',
    },
    elevation: {
        elevation: 5,
        shadowColor: COLORS.dark_gray_1,
    },
    buttonText: {
        ...FONTS.h4,
        color: COLORS.black_1,
    },
});
