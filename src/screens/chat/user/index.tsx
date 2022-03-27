import {scaleSize} from '@core/utils';
import userApi from '@src/api/userApi';
import {COLORS, FONTS, SIZES, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import {UserMainTabProps} from '@src/navigation/user/type';
import ConversationList from '@src/screens/chat/components/ConversationList';
import SearchBar from '@src/screens/chat/components/SearchBar';
import {useAppSelector} from '@src/store';
import {selectUser} from '@src/store/selector/auth';
import {getRandomUser} from '@src/utils/User';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';

const UserChatHomeScreen: React.FC<UserMainTabProps<'Chat'>> = ({navigation}) => {
    const {t} = useTranslation();
    const [users, setUsers] = useState<User[]>([]);
    const user = useAppSelector(selectUser) as User;
    useEffect(() => {
        let mounted = true;
        userApi
            .getAllUsers()
            .then(data => {
                if (mounted) {
                    setUsers(data);
                }
            })
            .catch(e => {});

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true} paddingTop={scaleSize(12)}>
            <Box paddingHorizontal={scaleSize(14)}>
                <Text style={styles.label}>{t('New Contact')}</Text>
                <View style={STYLES.center}>
                    <Button
                        title={t('With stranger')}
                        style={styles.button}
                        onPress={() =>
                            navigation.push('ChatStack', {
                                screen: 'MainChat',
                                params: {user: getRandomUser(users, user), withStranger: true},
                            })
                        }
                        textStyle={{fontWeight: '600'}}
                    />

                    <Button
                        title={t('With expert')}
                        style={styles.button}
                        onPress={() => navigation.navigate('ChatStack', {screen: 'ChooseExpert'})}
                        textStyle={{fontWeight: '600'}}
                    />
                </View>
                <Text style={styles.label}>{t('Messages')}</Text>

                <SearchBar
                    onInputPress={() =>
                        navigation.navigate('ChatStack', {
                            screen: 'ChatSearch',
                        })
                    }
                />
            </Box>

            <ConversationList
                contentContainerStyle={{paddingBottom: SIZES.bottomPadding, paddingHorizontal: scaleSize(14)}}
                onItemPress={item => {
                    navigation.navigate('ChatStack', {
                        screen: 'MainChat',
                        params: {user: item},
                    });
                }}
            />
        </Box>
    );
};

export default UserChatHomeScreen;

const styles = StyleSheet.create({
    label: {
        ...FONTS.subtitle2,
        color: COLORS.black_1,
        marginVertical: scaleSize(8),
    },
    button: {
        width: scaleSize(210),
        height: scaleSize(44),
        marginVertical: scaleSize(8),
    },
});
