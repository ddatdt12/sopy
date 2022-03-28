import {IMAGES} from '@src/assets';
import React from 'react';
import {Image, StyleSheet} from 'react-native';

const SeparateLine: React.FC = () => {
    return <Image style={{alignSelf: 'center'}} source={IMAGES.lineChat} />;
};

export default SeparateLine;

const styles = StyleSheet.create({});
