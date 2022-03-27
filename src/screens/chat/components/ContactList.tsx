import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Stack from '@src/components/Stack';
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
    onContactPress: (user: User) => void;
    contacts: User[];
    contentContainerStyle?: StyleProp<ViewStyle>;
};

const ContactList: React.FC<Props> = props => {
    const {contacts, onContactPress, contentContainerStyle} = props;

    const renderItem: ListRenderItem<User> = ({item}) => {
        return (
            <TouchableOpacity onPress={() => onContactPress(item)}>
                <Stack
                    direction="row"
                    space={scaleSize(18)}
                    style={{
                        alignItems: 'center',
                        height: scaleSize(95),
                    }}>
                    <Image source={{uri: item.picture}} style={styles.userAvatar} />
                    <Text style={styles.userName}>{item.name}</Text>
                </Stack>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={SeparateLine}
            contentContainerStyle={contentContainerStyle}
        />
    );
};
export default ContactList;

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
