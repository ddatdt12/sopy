import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Container from '@src/components/Container';
import Stack from '@src/components/Stack';
import {ExploreScreenProps} from '@src/navigations/RootStackParams';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, Button as RNButton, StyleSheet} from 'react-native';
import EventScreen from '../event';

const ExploreScreen: React.FC<ExploreScreenProps> = () => {
    const {t} = useTranslation();

    return (
        <Container bgColor={COLORS.gray_1} fullScreen paddingHorizontal={scaleSize(10)}>
            <Stack direction="row" justifyContent="center" marginVertical={scaleSize(6)}>
                {/* FIXME: Change to Button component */}
                <RNButton title={t('Event')} onPress={() => Alert.alert('test')} />
                <RNButton title={t('Post')} />
            </Stack>
            {/* <PostScreen /> */}
            <EventScreen />
        </Container>
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
});
