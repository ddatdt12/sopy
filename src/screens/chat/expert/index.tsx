import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Box from '@src/components/Box';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {COLORS, FONTS, SIZES} from '@src/assets/const';
import SearchBar from '@src/screens/chat/components/SearchBar';
import ConversationList from '@src/screens/chat/components/ConversationList';
import {ExpertMainTabProps} from '@src/navigation/expert/type';
import {scaleSize} from '@core/utils';
import ContactData from '../components/contact';

const ExpertChatHomeScreen: React.FC<ExpertMainTabProps<'Chat'>> = ({navigation}) => {
    const {t} = useTranslation();

    return (
        <Box bgColor={COLORS.gray_1} container safeArea={true}>
            <View style={{paddingHorizontal: scaleSize(15)}}>
                <Text style={styles.screenTitle}>{t('Messages')}</Text>
                <SearchBar
                    onInputPress={() =>
                        navigation.navigate('ExpertChatStack', {
                            screen: 'ExpertSearchChat',
                        })
                    }
                />
            </View>
            <ConversationList
                items={ContactData.filter(c => c.role !== 'expert')}
                onItemPress={user => navigation.navigate('ExpertChatStack', {screen: 'WithUserChat', params: {user}})}
                contentContainerStyle={{paddingHorizontal: scaleSize(15), paddingBottom: SIZES.bottomPadding}}
            />
        </Box>
    );
};

export default ExpertChatHomeScreen;

const styles = StyleSheet.create({
    screenTitle: {
        textAlign: 'center',
        alignSelf: 'center',
        padding: 18,
        ...FONTS.h2,
        color: COLORS.black_1,
    },
});
