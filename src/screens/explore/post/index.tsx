import {scaleSize} from '@core/utils';
import {FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Neumorph from '@src/components/Neumorph';
import Stack from '@src/components/Stack';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import DetailsModal from '../DetailsModal';
import PostDetails from '../post_details';
import PostCard from './components/PostCard';
import Posts from './posts';
import {Post} from './types';
interface IProps {}

const PostsScreen = ({}: IProps) => {
    const {t} = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem: ListRenderItem<Post> = ({item}) => {
        return (
            <PostCard
                title={item.title}
                author={item.author}
                image={item.image}
                onPress={() => setModalVisible(true)}
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
            <FlatList
                data={Posts}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                contentContainerStyle={{paddingBottom: scaleSize(76)}}
            />
            <DetailsModal isVisible={modalVisible} onClose={() => setModalVisible(false)}>
                <PostDetails />
            </DetailsModal>
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
