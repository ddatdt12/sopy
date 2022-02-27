import {scaleSize} from '@core/utils';
import React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import EventCard from './components/EventCard';
import Events from './events';
import {Event} from './types';

type Props = {};

const EventScreen = (props: Props) => {
    const renderItem: ListRenderItem<Event> = ({item}) => {
        return <EventCard event={item} />;
    };
    return (
        <FlatList
            data={Events}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={{marginTop: scaleSize(40)}}
        />
    );
};

export default EventScreen;

const styles = StyleSheet.create({});
