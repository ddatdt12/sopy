import {scaleSize} from '@core/utils';
import chatApi from '@src/api/chatApi';
import {COLORS, RANDOM_IMAGE, STYLES} from '@src/assets/const';
import {useChat} from '@src/context/ChatContext';
import SplashScreen from '@src/screens/splash';
import {useAppSelector} from '@src/store';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Bubble, GiftedChat, IMessage, InputToolbar, Send} from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';

type MessagesProps = {
    friend: User;
};
const Messages: React.FC<MessagesProps> = ({friend}) => {
    const user = useAppSelector(state => state.auth.user);
    const {ws} = useChat();
    const [messageList, setMessageList] = useState<IMessage[]>([]);
    const [loading, setLoading] = useState(false);
    console.log('Friend: ', friend);
    useEffect(() => {
        let mounted = true;
        setMessageList([]);
        setLoading(true);
        chatApi
            .getMessages(user!.firebase_user_id, friend.firebase_user_id)
            .then(({data}) => {
                if (mounted) {
                    console.log(data);
                    if (!data?.Message) {
                        setMessageList([]);
                        setLoading(false);

                        return;
                    }
                    console.log(
                        'Data: ',
                        data.Message.map((m: any) => m.Sender),
                    );
                    const messages: IMessage[] = data?.Message.map((item: any) => ({
                        _id: item.ID,
                        text: item.Content,
                        createdAt: item.CreatedAt,
                        user: {
                            _id: item.SenderID,
                            name: item.Sender.name ?? 'Dat DT',
                            avatar: item.Sender.picture || RANDOM_IMAGE,
                        },
                        sent: true,
                    }));
                    messages.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
                    setMessageList(previousMessages => GiftedChat.append(previousMessages, messages));
                    setLoading(false);
                }
            })
            .catch(e => {
                console.log('error message:', e);
            });
        return () => {
            mounted = false;
        };
    }, [user, friend.firebase_user_id]);

    useEffect(() => {
        let isMounted = true;
        ws.onopen = () => {
            console.log('Connected to the server');
        };
        ws.onclose = e => {
            console.log('Disconnected. Check internet or server.');
        };
        ws.onerror = e => {
            console.log(e.message);
        };
        ws.onmessage = e => {
            console.log('Not parse: ', e);
            const message = JSON.parse(e.data);
            console.log('Parsed: ', message);
            const formatMessage: IMessage = {
                _id: message.ID,
                text: message.Content,
                createdAt: message.CreatedAt ?? new Date(),
                user: {_id: message.SenderID, name: message.Sender.Name, avatar: message.Sender.Picture},
                sent: true,
            };

            if (isMounted) {
                if (formatMessage.user._id !== user?.firebase_user_id) {
                    setMessageList(previousMessages => GiftedChat.append(previousMessages, [formatMessage]));
                } else {
                    setMessageList(previousMessages => {
                        const prevCopy = [...previousMessages];
                        const index = previousMessages.findIndex(m => !m.sent);
                        prevCopy[index] = formatMessage;
                        if (index === -1) {
                            return previousMessages;
                        }
                        return prevCopy;
                    });
                }
            }
        };

        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitMessage = (messages: IMessage[]) => {
        const message = messages[0];
        message.sent = false;
        setMessageList(previousMessages => GiftedChat.append(previousMessages, [message]));
        const messageObjString = JSON.stringify({Content: message.text, ReceiverID: friend.firebase_user_id});
        console.log(messageObjString);
        ws.send(messageObjString);
    };

    if (!user) {
        return <SplashScreen />;
    }

    const renderSend = (props: any) => {
        return (
            <Send {...props} containerStyle={{width: scaleSize(40), height: scaleSize(40)}}>
                <View>
                    <Ionicons name="play" style={{marginBottom: scaleSize(8)}} size={scaleSize(25)} color="#8F9BB2" />
                </View>
            </Send>
        );
    };

    const renderBubble = (propsBubble: any) => {
        return (
            <Bubble
                {...propsBubble}
                wrapperStyle={{
                    right: {
                        backgroundColor: COLORS.light_blue_2,
                        ...STYLES.deepShadow,
                        marginBottom: scaleSize(20),
                    },
                    left: {
                        backgroundColor: COLORS.white_3,
                        ...STYLES.deepShadow,
                    },
                }}
                textStyle={{
                    right: styles.text,
                    left: styles.text,
                }}
                timeTextStyle={{
                    right: styles.timeText,
                    left: styles.timeText,
                }}
                renderTicks={(currentMessage: IMessage) =>
                    currentMessage.sent ? null : (
                        <ActivityIndicator
                            style={{marginRight: scaleSize(8), marginBottom: scaleSize(6)}}
                            size={20}
                            color="#8F9BB2"
                        />
                    )
                }
            />
        );
    };

    const scrollToBottomComponent = () => {
        return <Ionicons name="chevron-down-outline" size={22} color="#8F9BB2" />;
    };

    const renderInputToolbar = (toolBarProps: InputToolbar['props']) => {
        return <InputToolbar {...toolBarProps} containerStyle={styles.toolbar} />;
    };

    return (
        <GiftedChat
            user={{_id: user.firebase_user_id, name: user.name, avatar: user.picture ?? RANDOM_IMAGE}}
            messages={messageList}
            onSend={message => submitMessage(message)}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
            renderInputToolbar={renderInputToolbar}
            loadEarlier={loading}
            isLoadingEarlier={true}
        />
    );
};

export default Messages;

const styles = StyleSheet.create({
    toolbar: {
        width: scaleSize(252),
        backgroundColor: COLORS.gray_1,
        borderWidth: 1,
        borderRadius: scaleSize(20),
        borderColor: COLORS.dark_gray_2,
        bottom: scaleSize(10),
        marginLeft: scaleSize(60),
    },
    text: {
        color: COLORS.black_1,
        fontSize: scaleSize(20),
    },
    timeText: {color: COLORS.gray_4, fontSize: scaleSize(12)},
});
