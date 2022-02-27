import React from 'react';
import {Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, ViewProps} from 'react-native';

const DismissKeyboardView: React.FC = props => {
    const {children} = props;
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            {children}
        </TouchableWithoutFeedback>
    );
};
export default DismissKeyboardView;
