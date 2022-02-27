import { scaleSize } from '@core/utils';
import { COLORS } from '@src/assets/const';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from './components/BackgroundImage';

const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <BackgroundImage>
      <View>
        <Text>{t('Home')}</Text>
      </View>
      {/* <FeelingModal /> */}
    </BackgroundImage>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  titleWrapper: {},
  title: {
    color: COLORS.dark_blue_2,
    marginHorizontal: scaleSize(10),
  },
  button: {
    width: scaleSize(220),
    marginVertical: scaleSize(10),
  },
  text: {
    color: COLORS.dark_gray_2,
  },
  dot: {
    backgroundColor: 'red',
    width: scaleSize(10),
    height: scaleSize(10),
    borderRadius: scaleSize(10) / 2,
    marginVertical: scaleSize(10),
  },
  leftLine: {
    position: 'absolute',
    left: '0%',
  },
  verticalLine: {
    height: scaleSize(105),
    borderLeftColor: 'red',
    borderLeftWidth: 10,
  },
});
