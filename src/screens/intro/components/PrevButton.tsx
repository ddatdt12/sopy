import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../assets/const';
import {View} from 'react-native';

const PrevButton = () => {
    return (
        <View>
            <Ionicons name="arrow-back-sharp" size={44} color={COLORS.black_3} />
        </View>
    );
};

export default PrevButton;
