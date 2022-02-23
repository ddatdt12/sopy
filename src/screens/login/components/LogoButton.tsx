import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import React from 'react';
import {
    Alert,
    Image,
    ImageSourcePropType,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedbackProps,
    View,
} from 'react-native';

interface ILogoButton extends TouchableWithoutFeedbackProps {
    source: ImageSourcePropType;
}
const LogoButton: React.FC<ILogoButton> = props => {
    const {source, ...otherProps} = props;
    return (
        <TouchableOpacity style={styles.logoBox} {...otherProps}>
            <Image resizeMode="contain" source={source} style={styles.logo} />
        </TouchableOpacity>
    );
};

export default LogoButton;

const styles = StyleSheet.create({
    logoBox: {
        width: scaleSize(36),
        height: scaleSize(36),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: scaleSize(36) / 2,
        marginHorizontal: scaleSize(10),
    },
    logo: {
        width: '60%',
        height: '60%',
    },
});
