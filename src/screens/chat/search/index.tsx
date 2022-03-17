import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, SIZES} from '@src/assets/const';
import Box from '@src/components/Box';
import Input from '@src/components/Input';
import Stack from '@src/components/Stack';
import {ExpertChatStackProps} from '@src/navigation/expert/type';
import {UserStackProps} from '@src/navigation/user/type';
import {useAppSelector} from '@src/store';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactData from '../components/contact';
import ContactList from '../components/ContactList';
import {Contact} from '../components/types';

const ChatSearchScreen: React.FC = () => {
    const {t} = useTranslation();
    const {role} = useAppSelector(state => state.auth.user);
    const userNavigation = useNavigation<UserStackProps<'ChatStack'>['navigation']>();
    const expertNavigation = useNavigation<ExpertChatStackProps<'ExpertSearchChat'>['navigation']>();
    const renderItem: ListRenderItem<Contact> = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (role === 'expert') {
                        expertNavigation.navigate('WithUserChat', {user: item});
                    } else {
                        userNavigation.navigate('ChatStack', {
                            screen: 'MainChat',
                            params: {user: item},
                        });
                    }
                }}>
                <Stack
                    direction="row"
                    space={scaleSize(18)}
                    style={{
                        alignItems: 'center',
                        height: scaleSize(95),
                    }}>
                    <Image source={{uri: item.avatar}} style={styles.userAvatar} />
                    <Text style={styles.userName}>{item.name}</Text>
                </Stack>
            </TouchableOpacity>
        );
    };
    return (
        <Box container bgColor={COLORS.gray_1} safeArea>
            <Stack
                direction="row"
                space={scaleSize(10)}
                style={{
                    marginVertical: scaleSize(15),
                    paddingHorizontal: scaleSize(15),
                }}>
                <View style={{flex: 1}}>
                    <Input
                        inputStyle={{height: scaleSize(48)}}
                        icon={<Ionicons name="search" size={scaleSize(20)} color={COLORS.dark_gray_2} />}
                        iconPosition="start"
                        placeholder={t('Search')}
                        textInputStyle={FONTS.body3}
                    />
                </View>
                <Text
                    style={[styles.text, styles.bold]}
                    onPress={() => {
                        expertNavigation.goBack();
                    }}>
                    {t('Cancel')}
                </Text>
            </Stack>
            <ContactList
                contacts={ContactData.filter(c => c.role !== 'expert')}
                onContactPress={user => {
                    if (role === 'expert') {
                        expertNavigation.navigate('WithUserChat', {user});
                    } else {
                        userNavigation.navigate('ChatStack', {
                            screen: 'MainChat',
                            params: {user},
                        });
                    }
                }}
                contentContainerStyle={{paddingHorizontal: scaleSize(15), paddingBottom: SIZES.bottomPadding}}
            />
        </Box>
    );
};

export default ChatSearchScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: scaleSize(18),
        alignSelf: 'center',
    },
    bold: {
        color: COLORS.black_2,
        fontWeight: '700',
    },
    userAvatar: {
        height: scaleSize(74),
        width: scaleSize(74),
        borderRadius: scaleSize(44.5),
        alignSelf: 'center',
    },
    userName: {
        ...FONTS.subtitle2,
        fontSize: scaleSize(22),
        marginBottom: scaleSize(3),
    },
});
