import {scaleSize} from '@core/utils';
import {COLORS, STYLES} from '@src/assets/const';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';

type IMessage = {
    _id: string | number;
    text: string;
    createdAt: Date | number;
    user?: User;
};
type User = {
    _id: string;
    name: string;
    avatar: string;
};
const Messages: React.FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        setMessages([
            {
                _id: 'd9vnw4n3-02xo-471f-tjlk-30823xnaowm4',
                text: 'Đi mình đi má ai gảnk',
                createdAt: new Date(),
                user: {
                    _id: '58694a0f-3da1-471f-bd96-145571e29d72',
                    name: 'Kary',
                    avatar: 'https://placeimg.com/640/480/animals',
                },
            },
            {
                _id: '58694a0f-3da1-471f-bd96-145571e29d72',
                text: 'Chao em, \nNgay mai di cafe nhe!',
                createdAt: new Date(),
                user: {
                    _id: 'd9vnw4n3-02xo-471f-tjlk-30823xnaowm4',
                    name: 'Roy',
                    avatar: 'https://placeimg.com/640/480/animals',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((message = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, message));
    }, []);

    const renderSend = (props: any) => {
        return (
            <Send {...props} containerStyle={{width: 40, height: 40}}>
                <View>
                    <Ionicons name="play" style={{marginBottom: 8}} size={25} color="#8F9BB2" />
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
                        marginBottom: scaleSize(10),
                    },
                    left: {
                        backgroundColor: COLORS.white_3,
                        ...STYLES.deepShadow,
                    },
                }}
                textStyle={{
                    right: {
                        color: COLORS.black_1,
                    },
                    left: {
                        color: COLORS.black_1,
                    },
                }}
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
            messages={messages}
            onSend={message => onSend(message)}
            user={{
                _id: '58694a0f-3da1-471f-bd96-145571e29d72',
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
            renderInputToolbar={renderInputToolbar}
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
});
