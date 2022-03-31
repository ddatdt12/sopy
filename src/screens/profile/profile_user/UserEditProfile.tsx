import {scaleSize} from '@core/utils';
import userApi from '@src/api/userApi';
import {COLORS, FONTS, NON_AVATAR} from '@src/assets/const';
import {Box, Button, Header} from '@src/components';
import Neumorph from '@src/components/Neumorph';
import {UserProfileStackProps} from '@src/navigation/user/type';
import {firebaseLogout} from '@src/services/auth';
import {uploadImage} from '@src/services/firebaseStorage';
import {useAppDispatch, useAppSelector} from '@src/store';
import {authActions} from '@src/store/authSlice';
import {User} from '@src/types';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, View} from 'react-native';
import EditProfile from '../components/EditProfile';

type ProfileEditForm = {
    name: string;
    avatar?: string;
    uri?: string;
};
const UserEditProfileScreen: React.FC<UserProfileStackProps<'EditProfile'>> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);
    const [profile, setProfile] = useState<ProfileEditForm>({
        name: '',
    });
    const [isDirty, setIsDirty] = useState(false);
    const [isImageChange, setIsImageChange] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setProfile({name: user!.name, avatar: user!.picture, uri: user!.picture});
    }, [user]);

    function alertLogout() {
        Alert.alert(t('Notice'), t('Are you sure you want to log out'), [
            {
                text: 'OK',
                onPress: async () => {
                    await firebaseLogout();
                    dispatch(authActions.logout());
                },
            },
            {text: t('Cancel'), onPress: () => console.log('Cancel Pressed')},
        ]);
    }

    function alertUpdateSuccess() {
        Alert.alert(t('Notice'), t('Update profile successfully'), [
            {
                text: 'OK',
                onPress: async () => {
                    navigation.goBack();
                },
            },
        ]);
    }

    const onChangeData = (name: string, value: any) => {
        if (name === 'uri' && value) {
            setIsImageChange(true);
        }
        setProfile(prev => ({...prev, [name]: value}));
        setIsDirty(true);
    };

    const handleSubmit = async () => {
        setLoading(true);
        if (isImageChange && profile.uri) {
            const {url, error} = await uploadImage(profile.uri);
            if (!error && url) {
                setProfile(prev => ({...prev, avatar: url, uri: url}));

                setIsImageChange(false);
                setIsDirty(false);
                Alert.alert('', t('Update profile successfully'));
            } else {
                Alert.alert(t('Error'), error);
            }
        }

        let url = user?.picture;
        if (profile.uri && profile.uri !== profile.avatar) {
            const res = await uploadImage(profile.uri);
            if (res.error || !res.url) {
                Alert.alert('Notice', res.error);
                setLoading(false);
                return;
            }
            url = res.url;
        }

        const newProfile = {
            id: user!.id,
            name: profile.name,
            firebase_user_id: user!.firebase_user_id,
            picture: url,
            bio: user!.bio,
        };

        try {
            const updated = await userApi.updateProfile(newProfile as User);
            dispatch(authActions.refreshUser(updated));
        } catch (errorApi: any) {
            Alert.alert(t('Notice'), errorApi?.message ?? t('Server Error'));
        }
        setLoading(false);
        alertUpdateSuccess();
    };
    return (
        <Box container bgColor={COLORS.gray_1} safeArea loading={loading}>
            <Header
                title={t('Edit Profile')}
                canGoBack={navigation.canGoBack()}
                goBack={() => navigation.goBack()}
                headerRight={() => (
                    <Button
                        title={t('Done')}
                        loading={loading}
                        onPress={handleSubmit}
                        disabled={!isDirty || !(profile?.uri || profile?.name)}
                        variant="secondary"
                        style={{paddingHorizontal: scaleSize(12)}}
                    />
                )}
            />

            <EditProfile name={profile.name} image={profile!.uri ?? NON_AVATAR} onChangeData={onChangeData} />
            <View style={styles.buttonWrapper}>
                <Neumorph borderRadius={scaleSize(60)}>
                    <Button
                        title={t('Log out')}
                        style={{paddingHorizontal: scaleSize(40)}}
                        textStyle={{color: COLORS.black_1}}
                        onPress={() => alertLogout()}
                    />
                </Neumorph>
            </View>
        </Box>
    );
};

export default UserEditProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
    },
    aboutLabel: {
        ...FONTS.subtitle2,
        fontSize: scaleSize(20),
        color: '#8F9BB2',
        marginTop: scaleSize(22),
        marginLeft: scaleSize(15),
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleSize(30),
    },
});
