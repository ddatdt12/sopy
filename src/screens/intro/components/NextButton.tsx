import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../assets/const';
import {View} from 'react-native';

const NextButton = () => {
    return (
        <View>
            <Ionicons name="arrow-forward-sharp" size={44} color={COLORS.black_3} />
        </View>
    );
};

export default NextButton;
