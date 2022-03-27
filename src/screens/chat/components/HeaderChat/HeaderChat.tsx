import {isIOS, scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '@src/assets';
import {COLORS, FONTS, NON_AVATAR, RANDOM_IMAGE, STYLES} from '@src/assets/const';
import {Stack} from '@src/components';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import IconButton from '@src/components/IconButton';
import BackButton from '@src/screens/chat/components/BackButton';
import ChatTitle from '@src/screens/chat/components/HeaderChat/ChatTitle';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import {CameraOptions, launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IHeaderChat {
    profile?: boolean;
    goToProfile?: () => void;
    emotion?: boolean;
    user: User;
}

const HeaderChat: React.FC<IHeaderChat> = props => {
    const {profile, emotion, user, goToProfile} = props;
    const navigation = useNavigation();
    const {t} = useTranslation();
    const [optionsViewVisible, setOptionsViewVisible] = useState(false);
    const [typeProblemModalVisible, setTypeProblemModalVisible] = useState(false);
    const [uploadPictureModalVisible, setUploadPictureModalVisible] = useState(false);
    const [sorryModalVisible, setSorryModalVisible] = useState(false);
    const [reportImage, setReportImage] = useState<string | undefined>(undefined);

    function deleteConversationAlert() {
        Alert.alert(t('Notice'), t('Are you sure you want to delete this conversation?'), [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            {text: t('Cancel'), onPress: () => console.log('Cancel Pressed')},
        ]);
    }

    function reportAlert() {
        Alert.alert(t('Notice'), t('Are you sure you want to report this person?'), [
            {text: 'OK', onPress: () => setTypeProblemModalVisible(true)},
            {text: t('Cancel'), onPress: () => setTypeProblemModalVisible(false)},
        ]);
    }

    function shareEmotionDiaryAlert() {
        Alert.alert(t('Notice'), t('Are you sure you want to allow this expert to see your Emotion Diary?'), [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            {text: t('Cancel'), onPress: () => console.log('Cancel pressed')},
        ]);
    }
    const sendReport = () => {
        setUploadPictureModalVisible(false);
        setSorryModalVisible(true);
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
                setReportImage(data?.uri);
                console.log(data);
            }
        });
    };

    return (
        <Box bgColor={COLORS.gray_1}>
            <Modal animationType="fade" transparent={true} visible={typeProblemModalVisible}>
                <View style={styles.centeredView}>
                    <KeyboardAvoidingView enabled behavior={isIOS ? 'padding' : 'height'}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => setTypeProblemModalVisible(!typeProblemModalVisible)}>
                                <Text style={{...FONTS.subtitle3}}>{t('Cancel')}</Text>
                            </TouchableOpacity>

                            <Text style={{...FONTS.body3}}>{t('Please type your problem')}</Text>

                            <TextInput style={styles.problemInput} numberOfLines={1} />

                            <Button
                                title={t('Continue')}
                                variant="secondary"
                                style={styles.continueButton}
                                onPress={() => {
                                    setTypeProblemModalVisible(false);
                                    setUploadPictureModalVisible(true);
                                }}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>

            <Modal animationType="fade" transparent={true} visible={uploadPictureModalVisible}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, {...STYLES.center}]}>
                        <Text style={styles.noticeText}>{t('Notice')}</Text>
                        <Text style={styles.uploadText}>{t('Upload the picture that describe your problem.')}</Text>
                        {reportImage && (
                            <Image
                                source={{uri: reportImage}}
                                style={{
                                    height: scaleSize(89),
                                    width: scaleSize(89),
                                    borderRadius: scaleSize(10),
                                    marginVertical: scaleSize(10),
                                }}
                            />
                        )}
                        <TouchableOpacity style={styles.addButton} onPress={openLibrary}>
                            <Ionicons name="add-outline" size={30} />
                        </TouchableOpacity>
                        <Stack
                            direction="row"
                            justifyContent="space-around"
                            style={{width: '100%', marginVertical: scaleSize(20), paddingHorizontal: scaleSize(20)}}>
                            <TouchableOpacity onPress={sendReport} style={styles.actionText}>
                                <Text style={{...FONTS.h3, fontSize: scaleSize(22)}}>{t('Send')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setUploadPictureModalVisible(false);
                                }}
                                style={styles.actionText}>
                                <Text style={{...FONTS.h3, fontSize: scaleSize(22), alignSelf: 'center'}}>
                                    {t('Cancel')}
                                </Text>
                            </TouchableOpacity>
                        </Stack>
                    </View>
                </View>
            </Modal>

            <Modal animationType="fade" transparent={true} visible={sorryModalVisible}>
                <View style={styles.centeredView}>
                    <View
                        style={{
                            width: scaleSize(278),
                            height: scaleSize(116),
                            borderRadius: scaleSize(10),
                            backgroundColor: COLORS.white_1,
                            alignItems: 'center',
                            ...STYLES.deepShadow,
                        }}>
                        <Text style={styles.sorryText}>{t('Sorry about your problem.')}</Text>

                        <TouchableOpacity
                            style={{marginTop: scaleSize(26)}}
                            onPress={() => {
                                setSorryModalVisible(false);
                                navigation.goBack();
                            }}>
                            <Text style={styles.okText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    paddingVertical: scaleSize(10),
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <BackButton />
                    <ChatTitle name={user.name} avatar={user?.picture ?? NON_AVATAR} />
                </View>
                <IconButton
                    style={styles.optionsButton}
                    onPress={() => setOptionsViewVisible(!optionsViewVisible)}
                    icon={<Ionicons name="ellipsis-horizontal" size={scaleSize(30)} color={COLORS.dark_gray_2} />}
                />
                <View
                    style={{
                        top: scaleSize(70),
                        right: scaleSize(12),
                        position: 'absolute',
                        zIndex: 10,
                    }}>
                    {optionsViewVisible ? (
                        <View style={styles.optionsView}>
                            {profile && (
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            goToProfile && goToProfile();
                                        }}>
                                        <Text style={styles.optionsText}>{t('Go to profile')}</Text>
                                    </TouchableOpacity>
                                    <Image source={IMAGES.line} style={styles.lineOption} />
                                </View>
                            )}

                            {emotion && (
                                <View>
                                    <TouchableOpacity onPress={shareEmotionDiaryAlert}>
                                        <Text style={styles.optionsText}>{t('Show Emotion Diary')}</Text>
                                    </TouchableOpacity>
                                    <Image source={IMAGES.line} style={styles.lineOption} />
                                </View>
                            )}

                            <TouchableOpacity onPress={deleteConversationAlert}>
                                <Text style={styles.optionsText}>{t('Delete conversation')}</Text>
                            </TouchableOpacity>
                            <Image source={IMAGES.line} style={styles.lineOption} />
                            <TouchableOpacity onPress={reportAlert}>
                                <Text style={styles.optionsText}>{t('Report')}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null}
                </View>
            </View>
            <Image source={IMAGES.line} style={styles.line} />
        </Box>
    );
};

