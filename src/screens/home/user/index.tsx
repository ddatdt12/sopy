import {scaleSize} from '@core/utils';
import {useFocusEffect} from '@react-navigation/native';
import postApi from '@src/api/postApi';
import {IMAGES} from '@src/assets';
import {SIZES, STYLES} from '@src/assets/const';
import Loading from '@src/components/Loading';
import {useAppDispatch, useAppSelector} from '@src/store';
import {Post} from '@src/types';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, NativeModules, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeelingModal from './components/FeelingModal';
import PostCard from './components/PostCard';
import PostDetails from './components/PostDetails';

const HomeScreen: React.FC = () => {
    const {t} = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const [postList, setPostList] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const user = useAppSelector(state => state.auth.user);
    const [selectedPost, setSelectedPost] = useState<Post>();

    useFocusEffect(
        React.useCallback(() => {
            let mounted = true;
            setLoading(true);
            (async () => {
                try {
                    const data = await postApi.getTop5NewPost();
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
        }, []),
    );

    return (
        <View style={styles.container}>
            <Image source={IMAGES.home_user.box} style={styles.backgroundTop} />
            <Image source={IMAGES.home_user.circle_box} style={styles.backgroundCenter} />
            <Image source={IMAGES.home_user.tam_giac} style={styles.backgroundBottom} />

            <View style={styles.textContainer}>
                <Text style={styles.text1}>Hi {user?.name},</Text>
                <Text style={styles.text2}>Suggest for you </Text>
            </View>

            <View
                style={{
                    paddingBottom: SIZES.bottomBarHeight + scaleSize(30),
                    flex: 1,
                }}>
                <View
                    style={{
                        flex: 1,
                    }}>
                    {loading ? (
                        <Loading />
                    ) : (
                        <ScrollView
                            contentContainerStyle={{paddingBottom: scaleSize(10), paddingHorizontal: scaleSize(20)}}>
                            {postList.map((post, index) => (
                                <PostCard
                                    key={post.id}
                                    title={post.title}
                                    authorName={post.expert.name}
                                    picture={post.picture}
                                    direction={index % 2 !== 0 ? 'left' : 'right'}
                                    onPress={() => setSelectedPost(post)}
                                />
                            ))}
                        </ScrollView>
                    )}
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        width: '100%',
                        marginTop: scaleSize(10),
                    }}>
                    <TouchableOpacity style={styles.Slide} onPress={() => setModalVisible(true)}>
                        <Ionicons name="chevron-up" size={30} color="#8F9BB2" />
                        <Text style={styles.SlideText}>How are you feeling?</Text>
                        <Ionicons name="chevron-up" size={30} color="#8F9BB2" />
                    </TouchableOpacity>
                </View>
            </View>
            <FeelingModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            {selectedPost && <PostDetails post={selectedPost} onClose={() => setSelectedPost(undefined)} />}
        </View>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: '#EBF3FA',
        position: 'relative',
    },
    backgroundTop: {
        flex: 1,
        position: 'absolute',
        top: 40,
        right: 10,
    },
    backgroundCenter: {
        flex: 1,
        position: 'absolute',
        bottom: 450,
        left: 50,
    },
    backgroundBottom: {
        flex: 1,
        position: 'absolute',
        bottom: 200,
        right: 30,
    },
    textContainer: {
        marginTop: 100,
        marginLeft: -10,
    },
    text1: {
        marginHorizontal: 30,
        color: '#8F9BB2',
        fontSize: 24,
        fontWeight: 'bold',
    },
    text2: {
        marginTop: 5,
        marginHorizontal: 30,
        color: '#334C78',
        fontSize: 24,
        fontWeight: 'bold',
    },
    backgroundLine: {
        position: 'absolute',
        left: 10,
        bottom: 59,
    },

    img: {
        flex: 1,
        position: 'absolute',
        //bottom: 20,
        right: 40 / 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Slide: {
        //marginHorizontal: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 60,
        backgroundColor: '#F5F9FD',
        paddingHorizontal: scaleSize(8),
        paddingVertical: scaleSize(4),
        ...STYLES.deepShadow,
    },
    SlideText: {
        textAlign: 'center',
        color: '#8F9BB2',
        fontSize: scaleSize(16),
        fontWeight: '500',
        marginHorizontal: scaleSize(10),
    },
});
