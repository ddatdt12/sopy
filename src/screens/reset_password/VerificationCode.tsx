import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import {VerificationCodeProps} from '@src/navigation/AppStackParams';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const VerificationCode: React.FC<VerificationCodeProps> = ({navigation}) => {
    const [password, setPassword] = React.useState('');

    return (
        <Box container bgColor={COLORS.gray_1} paddingHorizontal={scaleSize(10)}>
            <View>
                <Text style={styles.title}>Code to reset your password: </Text>

                <Input
                    textContentType="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    inputStyle={styles.input}
                    style={styles.inputWrapper}
                />
            </View>

            <View>
                <Text style={styles.note}>Check out your mailbox to get the code</Text>
            </View>

            <View style={{alignItems: 'flex-end', marginRight: scaleSize(10)}}>
                <Button
                    title="Send"
                    textStyle={{color: COLORS.black_1}}
                    onPress={() => navigation.navigate('NewPassword')}
                />
            </View>
        </Box>
    );
};
export default VerificationCode;
