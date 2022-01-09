import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const screenSize = Math.sqrt(width * height) / 100;

const scaleSize = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const venticalScaleSize = (size: number) => (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) => size + (scaleSize(size) - size) * factor;

const moderateVerticalScale = (size: number, factor = 0.5) => size + (venticalScaleSize(size) - size) * factor;

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

export {scaleSize, venticalScaleSize, moderateScale, moderateVerticalScale, screenSize, isAndroid, isIOS};
