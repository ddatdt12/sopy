import {scaleSize, verticalScaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Neumorph from '@src/components/Neumorph';
import {NewPasswordProps} from '@src/navigation/AppStackParams';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const NewPassword: React.FC<NewPasswordProps> = ({navigation, route}) => {
    const [password, setPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Neumorph borderRadius={scaleSize(60)}>
                    <Button
                        title="Save"
                        textStyle={{color: COLORS.black_1}}
                        style={{paddingHorizontal: scaleSize(16)}}
                        onPress={() => {
                            navigation.pop(3);
                        }}
                    />
                </Neumorph>
            ),
        });
    }, [navigation]);

    return (
        <Box container bgColor={COLORS.gray_1} paddingHorizontal={verticalScaleSize(10)}>
            <View>
                <Text style={styles.title}>New password:</Text>
                <Input
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    inputStyle={styles.input}
                    style={styles.inputWrapper}
                />
            </View>

            <View>
                <Text style={styles.title}>Confirm password:</Text>
                <Input
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={text => setNewPassword(text)}
                    inputStyle={styles.input}
                    style={styles.inputWrapper}
                />
            </View>

            <View>
                <Text style={styles.note}>You must enter the same password twice in order to confirm it.</Text>
            </View>
        </Box>
    );
};
export default NewPassword;
