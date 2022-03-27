import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, RANDOM_IMAGE} from '@src/assets/const';
import {UserChatStackProps} from '@src/navigation/user/type';
import AvatarContainer from '@src/screens/profile/components/AvatarContainer';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';

type ProfileProps = {
    picture: string;
    name: string;
    email: string;
};
const Profile: React.FC<ProfileProps> = ({email, picture, name}) => {
    const {t} = useTranslation();

    return (
        <>
            <AvatarContainer name={name} picture={picture} />
            <Text style={styles.label}>{t('About')}</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Email: {email}</Text>
            </View>
        </>
    );
};

export default Profile;

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
