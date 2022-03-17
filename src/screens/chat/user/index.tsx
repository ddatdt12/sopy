import {scaleSize} from '@core/utils';
import {COLORS, FONTS, SIZES, STYLES} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import {UserMainTabProps} from '@src/navigation/user/type';
import ConversationList from '@src/screens/chat/components/ConversationList';
import SearchBar from '@src/screens/chat/components/SearchBar';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import ContactData from '../components/contact';

const UserChatHomeScreen: React.FC<UserMainTabProps<'Chat'>> = ({navigation}) => {
    const {t} = useTranslation();
    return (
        <Box
            bgColor={COLORS.gray_1}
            container
            safeArea={true}
            paddingHorizontal={scaleSize(14)}
            paddingTop={scaleSize(12)}>
            <Text style={styles.label}>{t('New Contact')}</Text>
            <View style={STYLES.center}>
                <Button
                    title={t('With stranger')}
                    style={styles.button}
                    onPress={() =>
                        navigation.push('ChatStack', {
                            screen: 'MainChat',
                            params: {user: ContactData[Math.floor(Math.random() * 5)], withStranger: true},
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

            <ConversationList
                items={ContactData}
                onItemPress={user => {
                    console.log(user);
                    navigation.navigate('ChatStack', {
                        screen: 'MainChat',
                        params: {user},
                    });
                }}
                contentContainerStyle={{paddingBottom: SIZES.bottomPadding}}
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
