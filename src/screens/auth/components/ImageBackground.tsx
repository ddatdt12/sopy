import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import {COLORS} from '@src/assets/const';
import React from 'react';
import {Image, ImageSourcePropType, ImageStyle, ScrollView, StyleProp, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ImageBackgroundProps {
    source: ImageSourcePropType;
    blurRadius?: number;
    style?: StyleProp<ImageStyle>;
}

const ImageBackground: React.FC<ImageBackgroundProps> = props => {
    const {source, style, blurRadius, children} = props;
    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView style={{flex: 1}}> */}
            <Image
                style={[styles.background, style]}
                source={source || IMAGES.bg_intro_step_1}
                blurRadius={blurRadius}
                resizeMode="cover"
            />
            {children}
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};

export default ImageBackground;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray_1,
        position: 'relative',
    },
    background: {
        position: 'absolute',
        left: '-50%',
        right: '-30%',
        top: '-0%',
        bottom: '32%',
        flex: 1,
    },
});
