import {scaleSize} from '@core/utils';
import postApi from '@src/api/postApi';
import {COLORS, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import DismissKeyboardView from '@src/components/DismissKeyboardView';
import Input from '@src/components/Input';
import {uploadImage} from '@src/services/firebaseStorage';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Alert, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {CameraOptions, launchImageLibrary} from 'react-native-image-picker';
import ReactNativeModal from 'react-native-modal';
import Header from '../components/Header';
import TagsCheckbox from './TagCheckbox';

export const FEELS = ['Happy', 'Angry', 'Sad', 'Normal', 'Scared', 'Worry', 'Depression'];
type Data = {
    title: string;
    description: string;
};
type Props = {
    post: Post;
    updatePost: (post: Post) => void;
    goBack?: () => void;
    isVisible: boolean;
};
const EditPostScreen: React.FC<Props> = ({post, goBack, isVisible, updatePost}) => {
    const {t} = useTranslation();

    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<Data>({
        defaultValues: {
            title: post.title,
            description: post.detail,
        },
        mode: 'onChange',
    });
    const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
    const [image, setImage] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const needEmotion = post.emotion > 0;
    useEffect(() => {
        if (post.emotion > 0) {
            setSelectedTag(FEELS[post.emotion - 1]);
        }
        setImage(post.picture);
    }, [post]);

    const onCheckboxChange = (tag: string | undefined) => {
        setSelectedTag(prev => (prev === tag ? undefined : tag));
    };
    const onSubmit = async (data: Data) => {
        if (!image) {
            Alert.alert('Notice', 'Please select an image');
            return;
        }
        let emotion = 0;
        if (needEmotion) {
            if (!selectedTag) {
                Alert.alert('Notice', 'Please choose a tag');
                return;
            } else {
                emotion = FEELS.indexOf(selectedTag) + 1;
            }
        }

        setLoading(true);
        let url = post.picture;
        if (post.picture !== image) {
            const res = await uploadImage(image);
            if (res.error || !res.url) {
                Alert.alert('Notice', res.error);
                setLoading(false);
                return;
            }

            url = res.url;
        }

        const updatedPost: Post = {...post, title: data.title, detail: data.description, picture: url, emotion};

        try {
            console.log(updatedPost);
            const newPost = await postApi.updatePost(updatedPost);
            updatePost(newPost);
            console.log('Update success!');
        } catch (errorApi: any) {
            Alert.alert('Notice', errorApi?.message ?? 'Server Error');
        }
        setLoading(false);
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
                setImage(data?.uri);
            }
        });
    };
    return (
        <ReactNativeModal isVisible={isVisible} style={{margin: 0}}>
            <Box container bgColor={COLORS.gray_1} loading={loading}>
                <DismissKeyboardView>
                    <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: scaleSize(20)}}>
                        <Header
                            title="Create Post"
                            submitButtonOption={{
                                onPress: handleSubmit(onSubmit),
                                disabled: !isValid,
                            }}
                            goBack={() => goBack?.()}
                        />
                        <Box container paddingHorizontal={scaleSize(10)}>
                            <View>
                                <Text style={styles.subtitle}>{t('Title')}</Text>
                            </View>
                            <View>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: `${t('Please enter title')}`,
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <Input
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            error={errors.title?.message}
                                        />
                                    )}
                                    name="title"
                                />
                            </View>

                            {needEmotion && <TagsCheckbox onChange={onCheckboxChange} value={selectedTag} />}
                            <View style={{marginTop: scaleSize(20)}}>
                                <View style={styles.textarea}>
                                    {!!image && (
                                        <View
                                            style={{
                                                alignItems: 'center',
                                            }}>
                                            <Image
                                                source={{uri: image}}
                                                style={{backgroundColor: 'red', zIndex: 1000}}
                                                width={250}
                                                height={150}
                                                resizeMode="cover"
                                            />
                                        </View>
                                    )}
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: `${t('Please enter description')}`,
                                        }}
                                        render={({field: {onChange, onBlur, value}}) => (
                                            <TextInput
                                                placeholder={t('Write something here...')}
                                                placeholderTextColor="#8F9BB2"
                                                multiline={true}
                                                numberOfLines={10}
                                                textAlignVertical="top"
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                            />
                                        )}
                                        name="description"
                                    />
                                </View>
                                {errors.description && <Text style={styles.error}>{errors.description?.message}</Text>}
                            </View>

                            {image ? (
                                <Button
                                    title="Reselect picture"
                                    onPress={() => openLibrary()}
                                    style={{marginVertical: scaleSize(20)}}
                                />
                            ) : (
                                <Button
                                    title="Add picture"
                                    variant="secondary"
                                    onPress={() => openLibrary()}
                                    style={{marginVertical: scaleSize(20)}}
                                />
                            )}
                        </Box>
                    </ScrollView>
                </DismissKeyboardView>
            </Box>
        </ReactNativeModal>
    );
};

export default EditPostScreen;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subtitle: {
        ...FONTS.h3,
        color: COLORS.dark_gray_2,
        marginVertical: scaleSize(6),
        marginRight: scaleSize(20),
        marginLeft: scaleSize(6),
    },

    textarea: {
        backgroundColor: COLORS.gray_1,
        borderWidth: 1,
        borderColor: COLORS.dark_gray_2,
        borderRadius: scaleSize(20),
        padding: scaleSize(10),
    },
    error: {
        color: COLORS.error_1,
        fontSize: scaleSize(16),
        marginTop: scaleSize(4),
        marginLeft: scaleSize(8),
    },
});
