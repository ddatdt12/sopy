import {scaleSize} from '@core/utils';
import Stack from '@src/components/Stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button as RNButton, FlatList, ListRenderItem, StyleSheet} from 'react-native';
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
        <>
            <Stack direction="row" space={scaleSize(10)} style={styles.tabWrapper}>
                <RNButton title={t('All')} />
                <RNButton title={t('Happy')} />
                <RNButton title={t('Sad')} />
                <RNButton title={t('Scared')} />
            </Stack>
            <FlatList
                data={Posts}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </>
    );
};

export default PostsScreen;

const styles = StyleSheet.create({
    tabWrapper: {
        marginVertical: scaleSize(6),
        paddingVertical: scaleSize(4),
    },
});
