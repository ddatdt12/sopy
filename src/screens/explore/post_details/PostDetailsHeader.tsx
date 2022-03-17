import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import IconButton from '@src/components/IconButton';
import Neumorph from '@src/components/Neumorph';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
    closeModal: () => void;
}
const PostDetailsHeader: React.FC<IProps> = props => {
    const {closeModal} = props;
    return (
        <View style={styles.header}>
            <Neumorph circle>
                <IconButton
                    size={scaleSize(40)}
                    icon={<Ionicons name="close" size={25} color={COLORS.dark_gray_2} />}
                    onPress={() => {
                        closeModal();
                    }}
                />
            </Neumorph>

            <Neumorph circle>
                <IconButton
                    size={scaleSize(40)}
                    icon={<Ionicons name="search" size={25} color={COLORS.dark_gray_2} />}
                />
            </Neumorph>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: '10%',
        paddingHorizontal: scaleSize(16),
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        ...FONTS.h2,
        color: COLORS.black_1,
    },
});
export default PostDetailsHeader;
