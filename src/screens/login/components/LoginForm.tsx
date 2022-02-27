import {scaleSize} from '@core/utils';
import {yupResolver} from '@hookform/resolvers/yup';
import {COLORS} from '@src/assets/const';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Text from '@src/components/Text';
import {auth} from '@src/config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, View} from 'react-native';
import * as yup from 'yup';

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().min(6).max(100).required(),
    })
    .required();
export type LoginData = {
    email: string;
    password: string;
};
interface LoginProps {}
const LoginForm: React.FC<LoginProps> = props => {
    const {t, i18n} = useTranslation();

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginData>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = ({email, password}: LoginData) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;
                Alert.alert('Notice', 'Success: ' + user.email);
                console.log('Success: ', user.email);
            })
            .catch(error => {
                const errorMessage = error.message;
                Alert.alert('Notice', errorMessage);
                console.log(error);
            });
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
                        placeholder="Email"
                        style={{marginTop: scaleSize(8)}}
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
                render={({field: {onChange, onBlur, value}}) => (
                    <Input
                        placeholder="Password"
                        onBlur={onBlur}
                        style={{marginTop: scaleSize(18)}}
                        onChangeText={onChange}
                        value={value}
                        error={errors.password?.message}
                        secureTextEntry={true}
                    />
                )}
                name="password"
            />

            <Text style={styles.link} onPress={() => Alert.alert('Forgot password')}>
                {t('Forgot password?')}
            </Text>
            <View style={{alignItems: 'center', paddingTop: scaleSize(25)}}>
                <Button
                    title={t('Log In')}
                    variant="secondary"
                    style={styles.button}
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    link: {
        letterSpacing: scaleSize(0.1),
        textDecorationLine: 'underline',
        fontSize: scaleSize(18),
        marginVertical: scaleSize(16),
        color: COLORS.dark_blue_1,
    },
    button: {
        width: scaleSize(200),
    },
});
