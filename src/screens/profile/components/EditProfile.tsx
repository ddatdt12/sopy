import {scaleSize} from '../../../../core/utils';
import {COLORS, FONTS, STYLES} from '../../../assets/const';
import {IMAGES} from '../../../assets';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import {CameraOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
    TouchableOpacity,
    View,
    Image,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    Modal,
    Pressable,
    PermissionsAndroid,
} from 'react-native';
import BottomModal from './BottomModal';
import Input from '@src/components/Input';
import {ProfileData} from '../types';
import {useNavigation} from '@react-navigation/native';

type EditProfileProps = {
    name: string;
    image: string;
    onChangeData: (name: string, value: any) => void;
};

const EditProfile = (props: EditProfileProps) => {
    const {name: defaultName, image, onChangeData} = props;
    const {t} = useTranslation();
    const [profileImage, setProfileImage] = useState<string | undefined>('https://picsum.photos/200');
    const [changeAvatarModalVisible, setChangeAvatarModalVisible] = useState(false);
    const [name, setName] = useState(defaultName);
    const openCamera = async () => {
        const option: CameraOptions = {
            mediaType: 'photo',
            quality: 1,
        };
        await requestCameraPermission();
        launchCamera(option, res => {
            if (res.didCancel) {
                console.log('User Cancelled image picker');
            } else if (res.errorCode) {
                console.log(res.errorMessage);
            } else {
                const data = res && res.assets && res.assets[0];
                setProfileImage(data?.uri);
                console.log(data);
                onChangeData('avatar', data?.uri);
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
                setProfileImage(data?.uri);
                console.log(data);
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
                    {!!profileImage && <Image source={{uri: profileImage}} style={styles.profileImage} />}
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
