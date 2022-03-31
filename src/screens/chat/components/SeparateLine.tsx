import {scaleSize} from '@core/utils';
import {IMAGES} from '@src/assets';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const SeparateLine: React.FC = () => {
    return <Image style={{alignSelf: 'center', marginVertical: scaleSize(12)}} source={IMAGES.lineChat} />;
};

export default SeparateLine;

const styles = StyleSheet.create({});
