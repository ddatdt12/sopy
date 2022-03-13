import {scaleSize} from '@core/utils';
import {COLORS, FONTS, STYLES} from '@src/assets/const';
import {Box, Header} from '@src/components';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import {EditProfileScreenProps} from '@src/navigation/expert/type';
import {firebaseLogout} from '@src/services/auth';
import {useAppDispatch, useAppSelector} from '@src/store';
import {authActions} from '@src/store/authSlice';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EditProfile from '../components/EditProfile';

const ExpertEditProfileScreen: React.FC<EditProfileScreenProps> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [profile, setProfile] = useState({name: '', avatar: 'https://picsum.photos/id/237/200/300', about: ''});
    const [isDirty, setIsDirty] = useState(false);

    function alertLogout() {
        Alert.alert('Notice', 'Are you sure want to log out', [
            {
                text: 'OK',
                onPress: () => async () => {
                    await firebaseLogout();
                    dispatch(authActions.logout());
                },
            },
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        ]);
    }

    const onChangeData = (name: string, value: any) => {
        setProfile(prev => ({...prev, [name]: value}));
        setIsDirty(true);
    };
    return (
        <Box container safeArea bgColor={COLORS.gray_1}>
            <Header
                title="Edit Profile"
                canGoBack={navigation.canGoBack()}
                goBack={() => navigation.goBack()}
                headerRight={() => (
                    <Button
                        title="Done"
                        onPress={() => {
                            console.log(profile);
                        }}
                        disabled={!isDirty || !(profile?.avatar || profile?.name)}
                        variant="secondary"
                        style={{paddingHorizontal: scaleSize(12)}}
                    />
                )}
            />
            <View
                style={{
                    paddingHorizontal: scaleSize(10),
                }}>
                <EditProfile name="Tan Mot Cu" image="" onChangeData={onChangeData} />
                <View style={styles.textInputContainer}>
                    <Text style={styles.aboutLabel}>About</Text>
                    <Input onChangeText={text => onChangeData('about', text)} />
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={alertLogout}>
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
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
    logoutText: {
        ...FONTS.h2,
        fontSize: scaleSize(20),
        color: '#193566',
    },
});
