import {scaleSize} from '@core/utils';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, SIZES} from '@src/assets/const';
import Button from '@src/components/Button';
import Neumorph from '@src/components/Neumorph';
import {IntroScreenProps} from '@src/navigation/AppStackParams';
import React from 'react';
import {StyleSheet, View, Text, Image, ImageSourcePropType} from 'react-native';

interface IIntroProps {
    text: string;
    bgImage: ImageSourcePropType;
    image: ImageSourcePropType;
    last?: boolean;
}

const Intro: React.FC<IIntroProps> = ({text, bgImage, image, last}) => {
    const navigation = useNavigation<IntroScreenProps['navigation']>();
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
                <Text style={styles.descriptionText}>{text}</Text>
            </View>
            {last && (
                <Neumorph
                    shadowContainerStyle={{
                        position: 'absolute',
                        bottom: scaleSize(24),
                        borderRadius: scaleSize(60),
                    }}>
                    <Button
                        title="GO!"
                        style={{
                            paddingHorizontal: scaleSize(40),
                        }}
                        onPress={() => navigation.replace('RoleChoose')}
                    />
                </Neumorph>
            )}
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
