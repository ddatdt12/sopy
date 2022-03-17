import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {
    FlatList,
    Image,
    ListRenderItem,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import SeparateLine from './SeparateLine';
import {Contact} from './types';

type Props = {
    onItemPress: (user: Contact) => void;
    items: Contact[];
    contentContainerStyle?: StyleProp<ViewStyle>;
};

const ConversationList: React.FC<Props> = props => {
    const {items, onItemPress, contentContainerStyle} = props;
    console.log('conver');
    const renderItem: ListRenderItem<Contact> = ({item}) => {
        return (
            <TouchableOpacity onPress={() => onItemPress(item)}>
                <View style={styles.userDataContainer}>
                    <Image source={{uri: item.avatar}} style={styles.userAvatar} />
                    <View style={styles.userDetailsContainer}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.lastMessage}>
                            {item.lastmessage}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={SeparateLine}
            contentContainerStyle={contentContainerStyle}
        />
    );
};
export default ConversationList;

const styles = StyleSheet.create({
    userDataContainer: {
        flexDirection: 'row',
        height: scaleSize(95),
    },
    userAvatar: {
        height: scaleSize(74),
        width: scaleSize(74),
        borderRadius: scaleSize(44.5),
        alignSelf: 'center',
    },
    userDetailsContainer: {
        margin: scaleSize(15),
        flexDirection: 'column',
        width: '70%',
    },
    userName: {
        fontSize: scaleSize(22),
        fontWeight: '500',
        color: COLORS.black_1,
        marginBottom: scaleSize(3),
    },
    lastMessage: {
        fontSize: scaleSize(17),
        color: COLORS.gray_2,
    },
});
