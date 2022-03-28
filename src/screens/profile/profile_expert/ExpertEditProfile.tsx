import {scaleSize} from '@core/utils';
import userApi from '@src/api/userApi';
import {COLORS, FONTS, NON_AVATAR, STYLES} from '@src/assets/const';
import {Box, Header} from '@src/components';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Neumorph from '@src/components/Neumorph';
import {ExpertStackProps} from '@src/navigation/expert/type';
import {firebaseLogout} from '@src/services/auth';
import {uploadImage} from '@src/services/firebaseStorage';
import {useAppDispatch, useAppSelector} from '@src/store';
import {authActions} from '@src/store/authSlice';
import {User} from '@src/types';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, Text, View} from 'react-native';
import EditProfile from '../components/EditProfile';

type ProfileEditForm = {
    name: string;
    about: string;
    avatar?: string;
    uri?: string;
};
const ExpertEditProfileScreen: React.FC<ExpertStackProps<'EditProfile'>> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.auth.user);
    const [profile, setProfile] = useState<ProfileEditForm>({
        name: '',
        about: '',
    });
    const [isImageChange, setIsImageChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        setProfile({name: user!.name, avatar: user!.picture, uri: user!.picture, about: user!.bio ?? ''});
    }, [user]);

    function alertLogout() {
        Alert.alert('Notice', 'Are you sure want to log out', [
            {
                text: 'OK',
                onPress: async () => {
                    await firebaseLogout();
                    dispatch(authActions.logout());
                },
            },
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        ]);
    }

    function alertUpdateSuccess() {
        Alert.alert('Notice', 'Update profile successfully', [
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
                setProfile(prev => ({...prev, avatar: url}));

                setIsImageChange(false);
                setIsDirty(false);
                Alert.alert('', 'Update profile successfully');
            } else {
                Alert.alert('Error', error);
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
            name: profile.name,
            email: user!.email,
            firebase_user_id: user!.firebase_user_id,
            picture: url,
            bio: profile.about,
        };

        try {
            const updated = await userApi.updateProfile(newProfile as User);
            dispatch(authActions.refreshUser(updated));
        } catch (errorApi: any) {
            Alert.alert('Notice', errorApi?.message ?? 'Server Error');
        }
        setLoading(false);
        alertUpdateSuccess();
    };
    return (
        <Box container safeArea bgColor={COLORS.gray_1} loading={loading}>
            <Header
                title="Edit Profile"
                canGoBack={navigation.canGoBack()}
                goBack={() => navigation.goBack()}
                headerRight={() => (
                    <Button
                        title="Done"
                        onPress={handleSubmit}
                        disabled={!isDirty || !(profile?.uri || profile?.name)}
                        variant="secondary"
                        style={{paddingHorizontal: scaleSize(12)}}
                    />
                )}
            />
            <View
                style={{
                    paddingHorizontal: scaleSize(10),
                }}>
                <EditProfile name={profile.name} image={profile.uri ?? NON_AVATAR} onChangeData={onChangeData} />
                <View style={styles.textInputContainer}>
                    <Text style={styles.aboutLabel}>About</Text>
                    <Input defaultValue={profile.about} onChangeText={text => onChangeData('about', text)} />
                </View>
                <View style={styles.buttonWrapper}>
                    <Neumorph borderRadius={scaleSize(60)}>
                        <Button
                            title="Log out"
                            style={{paddingHorizontal: scaleSize(40)}}
                            textStyle={{color: COLORS.black_1}}
                            onPress={() => alertLogout()}
                        />
                    </Neumorph>
                </View>
            </View>
        </Box>
    );
};

export default ExpertEditProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
        paddingHorizontal: scaleSize(10),
    },
    textInputContainer: {
        marginVertical: scaleSize(6),
    },
    aboutLabel: {
        ...FONTS.subtitle2,
        fontSize: scaleSize(20),
        color: '#8F9BB2',
        marginVertical: scaleSize(6),
        marginLeft: scaleSize(4),
    },
    logoutButton: {
        width: scaleSize(168),
        height: scaleSize(40),
        borderRadius: 60,
        backgroundColor: '#EBF3FA',
        marginTop: scaleSize(48),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

        ...STYLES.deepShadow,
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleSize(30),
    },
});
