import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import { scaleSize } from '@core/utils';
import { COLORS, FONTS } from '@src/assets/const';

type Props = {
  value: string;
  selected?: boolean;
  rounded?: boolean;
  roundedTop?: boolean;
  roundedBottom?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  icon?: React.ReactNode;
};

const Option: React.FC<Props> = (props) => {
  const { value, rounded, roundedTop, selected, roundedBottom, icon, onPress } =
    props;
  return !selected ? (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.box,
        selected && {
          backgroundColor: COLORS.gray_2,
        },
        rounded && {
          borderRadius: scaleSize(8),
        },
        roundedTop && {
          borderTopEndRadius: scaleSize(8),
          borderTopStartRadius: scaleSize(8),
        },
        roundedBottom && {
          borderBottomEndRadius: scaleSize(8),
          borderBottomStartRadius: scaleSize(8),
        },
        !!icon && {
          flexDirection: 'row',
        },
      ]}
      onPress={onPress}>
      <Text style={{ ...FONTS.body3, color: COLORS.dark_gray_2, flex: 1 }}>
        {value}
      </Text>
      <View>{icon}</View>
    </TouchableOpacity>
  ) : (
    <></>
  );
};

export default Option;

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: scaleSize(14),
    paddingVertical: scaleSize(12),
    backgroundColor: COLORS.white_3,
    position:'relative',
    elevation: 10,
    width: scaleSize(170),
  },
});
