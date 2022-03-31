import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import userApi from '@src/api/userApi';
import {COLORS, FONTS, SIZES} from '@src/assets/const';
import Box from '@src/components/Box';
import Input from '@src/components/Input';
import Stack from '@src/components/Stack';
import {ExpertChatStackProps} from '@src/navigation/expert/type';
import {UserStackProps} from '@src/navigation/user/type';
import {useAppSelector} from '@src/store';
import {User} from '@src/types';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactData from '../components/contact';
import ContactList from '../components/ContactList';
import {Contact} from '../components/types';

const ChatSearchScreen: React.FC = () => {
    const {t} = useTranslation();
    const user = useAppSelector(state => state.auth.user);
    const userNavigation = useNavigation<UserStackProps<'ChatStack'>['navigation']>();
    const expertNavigation = useNavigation<ExpertChatStackProps<'ExpertSearchChat'>['navigation']>();
    const [contacts, setContacs] = useState<User[]>([]);

    useEffect(() => {
        let mounted = true;
        userApi
            .getAllUsers()
            .then(data => {
                if (!Array.isArray(data)) {
                    return;
                }
                const contactList = data.filter(d => !d.is_expert && d.firebase_user_id !== user?.firebase_user_id);
                if (mounted) {
                    setContacs(contactList);
                }
            })
            .catch(e => {
                console.log('Error: ', e);
            });

        return () => {
            mounted = false;
        };
    }, [user?.firebase_user_id]);
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
                contacts={contacts}
                onContactPress={contact => {
                    if (contact.is_expert) {
                        expertNavigation.navigate('WithUserChat', {user: contact});
                    } else {
                        userNavigation.navigate('ChatStack', {
                            screen: 'MainChat',
                            params: {user: contact},
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
