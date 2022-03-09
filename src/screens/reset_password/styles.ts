import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderRadius: scaleSize(15),
    },
    inputWrapper: {
        paddingHorizontal: scaleSize(2),
        marginTop: scaleSize(10),
    },

    main: {
        color: '#193566',
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    title: {
        paddingTop: scaleSize(28),
        ...FONTS.body3,
        fontFamily: 'Roboto-Medium',
        color: COLORS.dark_gray_2,
    },
    note: {
        color: COLORS.dark_gray_1,
        paddingVertical: scaleSize(10),
        paddingLeft: scaleSize(4),
        textAlign: 'left',
        fontSize: scaleSize(16),
    },
});

export default styles;
