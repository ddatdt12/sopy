import {scaleSize} from '@core/utils';
import {useFocusEffect} from '@react-navigation/native';
import postApi from '@src/api/postApi';
import {FONTS, RANDOM_IMAGE} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Loading from '@src/components/Loading';
import Neumorph from '@src/components/Neumorph';
import Stack from '@src/components/Stack';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import DetailsModal from '../components/DetailsModal';
import PostDetails from '../post_details';
import PostDetailsHeader from '../post_details/PostDetailsHeader';
import PostCard from './components/PostCard';
// import Posts from './posts';
// import {Post} from './types';
type Props = {
    postList: Post[];
    loading?: boolean;
    forceRefresh?: () => void;
};

const PostsScreen: React.FC<Props> = ({postList, loading, forceRefresh}) => {
    const {t} = useTranslation();
    const [post, setPost] = useState<Post>();

    const renderItem: ListRenderItem<Post> = ({item}) => {
        return (
            // FIXME: now Data not correct
            <PostCard
                title={item.title}
                author={item.expert.name}
                image={item.picture}
                onPress={() => {
                    setPost(item);
                }}
            />
        );
    };
    return (
        <Box container safeArea={false}>
            <Stack direction="row" space={scaleSize(10)} style={styles.tabWrapper}>
                <Neumorph borderRadius={scaleSize(60)}>
                    <Button title={t('All')} style={styles.button} textStyle={{...FONTS.h3}} onPress={() => {}} />
                </Neumorph>
                <Neumorph borderRadius={scaleSize(60)}>
                    <Button title={t('Happy')} style={styles.button} textStyle={{...FONTS.h3}} onPress={() => {}} />
                </Neumorph>
                <Neumorph borderRadius={scaleSize(60)}>
                    <Button title={t('Sad')} style={styles.button} textStyle={{...FONTS.h3}} onPress={() => {}} />
                </Neumorph>
                <Neumorph borderRadius={scaleSize(60)}>
                    <Button title={t('Scared')} style={styles.button} textStyle={{...FONTS.h3}} onPress={() => {}} />
                </Neumorph>
            </Stack>
            {loading ? (
                <Loading />
            ) : (
                <FlatList
                    data={postList}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    contentContainerStyle={{paddingBottom: scaleSize(76)}}
                />
            )}

            {post && (
                <PostDetails
                    post={post}
                    modalVisible={!!post}
                    setModalVisible={() => setPost(undefined)}
                    forceRefresh={forceRefresh}
                />
            )}
        </Box>
    );
};

export default PostsScreen;

const styles = StyleSheet.create({
    tabWrapper: {
        flexWrap: 'wrap',
        marginVertical: scaleSize(16),
        paddingVertical: scaleSize(4),
    },
    button: {
        paddingHorizontal: scaleSize(12),
    },
});
