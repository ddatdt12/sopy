import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import userApi from '@src/api/userApi';
import {COLORS, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import {UserChatStackProps} from '@src/navigation/user/type';
import BackButton from '@src/screens/chat/components/BackButton';
import {User} from '@src/types';
import {getRandomUser} from '@src/utils/User';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactList from '../../components/ContactList';
const ChooseExpertScreen: React.FC = () => {
    const {t} = useTranslation();
    const navigation = useNavigation<UserChatStackProps<'ChooseExpert'>['navigation']>();
    const [experts, setExperts] = useState<User[]>([]);

    useEffect(() => {
        let mounted = true;
        userApi
            .getAllUsers()
            .then(data => {
                if (!Array.isArray(data)) {
                    return;
                }
                if (mounted) {
                    setExperts(data.filter(user => user.is_expert));
                }
            })
            .catch(e => {
                console.log('Error: ', e);
            });

        return () => {
            mounted = false;
        };
    }, []);
    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <View style={styles.top}>
                <BackButton />
                <Text style={styles.label}>{t('With an expert')}</Text>
            </View>

            <View style={{paddingHorizontal: scaleSize(14)}}>
                <Input
                    style={{}}
                    inputStyle={{height: scaleSize(48)}}
                    icon={<Ionicons name="search" size={scaleSize(20)} color={COLORS.dark_gray_2} />}
                    iconPosition="start"
                    placeholder={t('Search')}
                />
                <View style={{height: '70%', marginVertical: scaleSize(14)}}>
                    <ContactList
                        contacts={experts}
                        onContactPress={expert => navigation.navigate('MainChat', {user: expert})}
                    />
                </View>
                <Button
                    title={t('Random Expert')}
                    style={{
                        marginBottom: scaleSize(55),
                        alignSelf: 'center',
                        paddingHorizontal: scaleSize(30),
                        paddingVertical: scaleSize(10),
                    }}
                    onPress={() => {
                        if (!experts || experts.length === 0) {
                            Alert.alert('Notice', 'No experts available');
                            return;
                        }

                        navigation.push('MainChat', {user: getRandomUser(experts)});
                    }}
                />
            </View>
        </Box>
    );
};

export default ChooseExpertScreen;

const styles = StyleSheet.create({
    top: {
        marginVertical: scaleSize(18),
        alignItems: 'center',
        flexDirection: 'row',
    },
    label: {
        ...FONTS.subtitle2,
        marginLeft: scaleSize(60),
    },
});
