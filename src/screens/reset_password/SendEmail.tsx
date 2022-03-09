import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const SendEmail = ({}) => {
    const [email, setEmail] = React.useState('');

    return (
        <Box container bgColor={COLORS.gray_1}>
            <View>
                <Text style={styles.email}> Email:</Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View>
                <Text style={styles.note}> We’ll send you a code to reset your password</Text>
            </View>

            <TouchableOpacity style={styles.bgsend}>
                <Text style={styles.send}> Send </Text>
            </TouchableOpacity>
        </Box>
    );
};
export default SendEmail;
const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 10,
    },

    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    circle: {
        width: 30,
        height: 30,
        backgroundColor: '#E9F0F7',
        borderRadius: 100,
        color: 'black',
        textAlign: 'center',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0},
    },

    main: {
        color: '#193566',
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    email: {
        color: '#8F9BB2',
        paddingHorizontal: 4,
        fontSize: 19,
        paddingTop: 30,
        paddingBottom: 5,
    },

    input: {
        backgroundColor: '#E9F0F7',
        paddingTop: 4,
        marginLeft: 4,
        marginRight: 4,
        borderColor: '#8F9BB2',
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0},
    },

    note: {
        color: '#8F9BB2',
        paddingHorizontal: 4,
        paddingTop: 10,
        fontStyle: 'normal',
        textAlign: 'left',
        fontSize: 16,
    },

    bgsend: {
        marginTop: 20,
        backgroundColor: '#E9F0F7',
        marginLeft: 250,
        marginRight: 10,
        borderRadius: 30,
        shadowColor: '#000000',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0},
    },
    send: {
        color: '#193566',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
    },
    safe: {
        padding: 30,
        backgroundColor: '#E9F0F7',
        borderRadius: 30,
        shadowColor: '#000000',
        shadowRadius: 30,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0},
    },
});
