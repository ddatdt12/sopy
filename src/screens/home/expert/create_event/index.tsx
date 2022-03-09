import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import DismissKeyboardView from '@src/components/DismissKeyboardView';
import Input from '@src/components/Input';
import {CreateEventScreenProps} from '@src/navigation/expert/type';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
const FEELS = ['Happy', 'Angry', 'Sad', 'Normal', 'Scared', 'Worry', 'Depression'];
type Data = {
    title: string;
    description: string;
};
const CreateEventScreen: React.FC<CreateEventScreenProps> = ({navigation}) => {
    const {t} = useTranslation();

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
    const [image, setImage] = useState<string | undefined>(undefined);

    const onSubmit = (data: Data) => {
        console.log(data);
    };

    return (
        <Box container bgColor={COLORS.gray_1}>
            <DismissKeyboardView>
                <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: scaleSize(20)}}>
                    <Header
                        title="Create Post"
                        submitButtonOption={{
                            onPress: handleSubmit(onSubmit),
                            disabled: !isValid || !image,
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
                        <View style={{marginTop: scaleSize(20)}}>
                            <View style={styles.textarea}>
                                {!!image && (
                                    <View
                                        style={{backgroundColor: 'red', width: 100, height: 100, alignSelf: 'center'}}
                                    />
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
                                onPress={() => setImage(undefined)}
                                style={{marginVertical: scaleSize(20)}}
                            />
                        ) : (
                            <Button
                                title="Add picture"
                                variant="secondary"
                                onPress={() => setImage('something')}
                                style={{marginVertical: scaleSize(20)}}
                            />
                        )}
                    </Box>
                </ScrollView>
            </DismissKeyboardView>
        </Box>
    );
};

export default CreateEventScreen;

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