export default HeaderChat;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        ...STYLES.center,
    },
    modalView: {
        width: scaleSize(318),
        minHeight: scaleSize(196),
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_1,
        paddingHorizontal: scaleSize(15),
        ...STYLES.deepShadow,
    },
    cancelButton: {
        alignSelf: 'flex-end',
        margin: scaleSize(11),
    },
    problemInput: {
        width: scaleSize(280),
        height: scaleSize(58),
        borderRadius: scaleSize(15),
        backgroundColor: COLORS.white_3,
        marginTop: scaleSize(3),
        padding: scaleSize(10),
    },
    continueButton: {
        width: scaleSize(168),
        height: scaleSize(40),
        alignSelf: 'center',
        marginTop: scaleSize(16),
    },
    noticeText: {
        ...FONTS.subtitle2,
        marginVertical: scaleSize(10),
    },
    uploadText: {
        ...FONTS.body3,
        textAlign: 'center',
        width: scaleSize(280),
    },
    addButton: {
        width: scaleSize(62),
        height: scaleSize(49),
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_3,
        ...STYLES.center,
        marginVertical: scaleSize(11),
    },
    sorryText: {
        ...FONTS.body3,
        marginTop: scaleSize(33),
    },
    okText: {
        fontSize: scaleSize(22),
        fontWeight: '600',
        color: '#0B7DDF',
    },
    optionsButton: {
        height: scaleSize(40),
        width: scaleSize(40),
        borderRadius: scaleSize(40),
        marginHorizontal: scaleSize(17),
        ...STYLES.deepShadow,
    },
    optionsView: {
        justifyContent: 'center',
        width: scaleSize(200),
        height: 'auto',
        borderRadius: scaleSize(10),
        backgroundColor: COLORS.white_3,
        paddingVertical: scaleSize(10),
        ...STYLES.deepShadow,
    },
    optionsText: {
        ...FONTS.subtitle4,
        fontSize: scaleSize(17),
        color: COLORS.dark_gray_2,
        marginHorizontal: scaleSize(10),
    },
    line: {
        alignSelf: 'center',
        zIndex: -10,
    },
    actionText: {
        textAlign: 'center',
        ...STYLES.center,
    },
    lineOption: {
        width: scaleSize(180),
        marginVertical: scaleSize(5),
        marginLeft: scaleSize(9),
    },
});
