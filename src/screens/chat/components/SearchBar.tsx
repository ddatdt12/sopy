import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import Input from '@src/components/Input';
import Stack from '@src/components/Stack';
import {UserChatStackParamList, UserChatStackProps} from '@src/navigation/user/type';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
    onInputPress: () => void;
};
const SearchBar = ({onInputPress}: Props) => {
    const {t} = useTranslation();

    return (
        <Box bgColor={COLORS.gray_1} marginVertical={scaleSize(8)}>
            <Input
                placeholder={t('Search')}
                inputStyle={{height: scaleSize(42)}}
                onPressIn={() => onInputPress()}
                icon={<Ionicons name="search" size={scaleSize(20)} color={COLORS.dark_gray_2} />}
                iconPosition="start"
            />
        </Box>
    );
};

export default SearchBar;

const styles = StyleSheet.create({});
