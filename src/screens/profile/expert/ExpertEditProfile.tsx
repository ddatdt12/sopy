import {scaleSize} from '@core/utils';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import {Box, Header} from '@src/components';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Neumorph from '@src/components/Neumorph';
import {EditProfileScreenProps} from '@src/navigation/expert/type';
import {firebaseLogout} from '@src/services/auth';
import {uploadImage} from '@src/services/firebaseStorage';
import {useAppDispatch} from '@src/store';
import {authActions} from '@src/store/authSlice';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, Text, View} from 'react-native';
import EditProfile from '../components/EditProfile';

const ExpertEditProfileScreen: React.FC<EditProfileScreenProps> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [profile, setProfile] = useState({
        name: 'Đạt ĐT',
        avatar: 'https://picsum.photos/id/237/200/300',
        about: 'Mic check 1234',
        uri: 'https://picsum.photos/200',
    });
    const [isImageChange, setIsImageChange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isDirty, setIsDirty] = useState(false);

    function alertLogout() {
        Alert.alert('Notice', 'Are you sure want to log out', [
            {
                text: 'OK',
                onPress: async () => {
                    console.log('check');
                    await firebaseLogout();
                    dispatch(authActions.logout());
                },
            },
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        ]);
    }
    console.log(profile);
    const onChangeData = (name: string, value: any) => {
        if (name === 'uri' && value) {
            setIsImageChange(true);
        }
        setProfile(prev => ({...prev, [name]: value}));
        setIsDirty(true);
    };
    const handleSubmit = async () => {
        setLoading(true);
        console.log(profile);
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
        setLoading(false);
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
                <EditProfile name={profile.name} image={profile.uri} onChangeData={onChangeData} />
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
