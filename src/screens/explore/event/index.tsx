import {scaleSize} from '@core/utils';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {RANDOM_IMAGE, SIZES} from '@src/assets/const';
import {Box} from '@src/components';
import Loading from '@src/components/Loading';
import {MainTabCompositeProps} from '@src/navigation/AppStackParams';
import React, {useState} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import PostDetails from '../post_details';
import EventCard from './components/EventCard';

type Props = {
    eventList: Post[];
    loading?: boolean;
    forceRefresh?: () => void;
};

const EventScreen: React.FC<Props> = props => {
    const {eventList, loading} = props;
    const [post, setPost] = useState<Post>();
    const navigation = useNavigation<MainTabCompositeProps<'Explore'>['navigation']>();
    const renderItem: ListRenderItem<Post> = ({item}) => {
        return (
            <EventCard
                title={item.title}
                description={item.detail}
                image={RANDOM_IMAGE}
                onPress={() => {
                    setPost(item);
                }}
            />
        );
    };
    return (
        <Box>
            <View style={{marginTop: scaleSize(40)}}>
                {loading ? (
                    <Loading />
                ) : (
                    <FlatList
                        data={eventList}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{paddingBottom: SIZES.bottomBarHeight + scaleSize(50)}}
                    />
                )}
            </View>
            {post && <PostDetails post={post} modalVisible={!!post} setModalVisible={() => setPost(undefined)} />}
        </Box>
    );
};

export default EventScreen;

const styles = StyleSheet.create({});
