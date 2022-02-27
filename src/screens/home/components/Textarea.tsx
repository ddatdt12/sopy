import {scaleSize} from '@core/utils';
import Input from '@src/components/Input';
import React from 'react';
import {StyleSheet} from 'react-native';

interface Props {
    inputSize: number;
    placeholder?: string;
}

const Textarea: React.FC<Props> = props => {
    const {inputSize, placeholder} = props;
    return (
        <Input
            style={{
                width: inputSize,
                marginHorizontal: scaleSize(16),
            }}
            inputStyle={{
                borderRadius: scaleSize(14),
                alignSelf: 'center',
                height: inputSize / 2,
            }}
            textInputStyle={{
                fontSize: scaleSize(18),
            }}
            placeholder={placeholder}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
            underlineColorAndroid="transparent"
            autoCorrect={false}
        />
    );
};

export default Textarea;

const styles = StyleSheet.create({});
