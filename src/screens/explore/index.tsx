import {scaleSize} from '@core/utils';
import {useFocusEffect} from '@react-navigation/native';
import postApi from '@src/api/postApi';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import {Post} from '@src/types';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import ExploreHeader from './components/ExploreHeader';
import EventScreen from './event';
import PostsScreen from './post';
import PostDetailsScreen from './post_details';
import SearchScreen from './search';

const ExploreScreen: React.FC = () => {
    const [route, setRoute] = useState<'Post' | 'Event'>('Post');
    const [postList, setPostList] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    useFocusEffect(
        React.useCallback(() => {
            let mounted = true;
            setLoading(true);
            (async () => {
                try {
                    let data = [];
                    if (route === 'Event') {
                        data = await postApi.getAllEvents();
                    } else {
                        data = await postApi.getAllPosts();
                    }
                    if (mounted) {
                        setPostList(data);
                    }
                } catch (error) {
                    console.log(error);
                }
                if (mounted) {
                    setLoading(false);
                }
            })();

            return () => {
                mounted = false;
            };
        }, [route]),
    );
    useEffect(() => {
        if (refresh) {
            let mounted = true;
            setLoading(true);
            (async () => {
                try {
                    let data = [];
                    if (route === 'Event') {
                        data = await postApi.getAllEvents();
                    } else {
                        data = await postApi.getAllPosts();
                    }
                    if (mounted) {
                        setPostList(data);
                    }
                } catch (error) {
                    console.log(error);
                }
                if (mounted) {
                    setLoading(false);
                    setRefresh(false);
                }
            })();

            return () => {
                mounted = false;
            };
        }
    }, [route, refresh]);

    return (
        <Box bgColor={COLORS.gray_1} container paddingHorizontal={scaleSize(10)} safeArea={true}>
            <ExploreHeader route={route} navigate={tab => setRoute(tab)} />

            {route === 'Post' && (
                <PostsScreen postList={postList} loading={loading} forceRefresh={() => setRefresh(true)} />
            )}
            {route === 'Event' && (
                <EventScreen eventList={postList} loading={loading} forceRefresh={() => setRefresh(true)} />
            )}
        </Box>
    );
};

export default ExploreScreen;

export {EventScreen, PostsScreen, SearchScreen, PostDetailsScreen};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
        paddingHorizontal: scaleSize(10),
        position: 'relative',
    },
    buttonContainer: {
        justifyContent: 'center',
        marginVertical: scaleSize(12),
    },
});
