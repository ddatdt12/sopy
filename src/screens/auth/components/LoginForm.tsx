import {scaleSize} from '@core/utils';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {COLORS, STYLES} from '@src/assets/const';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Text from '@src/components/Text';
import {AppStackProps} from '@src/navigation/AppStackParams';
import {emailPasswordLogin} from '@src/services/auth';
import {useAppDispatch, useAppSelector} from '@src/store';
import {authActions} from '@src/store/authSlice';
import React, {useState} from 'react';
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

type LoginFormProps = {};
const LoginForm: React.FC<LoginFormProps> = ({}) => {
    const {t} = useTranslation();
    const {navigate} = useNavigation<AppStackProps<'UserLogin'>['navigation']>();
    const {error: authError} = useAppSelector(state => state.auth);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
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
    console.log(loading);
    const onSubmit = async ({email, password}: LoginData) => {
        setLoading(true);
        const {user, error} = await emailPasswordLogin({email, password});
        console.log({user, error});
        if (!error) {
            await dispatch(authActions.login(user?.uid));
        } else {
            Alert.alert(error);
        }
        setLoading(false);

        // await dispatch(authActions.login(user));
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

            {!!authError && <Text style={STYLES.error}>{authError}</Text>}
            <Text style={styles.link} onPress={() => navigate('SendResetPassEmail')}>
                {t('Forgot password?')}
            </Text>
            <View style={{alignItems: 'center', paddingTop: scaleSize(40)}}>
                <Button
                    title={t('Log In')}
                    color={COLORS.white_1}
                    style={styles.button}
                    onPress={handleSubmit(onSubmit)}
                    loading={loading}
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
        alignSelf: 'flex-start',
    },
    button: {
        width: scaleSize(200),
    },
});
