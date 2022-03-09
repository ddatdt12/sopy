import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/Header';
import NewPasswordScreen from '@src/screens/reset_password/NewPassword';
import SendEmail from '@src/screens/reset_password/SendEmail';
import VerificationCode from '@src/screens/reset_password/VerificationCode';
import React from 'react';
import {ResetPasswordStackParamList} from './type';

export const ResetPasswordStack = createNativeStackNavigator<ResetPasswordStackParamList>();

const ResetPassNavigator: React.FC = () => {
    return (
        <ResetPasswordStack.Navigator
            screenOptions={{
                headerShown: true,
                headerShadowVisible: false,
                title: 'Reset password',
                header: props => <Header {...props} />,
            }}
            initialRouteName={'SendEmail'}>
            <ResetPasswordStack.Screen name="SendEmail" component={SendEmail} />
            <ResetPasswordStack.Screen name="VerificationCode" component={VerificationCode} />
            <ResetPasswordStack.Screen name="NewPassword" component={NewPasswordScreen} />
        </ResetPasswordStack.Navigator>
    );
};

export default ResetPassNavigator;
