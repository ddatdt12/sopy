import {scaleSize} from '@core/utils';
import postApi from '@src/api/postApi';
import {COLORS, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import DismissKeyboardView from '@src/components/DismissKeyboardView';
import Input from '@src/components/Input';
import {ExpertStackProps} from '@src/navigation/expert/type';
import {uploadImage} from '@src/services/firebaseStorage';
import {useAppSelector} from '@src/store';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Alert, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {CameraOptions, launchImageLibrary} from 'react-native-image-picker';
import Header from '../components/Header';
import LabelCheckBox from './CheckBox';

const FEELS = ['Happy', 'Angry', 'Sad', 'Normal', 'Scared', 'Worry', 'Depression'];
type Data = {
    title: string;
    description: string;
};
const CreatePostScreen: React.FC<ExpertStackProps<'CreatePost'>> = ({navigation}) => {
    const {t} = useTranslation();
    const user = useAppSelector(state => state.auth.user);
    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<Data>({
        defaultValues: {
            title: '',
            description: '',
        },
        mode: 'onChange',
    });
    const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
    const [dirtyTag, setDirtyTag] = useState<boolean>(false);
    const [image, setImage] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const onCheckboxChange = (tag: string | undefined) => {
        setDirtyTag(true);
        setSelectedTag(prev => (prev === tag ? undefined : tag));
    };
    const onSubmit = async (data: Data) => {
        console.log({...data, selectedTag});
        const emotion = FEELS.findIndex(item => item === selectedTag) + 1;

        if (!image) {
            Alert.alert('Notice', 'Please select an image');
            return;
        }
        setLoading(true);
        const {url, error} = await uploadImage(image);
        if (error || !url) {
            Alert.alert('Notice', error);
            setLoading(false);
            return;
        }
        const post = {
            title: data.title,
            detail: data.description,
            emotion,
            picture: url,
            firebase_user_id: user?.firebase_user_id,
        };
        try {
            await postApi.createPost(post);
            Alert.alert('Notice', 'Create post successfully', [{text: 'OK', onPress: () => navigation.goBack()}]);
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
        <Box container bgColor={COLORS.gray_1} loading={loading}>
            <DismissKeyboardView>
                <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: scaleSize(20)}}>
                    <Header
                        title="Create Post"
                        submitButtonOption={{
                            onPress: handleSubmit(onSubmit),
                            disabled: !isValid || !selectedTag,
                        }}
                        goBack={() => {
                            navigation.canGoBack() && navigation.goBack();
                        }}
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
                        <View style={styles.tagWrapper}>
                            <Text style={styles.subtitle}>{t('Tag')}:</Text>
                            <View style={styles.checkboxWrapper}>
                                <View style={styles.items}>
                                    {FEELS.slice(0, 4).map(tag => (
                                        <LabelCheckBox
                                            key={tag}
                                            label={tag}
                                            disabled={false}
                                            value={selectedTag === tag}
                                            onValueChange={() => onCheckboxChange(tag)}
                                        />
                                    ))}
                                </View>

                                <View style={styles.items}>
                                    {FEELS.slice(4, 7).map(tag => (
                                        <LabelCheckBox
                                            key={tag}
                                            label={tag}
                                            disabled={false}
                                            value={selectedTag === tag}
                                            onValueChange={() => onCheckboxChange(tag)}
                                        />
                                    ))}
                                </View>
                            </View>
                        </View>
                        {dirtyTag && !selectedTag && <Text style={styles.error}>{t('Please choose tag')}</Text>}

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
    );
};

export default CreatePostScreen;

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
    tagWrapper: {
        flexDirection: 'row',
        marginTop: scaleSize(10),
    },
    checkboxWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    items: {},
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
