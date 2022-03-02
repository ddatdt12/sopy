import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        paddingHorizontal: scaleSize(36),
        marginTop: '35%',
    },
    textWrapper: {
        width: '100%',
        marginLeft: scaleSize(10),
        marginBottom: scaleSize(6),
    },
    title: {
        ...FONTS.largeTitle,
        marginVertical: scaleSize(6),
        color: COLORS.black_1,
    },
    subtitle: {
        ...FONTS.subtitle2,
        marginVertical: scaleSize(4),
        color: COLORS.dark_blue_1,
    },
    footer: {
        width: scaleSize(240),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '30%',
        marginBottom: scaleSize(40),
    },
    footerText: {
        fontSize: scaleSize(18),
        textDecorationLine: 'underline',
        fontWeight: '500',
        textAlign: 'center',
        color: COLORS.dark_blue_1,
    },
});

export default styles;
