import {scaleSize} from '@core/utils';
import postApi from '@src/api/postApi';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import {Post} from '@src/types';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import BottomModal from '../components/BottomModal';
import DetailsModal from '../components/DetailsModal';
import EditPostScreen from '../components/EditPost';
import PostDetailsHeader from './PostDetailsHeader';

type Props = {
    post: Post;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    forceRefresh?: () => void;
};

const PostDetails: React.FC<Props> = ({post: selectedPost, modalVisible, setModalVisible, forceRefresh}) => {
    const {t} = useTranslation();
    const [optionModalVisible, setOptionModalVisible] = useState(false);
    const [editPostVisible, setEditPostVisible] = useState(false);
    const [post, setPost] = useState(selectedPost);
    const formatDate = dayjs(post.created_at! * 1000).format('dddd DD MMM YYYY, HH:mm');
    const handleDeletePress = async () => {
        try {
            await postApi.deletePost(post.id);
            forceRefresh?.();
            setOptionModalVisible(false);
            Alert.alert(t('Success'), t('Post deleted successfully!'), [
                {
                    text: 'OK',
                    onPress: () => {
                        setModalVisible(false);
                    },
                },
            ]);
        } catch (error) {
            console.log(error);
            Alert.alert(t('Error'), t('Server error occurred!'));
        }
    };
    const handleEditPress = () => {
        setEditPostVisible(true);
    };
    const handleUpdateSuccess = (updatedPost: Post) => {
        setPost(updatedPost);
        forceRefresh?.();
    };
    return (
        <>
            <DetailsModal isVisible={modalVisible} onClose={() => setModalVisible(false)}>
                <PostDetailsHeader
                    closeModal={() => setModalVisible(false)}
                    expertId={post.firebase_user_id}
                    openOptionModal={() => setOptionModalVisible(true)}
                />
                <Box container>
                    <ScrollView
                        contentContainerStyle={{
                            paddingHorizontal: scaleSize(20),
                            paddingBottom: scaleSize(40),
                        }}>
                        <Text style={styles.smallText}>{formatDate}</Text>
                        <View style={styles.marginY}>
                            <Text style={styles.title}>{post?.title}</Text>
                        </View>
                        <Image source={{uri: post.picture}} style={styles.image} />
                        <View style={styles.marginY}>
                            <Text style={styles.description}>{post?.detail}</Text>
                        </View>
                        <Box marginTop={scaleSize(20)}>
                            <Text>{post?.expert.name}</Text>
                        </Box>
                    </ScrollView>
                </Box>
            </DetailsModal>
            <BottomModal
                visible={optionModalVisible}
                onCancel={() => {
                    setOptionModalVisible(false);
                }}
                onDeletePress={() => {
                    Alert.alert(
                        t('Delete'),
                        t('Are you sure you want to delete this entry?'),
                        [
                            {
                                text: t('Delete'),
                                onPress: handleDeletePress,
                                style: 'default',
                            },
                            {
                                text: '',
                                style: 'cancel',
                            },
                        ],
                        {
                            cancelable: true,
                        },
                    );
                }}
                onEditPress={handleEditPress}
            />
            <EditPostScreen
                post={post}
                goBack={() => setEditPostVisible(false)}
                isVisible={editPostVisible}
                updatePost={handleUpdateSuccess}
            />
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: scaleSize(200),
        borderRadius: scaleSize(20),
    },
    marginY: {
        marginVertical: scaleSize(20),
    },
    smallText: {
        color: COLORS.dark_gray_2,
        textAlign: 'left',
        fontSize: scaleSize(16),
    },
    title: {
        textAlign: 'center',
        fontSize: scaleSize(22),
        fontWeight: '700',
    },
    description: {
        color: COLORS.black_2,
        fontSize: scaleSize(16),
        lineHeight: scaleSize(22),
    },
});
export default PostDetails;
