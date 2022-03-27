import {scaleSize} from '@core/utils';
import {COLORS, FONTS, SIZES} from '@src/assets/const';
import Box from '@src/components/Box';
import {ExpertMainTabProps} from '@src/navigation/expert/type';
import ConversationList from '@src/screens/chat/components/ConversationList';
import SearchBar from '@src/screens/chat/components/SearchBar';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';

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
                contentContainerStyle={{paddingHorizontal: scaleSize(15), paddingBottom: SIZES.bottomPadding}}
                onItemPress={item => {
                    navigation.navigate('ExpertChatStack', {
                        screen: 'WithUserChat',
                        params: {user: item},
                    });
                }}
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
