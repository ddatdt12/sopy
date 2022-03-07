import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../../assets/const';
import { View } from 'react-native';

const PrevButton = () => {
  return (
    <View>
      <AntDesign name="arrowleft" size={44} color={COLORS.black_1} />
    </View>
  )
}

export default PrevButton;