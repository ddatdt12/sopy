import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import {SendEmailProps} from '@src/navigation/AppStackParams';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const SendEmail: React.FC<SendEmailProps> = ({navigation}) => {
    const [email, setEmail] = React.useState('');

    return (
        <Box container bgColor={COLORS.gray_1} paddingHorizontal={scaleSize(10)}>
            <View>
                <Text style={styles.title}>Email:</Text>
            </View>

            <Input
                textContentType="emailAddress"
                keyboardType="email-address"
                value={email}
                onChangeText={text => setEmail(text)}
                inputStyle={{borderRadius: scaleSize(15)}}
                style={{paddingHorizontal: scaleSize(2), marginTop: scaleSize(10)}}
            />
            <View>
                <Text style={styles.note}>We’ll send you a code to reset your password</Text>
            </View>

            <View style={{alignItems: 'flex-end', marginRight: scaleSize(10)}}>
                <Button
                    title="Send"
                    textStyle={{color: COLORS.black_1}}
                    onPress={() => navigation.navigate('VerificationCode')}
                />
            </View>
        </Box>
    );
};
export default SendEmail;
