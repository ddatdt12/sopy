import React from 'react';
import { StatusBar, StyleSheet, View, Image, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { COLORS, SIZES, FONTS } from '../../assets/const';
import Contents from './components/Contents';
import DoneButton from './components/DoneButton';
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';

const IntroScreen = () => {

  const keyExtractor = (item) => item.id;

  const renderItem = ({ item, index }) => {
    if (index == 0) {
      return (
        <View style={styles.container}>
          <Image source={item.bgimage} style={{
            position: 'absolute',
            bottom: 0.48 * (SIZES.WindowHeight),
            left: 0
          }} />
          <Image source={item.image} style={{
            position: 'absolute',
            bottom: 0.325 * (SIZES.WindowHeight),
            alignSelf: 'center'
          }} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{item.text}</Text>
          </View>
        </View>
      )
    }
    else if (index == 1) {
      return (
        <View style={styles.container}>
          <Image source={item.bgimage} style={{
            position: 'absolute',
            bottom: 0.338 * (SIZES.WindowHeight),
            left: 0
          }} />
          <Image source={item.image} style={{
            position: 'absolute',
            bottom: 0.24 * (SIZES.WindowHeight),
            alignSelf: 'center'
          }} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{item.text}</Text>
          </View>
        </View>
      )
    }
    else if (index == 2) {
      return (
        <View style={styles.container}>
          <Image source={item.bgimage} style={{
            position: 'absolute',
            top: 0,
            right: 0
          }} />
          <Image source={item.image} style={{
            position: 'absolute',
            bottom: 0.289 * (SIZES.WindowHeight),
            alignSelf: 'center'
          }} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{item.text}</Text>
          </View>
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Image source={item.bgimage} style={{
            position: 'absolute',
            bottom: 0.04 * (SIZES.WindowHeight),
            right: 0
          }} />
          <Image source={item.image} style={{
            position: 'absolute',
            bottom: 0.217 * (SIZES.WindowHeight),
            alignSelf: 'center'
          }} />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{item.text}</Text>
          </View>
        </View>
      )
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <AppIntroSlider
        data={Contents}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={() => <DoneButton />}
        renderNextButton={() => <NextButton />}
        renderPrevButton={() => <PrevButton />}
        showPrevButton
        activeDotStyle={styles.activeDotStyle}
      />
    </View>
  );
};

export default IntroScreen;

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
    bottom: 0.128 * (SIZES.WindowHeight),
    left: 0,
    right: 0,
  },
  descriptionText: {
    ...FONTS.h2,
    color: COLORS.black_1,
    textAlign: 'center',
  },
});