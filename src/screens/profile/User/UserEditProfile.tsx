import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import {Box, Button, Header} from '@src/components';
import Neumorph from '@src/components/Neumorph';
import {EditProfileProps} from '@src/navigation/user/type';
import {firebaseLogout} from '@src/services/auth';
import {uploadImage} from '@src/services/firebaseStorage';
import {useAppDispatch} from '@src/store';
import {authActions} from '@src/store/authSlice';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, View} from 'react-native';
import EditProfile from '../components/EditProfile';

const UserEditProfileScreen: React.FC<EditProfileProps> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [profile, setProfile] = useState({
        name: 'Đạt ĐT',
        avatar: 'https://picsum.photos/id/237/200/300',
        uri: 'https://picsum.photos/id/237/200/300',
    });

    const [isDirty, setIsDirty] = useState(false);
    const [isImageChange, setIsImageChange] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const onChangeData = (name: string, value: any) => {
        if (name === 'uri' && value) {
            setIsImageChange(true);
        }
        setProfile(prev => ({...prev, [name]: value}));
        setIsDirty(true);
    };
    console.log(profile);

    const handleSubmit = async () => {
        setLoading(true);
        console.log(profile);
        if (isImageChange && profile.uri) {
            const {url, error} = await uploadImage(profile.uri);
            if (!error && url) {
                setProfile(prev => ({...prev, avatar: url, uri: url}));

                setIsImageChange(false);
                setIsDirty(false);
                Alert.alert('', 'Update profile success');
            } else {
                Alert.alert('Error', error);
            }
        }
        setLoading(false);
    };
    return (
        <Box container bgColor={COLORS.gray_1} safeArea loading={loading}>
            <Header
                title="Edit Profile"
                canGoBack={navigation.canGoBack()}
                goBack={() => navigation.goBack()}
                headerRight={() => (
                    <Button
                        title="Done"
                        loading={loading}
                        onPress={handleSubmit}
                        disabled={!isDirty || !(profile?.uri || profile?.name)}
                        variant="secondary"
                        style={{paddingHorizontal: scaleSize(12)}}
                    />
                )}
            />
            <EditProfile name={profile.name} image={profile.uri} onChangeData={onChangeData} />
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
