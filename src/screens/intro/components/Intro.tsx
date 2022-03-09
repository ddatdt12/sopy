import {COLORS, FONTS, SIZES} from '@src/assets/const';
import React from 'react';
import {StyleSheet, View, Text, Image, ImageSourcePropType} from 'react-native';

interface IIntroProps {
    text: string;
    bgImage: ImageSourcePropType;
    image: ImageSourcePropType;
}

const Intro: React.FC<IIntroProps> = ({text, bgImage, image}) => {
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
            />
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{text}</Text>
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
