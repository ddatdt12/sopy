import {scaleSize} from '@core/utils';
import {COLORS, FONTS, SIZES} from '@src/assets/const';
import Box from '@src/components/Box';
import {IntroScreenProps} from '@src/navigation/AppStackParams';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Contents from './components/Contents';
import DoneButton from './components/DoneButton';
import Intro from './components/Intro';
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';

const IntroScreen: React.FC<IntroScreenProps> = ({navigation}) => {
    const keyExtractor = (item: any) => item.id;
    const renderItem = ({item, index}: any) => {
        return <Intro {...item} />;
    };
    return (
        <Box container {...styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <AppIntroSlider
                data={Contents}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                renderDoneButton={() => <DoneButton onPress={() => navigation.replace('RoleChoose')} />}
                renderNextButton={() => <NextButton />}
                renderPrevButton={() => <PrevButton />}
                showPrevButton
                // bottomButton
                activeDotStyle={styles.activeDotStyle}
            />
        </Box>
    );
};

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.gray_1,
        paddingBottom: scaleSize(6),
    },
    activeDotStyle: {
        backgroundColor: COLORS.dark_gray_1,
    },
    descriptionContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0.128 * SIZES.WindowHeight,
        left: 0,
        right: 0,
    },
    descriptionText: {
        ...FONTS.h2,
        color: COLORS.black_1,
        textAlign: 'center',
    },
});
