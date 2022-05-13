import {scaleSize} from '@core/utils';
import {FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Loading from '@src/components/Loading';
import Neumorph from '@src/components/Neumorph';
import Stack from '@src/components/Stack';
import {Post} from '@src/types';
import {convertEmotion, POST_EMOTION} from '@src/utils';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem, ScrollView, StyleSheet} from 'react-native';
import PostDetails from '../post_details';
import PostCard from './components/PostCard';
// import Posts from './posts';
// import {Post} from './types';
type Props = {
    postList: Post[];
    loading?: boolean;
    forceRefresh?: () => void;
};
type Filter = 'All' | 'Happy' | 'Sad' | 'Scared' | 'Angry' | 'Worry' | 'Normal' | 'Depression';
const PostsScreen: React.FC<Props> = ({postList, loading, forceRefresh}) => {
    const {t} = useTranslation();
    const [post, setPost] = useState<Post>();
    const [filteredPosts, setFilteredPost] = useState<Post[]>([]);
    const [filter, setFilter] = useState<Filter>('All');

    console.log('Filter', filter);
    useEffect(() => {
        if (postList) {
            if (filter === 'All') {
                setFilteredPost(postList);
            } else {
                setFilteredPost(postList.filter(p => convertEmotion(p.emotion - 1) === filter));
            }
        }
    }, [postList, filter]);

    const renderItem: ListRenderItem<Post> = ({item}) => {
        return (
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
                <ScrollView horizontal={true} contentContainerStyle={{paddingVertical: scaleSize(10)}}>
                    <Neumorph borderRadius={scaleSize(60)} shadowContainerStyle={{marginRight: scaleSize(10)}}>
                        <Button
                            title={t('All')}
                            selected={filter === 'All'}
                            style={styles.button}
                            textStyle={{...FONTS.h3}}
                            onPress={() => {
                                setFilter('All');
                            }}
                        />
                    </Neumorph>
                    <Neumorph borderRadius={scaleSize(60)} shadowContainerStyle={{marginRight: scaleSize(10)}}>
                        <Button
                            title={t('Happy')}
                            selected={filter === 'Happy'}
                            style={styles.button}
                            textStyle={{...FONTS.h3}}
                            onPress={() => {
                                setFilter('Happy');
                            }}
                        />
                    </Neumorph>
                    <Neumorph borderRadius={scaleSize(60)} shadowContainerStyle={{marginRight: scaleSize(10)}}>
                        <Button
                            title={t('Sad')}
                            selected={filter === 'Sad'}
                            style={styles.button}
                            textStyle={{...FONTS.h3}}
                            onPress={() => {
                                setFilter('Sad');
                            }}
                        />
                    </Neumorph>
                    <Neumorph borderRadius={scaleSize(60)} shadowContainerStyle={{marginRight: scaleSize(10)}}>
                        <Button
                            title={t('Scared')}
                            selected={filter === 'Scared'}
                            style={styles.button}
                            textStyle={{...FONTS.h3}}
                            onPress={() => {
                                setFilter('Scared');
                            }}
                        />
                    </Neumorph>
                    <Neumorph borderRadius={scaleSize(60)} shadowContainerStyle={{marginRight: scaleSize(10)}}>
                        <Button
                            title={t('Angry')}
                            selected={filter === 'Angry'}
                            style={styles.button}
                            textStyle={{...FONTS.h3}}
                            onPress={() => {
                                setFilter('Angry');
                            }}
                        />
                    </Neumorph>
                    <Neumorph borderRadius={scaleSize(60)} shadowContainerStyle={{marginRight: scaleSize(10)}}>
                        <Button
                            title={t('Worry')}
                            selected={filter === 'Worry'}
                            style={styles.button}
                            textStyle={{...FONTS.h3}}
                            onPress={() => {
                                setFilter('Worry');
                            }}
                        />
                    </Neumorph>
                    <Neumorph borderRadius={scaleSize(60)} shadowContainerStyle={{marginRight: scaleSize(10)}}>
                        <Button
                            title={t('Normal')}
                            selected={filter === 'Normal'}
                            style={styles.button}
                            textStyle={{...FONTS.h3}}
                            onPress={() => {
                                setFilter('Normal');
                            }}
                        />
                    </Neumorph>
                    <Neumorph borderRadius={scaleSize(60)} shadowContainerStyle={{marginRight: scaleSize(10)}}>
                        <Button
                            title={t('Depression')}
                            selected={filter === 'Depression'}
                            style={styles.button}
                            textStyle={{...FONTS.h3}}
                            onPress={() => {
                                setFilter('Depression');
                            }}
                        />
                    </Neumorph>
                </ScrollView>
            </Stack>
            {loading ? (
                <Loading />
            ) : (
                <FlatList
                    data={filteredPosts}
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
