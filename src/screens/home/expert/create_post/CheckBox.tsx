import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Stack from '@src/components/Stack';
import CheckBox, {CheckBoxProps} from '@react-native-community/checkbox';
import {FONTS, STYLES} from '@src/assets/const';
import {scaleSize} from '@core/utils';

interface IProps extends CheckBoxProps {
    label: String;
}

const LabelCheckBox: React.FC<IProps> = props => {
    const {label, ...checkBoxProps} = props;
    return (
        <Stack direction="row" alignItems="center" style={{marginVertical: scaleSize(4)}}>
            <CheckBox tintColors={{true: '#B4D1FC'}} {...checkBoxProps} style={{padding: 0, margin: 0}} />
            <Text style={[FONTS.body3, {marginLeft: scaleSize(5)}]}>{label}</Text>
        </Stack>
    );
};

export default LabelCheckBox;

const styles = StyleSheet.create({});
