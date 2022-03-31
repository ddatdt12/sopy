import {scaleSize} from '@core/utils';
import {yupResolver} from '@hookform/resolvers/yup';
import {COLORS, NON_AVATAR} from '@src/assets/const';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import {emailPasswordRegister} from '@src/services/auth';
import {useAppDispatch, useAppSelector} from '@src/store';
import {authActions} from '@src/store/authSlice';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, View} from 'react-native';
import * as yup from 'yup';

const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).max(100).required(),
        confirmPassword: yup.string().min(6).max(100).required(),
    })
    .required();
export type RegisterData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const RegisterForm: React.FC = props => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const {
        control,
        handleSubmit,
        formState: {errors},
        setError,
    } = useForm<RegisterData>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: RegisterData) => {
        if (data.confirmPassword !== data.password) {
            setError('confirmPassword', {
                type: 'manual',
                message: "Password and confirm password don't match!",
            });
            return;
        }

        const {name, email, password} = data;

        setLoading(true);
        const {user, error} = await emailPasswordRegister({
            email,
            password,
        });

        if (!error && user) {
            user.displayName = name;
            await dispatch(authActions.register(user));
            Alert.alert('Notice', 'You have successfully register!');
        } else {
            Alert.alert(error ?? 'Server Error');
        }
        setLoading(false);

        console.log({user, error});
    };
    return (
        <>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input
                        placeholder={t('Name')}
                        style={{marginTop: scaleSize(16)}}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.name?.message}
                    />
                )}
                name="name"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input
                        placeholder="Email"
                        style={{marginTop: scaleSize(16)}}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.email?.message}
                    />
                )}
                name="email"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input
                        placeholder={t('Password')}
                        style={{marginTop: scaleSize(16)}}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.password?.message}
                        secureTextEntry={true}
                    />
                )}
                name="password"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input
                        placeholder={t('Confirm Password')}
                        style={{marginTop: scaleSize(16)}}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.confirmPassword?.message}
                        secureTextEntry={true}
                    />
                )}
                name="confirmPassword"
            />

            <View style={styles.buttonWrapper}>
                <Button title={t('Sign up')} loading={loading} style={styles.button} onPress={handleSubmit(onSubmit)} />
            </View>
        </>
    );
};

export default RegisterForm;

const styles = StyleSheet.create({
    buttonWrapper: {alignItems: 'center', paddingTop: scaleSize(48)},
    button: {
        width: scaleSize(200),
        backgroundColor: COLORS.white_1,
    },
});
