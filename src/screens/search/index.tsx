import {Alert, FlatList, ListRenderItem, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Input from '@src/components/Input';
import {SearchKeyword} from './types';
import Stack from '@src/components/Stack';
import Box from '@src/components/Box';
import {COLORS} from '@src/assets/const';
import {scaleSize} from '@core/utils';
import {useTranslation} from 'react-i18next';

const DATA: SearchKeyword[] = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: 'Happy',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        text: 'Break up',
    },
    {
        id: '58694a0f-3da1-471f-bd96-14557112412',
        text: 'Anxious',
    },
    {
        id: '58694a0f-3da1-471f-bd96-14557112352',
        text: 'Sad',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571ez2c123',
        text: 'Perfect',
    },
];
type Props = {};

const SearchScreen: React.FC<Props> = props => {
    const {t} = useTranslation();

    const renderItem: ListRenderItem<SearchKeyword> = ({item}) => {
        return <Text style={styles.item}>{item.text}</Text>;
    };
    return (
        <Box container bgColor={COLORS.gray_1} padding={scaleSize(20)}>
            <Stack direction="row" space={scaleSize(10)}>
                {/* FIXME: Change to search icon  */}
                <Input style={{flex: 1}} icon={<Text style={{paddingHorizontal: 2}}>Icon</Text>} iconPosition="end" />
                <Text
                    style={[styles.text, styles.bold]}
                    onPress={() => {
                        Alert.alert('Test');
                    }}>
                    {t('Cancel')}
                </Text>
            </Stack>
            <FlatList
                ListHeaderComponent={<Text style={[styles.header, styles.bold]}>{t('Suggestions')}</Text>}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </Box>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    header: {
        fontSize: scaleSize(20),
    },
    text: {
        fontSize: scaleSize(18),
        alignSelf: 'center',
    },
    bold: {
        color: COLORS.black_2,
        fontWeight: '700',
    },
    list: {
        paddingHorizontal: scaleSize(16),
        marginTop: scaleSize(10),
    },
    item: {
        color: COLORS.black_2,
        fontSize: scaleSize(18),
    },
});
