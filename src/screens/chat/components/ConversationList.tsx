import {scaleSize} from '@core/utils';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import chatApi from '@src/api/chatApi';
import {COLORS} from '@src/assets/const';
import Loading from '@src/components/Loading';
import {useChat} from '@src/context/ChatContext';
import {useAppSelector} from '@src/store';
import {selectUser} from '@src/store/selector/auth';
import React, {useCallback, useEffect, useState} from 'react';
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

type Props = {
    contentContainerStyle?: StyleProp<ViewStyle>;
    onItemPress: (user: User) => void;
};
type Message = {
    Content: string;
    CreatedAt: Date;
    Sender: string;
};

type Conversation = {
    id: string;
    friend: User;
    lastMessage: Message;
};
const ConversationList: React.FC<Props> = props => {
    const {contentContainerStyle, onItemPress} = props;
    const user = useAppSelector(selectUser);
    const {ws} = useChat();
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<any>();
    useFocusEffect(
        useCallback(() => {
            let mounted = true;
            if (user) {
                setLoading(true);
                chatApi
                    .getUserConversations(user.firebase_user_id)
                    .then(data => {
                        const conversationsData: Conversation[] =
                            data?.map((d: any) => ({
                                id: d.ChatID,
                                friend: {...d.Friend},
                                lastMessage: d.LastMessage,
                            })) ?? [];
                        console.log('List conversations: ', conversationsData);
                        if (mounted) {
                            setConversations(conversationsData);
                            setLoading(false);
                        }
                    })
                    .catch(e => {
                        console.log('Error in ConversationList:', e);
                    });
            }

            return () => {
                mounted = false;
            };
        }, [user]),
    );

    useEffect(() => {
        let mounted = true;
        console.log('Conversation list: ', conversations);
        ws.onmessage = e => {
            const message = JSON.parse(e.data);
            if (message && user) {
                chatApi
                    .getUserConversations(user.firebase_user_id)
                    .then(data => {
                        const conversationsData: Conversation[] =
                            data?.map((d: any) => ({
                                id: d.ChatID,
                                friend: {...d.Friend},
                                lastMessage: d.LastMessage,
                            })) ?? [];
                        console.log('List conversations: ', conversationsData);
                        if (mounted) {
                            setConversations(conversationsData);
                            setLoading(false);
                        }
                    })
                    .catch((error: any) => {
                        console.log('Error in ConversationList:', error);
                    });
            }
        };

        return () => {
            mounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderItem: ListRenderItem<Conversation> = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    onItemPress(item.friend);
                }}>
                <View style={styles.userDataContainer}>
                    <Image source={{uri: item.friend.picture}} style={styles.userAvatar} />
                    <View style={styles.userDetailsContainer}>
                        <Text style={styles.userName}>{item.friend.name}</Text>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.lastMessage}>
                            {item.lastMessage.Content}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return loading ? (
        <Loading />
    ) : (
        <FlatList
            data={conversations}
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
