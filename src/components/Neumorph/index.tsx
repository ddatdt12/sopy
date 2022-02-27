import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { scaleSize } from '@core/utils';
import { COLORS } from '@src/assets/const';

//Just only on IOS
const Neumorph: React.FC<ViewProps> = ({ children, style, ...others }) => {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View style={style} {...others}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default Neumorph;

const styles = StyleSheet.create({
  topShadow: {
    borderRadius: scaleSize(12),
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 12,
  },
  bottomShadow: {
    borderRadius: scaleSize(12),
    shadowColor: COLORS.dark_gray_1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.48,
    shadowRadius: 10,
    elevation: 12,

  },
});
