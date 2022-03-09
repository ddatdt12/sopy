import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ResetPasswordStackParamList = {
    SendEmail: undefined;
    VerificationCode: undefined;
    NewPassword: undefined;
};

type SendEmailProps = NativeStackScreenProps<ResetPasswordStackParamList, 'SendEmail'>;
type VerificationCodeProps = NativeStackScreenProps<ResetPasswordStackParamList, 'VerificationCode'>;
type NewPasswordProps = NativeStackScreenProps<ResetPasswordStackParamList, 'NewPassword'>;

export type {SendEmailProps, VerificationCodeProps, NewPasswordProps};
