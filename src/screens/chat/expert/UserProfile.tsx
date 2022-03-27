import {scaleSize} from '@core/utils';
import {COLORS, FONTS, NON_AVATAR} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import {ExpertChatStackProps} from '@src/navigation/expert/type';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, View} from 'react-native';
import BackButton from '../components/BackButton';
import Profile from '../components/Profile';

const UserProfileChatScreen: React.FC<ExpertChatStackProps<'UserProfileChat'>> = ({navigation, route}) => {
    const {t} = useTranslation();
    const user = route.params.user;
    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <View style={{marginTop: scaleSize(15)}}>
                <BackButton />
            </View>

            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <Profile name={user.name} image={user.picture ?? NON_AVATAR} email={user.email} />
                <Button
                    title={t('Emotion Diary')}
                    style={{
                        marginTop: scaleSize(25),
                        width: scaleSize(180),
                        height: scaleSize(40),
                        alignSelf: 'center',
                    }}
                    textStyle={{color: COLORS.dark_blue_2}}
                    onPress={() => navigation.navigate('DashboardEmotionDiary')}
                />
            </ScrollView>
        </Box>
    );
};

export default UserProfileChatScreen;

const styles = StyleSheet.create({
    descriptionContainer: {
        width: scaleSize(358),
        height: 'auto',
        borderRadius: scaleSize(30),
        alignSelf: 'center',
        marginTop: scaleSize(11),
        backgroundColor: '#F5F9FD',
        paddingHorizontal: scaleSize(15),
        paddingVertical: scaleSize(12),
    },
    descriptionText: {
        ...FONTS.body3,
        color: COLORS.dark_blue_2,
        fontSize: scaleSize(20),
    },
    label: {
        ...FONTS.subtitle3,
        fontSize: scaleSize(20),
        color: COLORS.dark_gray_2,
        marginLeft: scaleSize(16),
        marginTop: scaleSize(28),
    },
});
