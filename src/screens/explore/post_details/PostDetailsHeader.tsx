import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import Stack from '@src/components/Stack';
import Button from '@src/components/Button';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '@src/components/IconButton';
import Neumorph from '@src/components/Neumorph';
import {useNavigation} from '@react-navigation/native';
import {PostDetailsScreenProps} from '@src/navigation/ExploreStackScreen';

interface IProps {
    closeModal: () => void;
}
const PostDetailsHeader: React.FC<IProps> = props => {
    const {closeModal} = props;
    return (
        <View style={styles.header}>
            <Neumorph circle>
                <IconButton
                    size={scaleSize(36)}
                    icon={<Ionicons name="close" size={24} color={COLORS.dark_gray_2} />}
                    onPress={() => {
                        closeModal();
                    }}
                />
            </Neumorph>

            <Neumorph circle>
                <IconButton
                    size={scaleSize(36)}
                    icon={<Ionicons name="search" size={24} color={COLORS.dark_gray_2} />}
                />
            </Neumorph>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.gray_1,
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
