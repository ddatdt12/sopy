import {scaleSize} from '@core/utils';
import {COLORS, FONTS, SIZES} from '@src/assets/const';
import {IntroScreenProps} from '@src/navigation/AppStackParams';
import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Contents from './components/Contents';
import DoneButton from './components/DoneButton';
import Intro from './components/Intro';
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';

const IntroScreen: React.FC<IntroScreenProps> = ({navigation}) => {
    const keyExtractor = (item: any) => item.id;
    const [isEnd, setIsEnd] = useState(false);
    const renderItemF = ({item, index}: any) => {
        return <Intro {...item} last={isEnd} />;
    };
    const moreProps = isEnd ? {dotStyle: {display: 'none'}} : {};
    return (
        <View style={{flex: 1}}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            {/* @ts-ignore: Unreachable code error */}
            <AppIntroSlider
                data={Contents}
                keyExtractor={keyExtractor}
                renderItem={renderItemF}
                // renderDoneButton={() => <DoneButton onPress={() => navigation.replace('RoleChoose')} />}
                renderNextButton={() => <NextButton />}
                renderPrevButton={() => <PrevButton />}
                showPrevButton
                {...moreProps}
                showDoneButton={false}
                activeDotStyle={{...styles.activeDotStyle, display: isEnd ? 'none' : 'flex'}}
                onSlideChange={index => {
                    setIsEnd(index === 3);
                }}
                onEndReached={() => setIsEnd(true)}
            />
        </View>
    );
};

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
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
