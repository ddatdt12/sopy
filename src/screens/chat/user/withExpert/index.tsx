import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '@src/assets/const';
import Box from '@src/components/Box';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import {UserChatStackProps} from '@src/navigation/user/type';
import BackButton from '@src/screens/chat/components/BackButton';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactData from '../../components/contact';
import ContactList from '../../components/ContactList';
import {Contact} from '../../components/types';
const ChooseExpertScreen: React.FC = () => {
    const {t} = useTranslation();
    const navigation = useNavigation<UserChatStackProps<'ChooseExpert'>['navigation']>();
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
                        contacts={ContactData.filter(c => c.role === 'expert')}
                        onContactPress={user => navigation.navigate('MainChat', {user})}
                    />
                </View>
                <Button
                    title={t('Random Expert')}
                    style={{
                        marginBottom: scaleSize(55),
                        width: scaleSize(211),
                        height: scaleSize(44),
                        alignSelf: 'center',
                    }}
                    onPress={() => navigation.push('MainChat', {user: ContactData[0]})}
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
