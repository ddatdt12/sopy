import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS } from '../../../assets/const';

const DoneButton = () => {
  return (
    <View style={[styles.buttonWrapper, styles.elevation]}>
      <Text style={styles.buttonText}>GO!</Text>
    </View>
  )
}

export default DoneButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 45,
    borderRadius: 50,
    backgroundColor: COLORS.white_3,
  },
  elevation: {
    elevation: 5,
    shadowColor: COLORS.dark_gray_1,
  },
  buttonText: {
    ...FONTS.h5,
    color: COLORS.black_1,
  },
});