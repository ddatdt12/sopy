import {scaleSize} from '@core/utils';
import {FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Stack from '@src/components/Stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import PostCard from './components/PostCard';
import Posts from './posts';
import {Post} from './types';
interface IProps {}

const PostsScreen = ({}: IProps) => {
    const {t} = useTranslation();

    const renderItem: ListRenderItem<Post> = ({item}) => {
        return <PostCard title={item.title} author={item.author} image={item.image} />;
    };
    return (
        <Box container>
            <Stack direction="row" space={scaleSize(10)} style={styles.tabWrapper}>
                <Button title={t('All')} style={styles.button} textStyle={{...FONTS.h3}} onPress={() => {}} />
                <Button title={t('Happy')} style={styles.button} textStyle={{...FONTS.h3}} onPress={() => {}} />
                <Button title={t('Sad')} style={styles.button} textStyle={{...FONTS.h3}} onPress={() => {}} />
                <Button title={t('Scared')} style={styles.button} textStyle={{...FONTS.h3}} onPress={() => {}} />
            </Stack>
            <FlatList
                data={Posts}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </Box>
    );
};

export default PostsScreen;

const styles = StyleSheet.create({
    tabWrapper: {
        flexWrap: 'wrap',
        marginVertical: scaleSize(16),
    },
    button: {
        paddingHorizontal: scaleSize(12),
    },
});
