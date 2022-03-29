import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import {Post} from '@src/types';
import dayjs from 'dayjs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import DetailsModal from './DetailsModal';
import PostDetailsHeader from './PostDetailsHeader';

type Props = {
    post: Post;
    onClose: () => void;
};

const PostDetails: React.FC<Props> = ({post, onClose}) => {
    const {t} = useTranslation();
    const formatDate = dayjs(post.created_at! * 1000).format('dddd DD MMM YYYY, HH:mm');

    return (
        <DetailsModal isVisible={!!post} onClose={onClose}>
            <PostDetailsHeader closeModal={onClose} />
            <Box container>
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: scaleSize(20),
                        paddingBottom: scaleSize(40),
                    }}>
                    <Text style={styles.smallText}>Thứ 6, 21/1/2022, 22:41 {formatDate}</Text>
                    <View style={styles.marginY}>
                        <Text style={styles.title}>{post?.title}</Text>
                    </View>
                    <Image source={{uri: post.picture}} style={styles.image} />
                    <View style={styles.marginY}>
                        <Text style={styles.description}>
                            {post?.detail}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem veritatis tempora totam
                            qui eius quas magni vero sunt sed. Corrupti, unde omnis excepturi in qui labore
                            exercitationem necessitatibus error.
                        </Text>
                    </View>
                    <Box marginTop={scaleSize(20)}>
                        <Text>{post?.expert.name}</Text>
                    </Box>
                </ScrollView>
            </Box>
        </DetailsModal>
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
