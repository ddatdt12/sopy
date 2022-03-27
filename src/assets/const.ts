import {isIOS, scaleSize} from '@core/utils';
import {Dimensions, StyleSheet} from 'react-native';
const {width: WindowWidth, height: WindowHeight} = Dimensions.get('window');

export const BASE_URL = 'https://mental-health-gdsc-app.herokuapp.com';
export const STORE_KEY = {
    TOKEN: 'token',
    REFRESH_TOKEN: 'refreshToken',
    USER_ID: 'userId',
};
export const RANDOM_IMAGE = 'https://picsum.photos/200/300';
export const NON_AVATAR =
    'https://firebasestorage.googleapis.com/v0/b/mental-heath-gdsc-uit.appspot.com/o/no-avatar.png?alt=media&token=0480e33f-9693-46df-ad1f-acbea7577d10';

export const COLORS = {
    white_1: '#F5F9FD',
    white_2: '#FCFDFF',
    white_3: '#E9F0F7',

    black_1: '#193566',
    black_2: '#1D325E',
    black_3: '#728AB7',

    gray_1: '#EBF3FA', // background
    gray_2: '#B6BAC1',
    gray_3: '#E9E9E9',
    gray_4: '#6D7FA0',

    dark_gray_1: '#8A9BBD',
    dark_gray_2: '#8F9BB2',

    light_blue_1: '#B4D1FC',
    light_blue_2: '#AED2F7',

    dark_blue_1: '#677A9C',
    dark_blue_2: '#334C78',
    error_1: '#FF4906',
};
const bottomBarHeight = scaleSize(64);
const tabBarBottom = isIOS ? scaleSize(22) : scaleSize(14);
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: scaleSize(50),
    h1: scaleSize(32),
    h2: scaleSize(24),
    h3: scaleSize(18),
    h4: scaleSize(14),
    body1: scaleSize(32),
    body2: scaleSize(24),
    body3: scaleSize(18),
    body4: scaleSize(14),

    circleButton: scaleSize(42),
    bottomBarHeight,
    tabBarBottom,
    bottomPadding: bottomBarHeight + tabBarBottom,
    // app dimensions
    WindowWidth,
    WindowHeight,
};

export const FONTS = StyleSheet.create({
    largeTitle: {fontFamily: 'Roboto-Bold', color: COLORS.black_2, fontSize: SIZES.largeTitle, lineHeight: 55},
    h1: {fontFamily: 'Roboto-Bold', color: COLORS.black_2, fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: 'Roboto-Bold', color: COLORS.black_2, fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: 'Roboto-Bold', color: COLORS.black_2, fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: 'Roboto-Bold', color: COLORS.black_2, fontSize: SIZES.h4, lineHeight: 22},

    subtitle1: {fontFamily: 'Roboto-Medium', color: COLORS.black_2, fontSize: SIZES.body1, lineHeight: 36},
    subtitle2: {fontFamily: 'Roboto-Medium', color: COLORS.black_2, fontSize: SIZES.body2, lineHeight: 30},
    subtitle3: {fontFamily: 'Roboto-Medium', color: COLORS.black_2, fontSize: SIZES.body3, lineHeight: 22},
    subtitle4: {fontFamily: 'Roboto-Medium', color: COLORS.black_2, fontSize: SIZES.body4, lineHeight: 22},

    body1: {fontFamily: 'Roboto-Regular', color: COLORS.black_2, fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontFamily: 'Roboto-Regular', color: COLORS.black_2, fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontFamily: 'Roboto-Regular', color: COLORS.black_2, fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontFamily: 'Roboto-Regular', color: COLORS.black_2, fontSize: SIZES.body4, lineHeight: 22},
});

export const STYLES = StyleSheet.create({
    deepShadow: {
        shadowColor: COLORS.dark_gray_2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,

        elevation: 12,
    },
    mediumShadow: {
        shadowColor: COLORS.dark_gray_1,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,

        elevation: 8,
    },
    shadow: {
        shadowColor: COLORS.dark_gray_1,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.48,
        shadowRadius: 6,

        elevation: 5,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        ...FONTS.body4,
        color: COLORS.error_1,
        fontSize: scaleSize(16),
        marginTop: scaleSize(4),
        marginLeft: scaleSize(8),
    },
});
