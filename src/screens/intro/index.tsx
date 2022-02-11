import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const strings_en = {
    intro_1: 'Receiving guidelines from \npsychologist',
    intro_2: 'Noting down your \nemotion diary',
    intro_3: 'Exploring posts and events \nabout mental health',
    intro_4: 'Chatting with strangers',
};

const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" source={IMAGES.bg_intro_step_1} style={styles.bg_1} />

            <SafeAreaView>
                <Image resizeMode="contain" source={IMAGES.img_intro_step_1} style={styles.img_1} />
                <Text style={{}}>{strings_en.intro_1}</Text>
            </SafeAreaView>
        </View>
    );
};

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray_1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bg_1: {
        width: scaleSize(517),
        height: scaleSize(388),
        position: 'absolute',
        left: scaleSize(-260),
        top: scaleSize(100),
    },

    img_1: {
        width: scaleSize(400),
        height: scaleSize(400),
    },
});
