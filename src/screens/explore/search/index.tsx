import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import Input from '@src/components/Input';
import Stack from '@src/components/Stack';
import {SearchScreenProps} from '@src/navigation/ExploreStackScreen';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchKeyword} from './types';

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

const SearchScreen: React.FC<SearchScreenProps> = ({navigation}) => {
    const {t} = useTranslation();

    const renderItem: ListRenderItem<SearchKeyword> = ({item}) => {
        return <Text style={styles.item}>{item.text}</Text>;
    };
    return (
        <Box container bgColor={COLORS.gray_1} padding={scaleSize(20)}>
            <Stack direction="row" space={scaleSize(10)}>
                {/* FIXME: Change to search icon  */}
                <Input
                    style={{flex: 1}}
                    inputStyle={{paddingVertical: scaleSize(10)}}
                    icon={<Ionicons name="search" size={scaleSize(20)} color={COLORS.dark_gray_2} />}
                    iconPosition="start"
                />
                <Text
                    style={[styles.text, styles.bold]}
                    onPress={() => {
                        navigation.goBack();
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
