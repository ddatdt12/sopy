import {COLORS, FONTS, SIZES} from '@src/assets/const';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
interface IIntroProps {
    text: string;
    bgImage: ImageSourcePropType;
    image: ImageSourcePropType;
    last?: boolean;
}

const Intro: React.FC<IIntroProps> = ({text, bgImage, image, last}) => {
    const {t} = useTranslation();
    return (
        <View style={styles.container}>
            <Image
                source={bgImage}
                style={{
                    position: 'absolute',
                    // bottom: 0.48 * SIZES.WindowHeight,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                resizeMode="cover"
            />
            <Image
                source={image}
                style={{
                    position: 'absolute',
                    bottom: 0.325 * SIZES.WindowHeight,
                    alignSelf: 'center',
                }}
                resizeMode="cover"
            />
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{t(text)}</Text>
            </View>
        </View>
    );
};
export default Intro;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.gray_1,
        position: 'relative',
    },
    descriptionContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
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
