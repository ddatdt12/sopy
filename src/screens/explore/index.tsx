import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Box from '@src/components/Box';
import Stack from '@src/components/Stack';
import {ExploreScreenProps} from '@src/navigations/RootStackParams';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, Button as RNButton, StyleSheet} from 'react-native';
import EventScreen from '../event';

const ExploreScreen: React.FC<ExploreScreenProps> = () => {
    const {t} = useTranslation();

    return (
        <Box bgColor={COLORS.gray_1} container paddingHorizontal={scaleSize(10)}>
            <Stack direction="row" space={scaleSize(20)} style={styles.buttonContainer}>
                {/* FIXME: Change to Button component */}
                <RNButton title={t('Event')} onPress={() => Alert.alert('test')} />
                <RNButton title={t('Post')} onPress={() => Alert.alert('test')} />
            </Stack>
            {/* <PostsScreen /> */}
            <EventScreen />
        </Box>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
        paddingHorizontal: scaleSize(10),
        position: 'relative',
    },
    buttonContainer: {
        justifyContent: 'center',
        marginVertical: scaleSize(12),
    },
});
