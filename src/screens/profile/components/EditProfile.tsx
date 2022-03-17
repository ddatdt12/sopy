import Input from '@src/components/Input';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, Image, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CameraOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {scaleSize, IsAndroid} from '@core/utils';
import {FONTS, STYLES} from '@src/assets/const';
import BottomModal from './BottomModal';

type EditProfileProps = {
    name: string;
    image: string;
    onChangeData: (name: string, value: any) => void;
};

const EditProfile = (props: EditProfileProps) => {
    const {name, image, onChangeData} = props;
    const {t} = useTranslation();
    const [changeAvatarModalVisible, setChangeAvatarModalVisible] = useState(false);
    const openCamera = async () => {
        const option: CameraOptions = {
            mediaType: 'photo',
            quality: 1,
        };
        if (IsAndroid) {
            await requestCameraPermission();
        }
        launchCamera(option, res => {
            console.log(res);
            if (res.didCancel) {
                console.log('User Cancelled image picker');
            } else if (res.errorCode) {
                console.log(res.errorMessage);
            } else {
                const data = res && res.assets && res.assets[0];
                onChangeData('uri', data?.uri);
                setChangeAvatarModalVisible(false);
            }
        });
    };

    const openLibrary = () => {
        const option: CameraOptions = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(option, res => {
            if (res.didCancel) {
                console.log('User Cancelled image picker');
            } else if (res.errorCode) {
                console.log(res.errorMessage);
            } else {
                const data = res && res.assets && res.assets[0];
                setChangeAvatarModalVisible(false);
                onChangeData('avatar', data?.uri);
            }
        });
    };

    function alertBack() {
        Alert.alert('Notice', 'If you cancel now, your changes will be discarded.', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        ]);
    }
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
                title: 'App Camera Permission',
                message: 'App needs access to your camera ',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Camera permission given');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    return (
        <View>
            <View style={{marginTop: scaleSize(28), alignItems: 'center'}}>
                <View style={styles.avatarShadow}>
                    {!!image && <Image source={{uri: image}} style={styles.profileImage} />}
                </View>

                <TouchableOpacity style={styles.changeAvatarButton} onPress={() => setChangeAvatarModalVisible(true)}>
                    <Text style={styles.changeAvatarText}>{t('CHANGE AVATAR')}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.nameLabel}>{t('Name')}</Text>
                <Input
                    defaultValue={name}
                    onChangeText={text => {
                        onChangeData('name', text);
                        console.log(text);
                    }}
                    style={styles.input}
                />
            </View>

            <BottomModal
                visible={changeAvatarModalVisible}
                onCancel={() => setChangeAvatarModalVisible(false)}
                onOpenCameraPress={() => openCamera()}
                onOpenLibraryPress={() => openLibrary()}
            />
        </View>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    changeAvatarButton: {
        borderRadius: 60,
        backgroundColor: '#E9F0F7',
        height: scaleSize(40),
        width: scaleSize(174),
        marginTop: scaleSize(15),
        alignItems: 'center',
        justifyContent: 'center',

        ...STYLES.deepShadow,
    },
    nameLabel: {
        ...FONTS.subtitle2,
        fontSize: scaleSize(20),
        color: '#8F9BB2',
        marginVertical: scaleSize(6),
        marginLeft: scaleSize(15),
    },
    changeAvatarText: {
        ...FONTS.h1,
        fontSize: scaleSize(18),
        color: '#193566',
    },
    profileImage: {
        height: scaleSize(89),
        width: scaleSize(89),
        borderRadius: scaleSize(89 / 2),
    },
    input: {
        width: scaleSize(358),
        alignSelf: 'center',
        marginTop: scaleSize(9),
    },
    avatarShadow: {
        height: scaleSize(89),
        width: scaleSize(89),
        borderRadius: scaleSize(89 / 2),
        marginTop: scaleSize(13),
        alignSelf: 'center',
        backgroundColor: '#E9F0F7',
        ...STYLES.deepShadow,
    },
});
