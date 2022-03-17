import {scaleSize} from '@core/utils';
import {SIZES} from '@src/assets/const';
import React, {useState} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import DetailsModal from '../DetailsModal';
import PostDetails from '../post_details';
import EventCard from './components/EventCard';
import Events from './events';
import {Event} from './types';

type Props = {};

const EventScreen = (props: Props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem: ListRenderItem<Event> = ({item}) => {
        return <EventCard event={item} onPress={() => setModalVisible(true)} />;
    };
    return (
        <View>
            <FlatList
                data={Events}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{marginTop: scaleSize(40)}}
                contentContainerStyle={{paddingBottom: SIZES.bottomBarHeight + scaleSize(50)}}
            />
            <DetailsModal isVisible={modalVisible} onClose={() => setModalVisible(false)}>
                <PostDetails />
            </DetailsModal>
        </View>
    );
};

export default EventScreen;

const styles = StyleSheet.create({});
