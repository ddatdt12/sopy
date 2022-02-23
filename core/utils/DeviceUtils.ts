import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const screenSize = Math.sqrt(width * height) / 100;

const scaleSize = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const verticalScaleSize = (size: number) => (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) => size + (scaleSize(size) - size) * factor;

const moderateVerticalScale = (size: number, factor = 0.5) => size + (verticalScaleSize(size) - size) * factor;

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

export {scaleSize, verticalScaleSize, moderateScale, moderateVerticalScale, screenSize, isAndroid, isIOS};
