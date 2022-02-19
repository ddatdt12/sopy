import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
    neomorph?: boolean;
}

const Shadow: React.FC<Props> = props => {
    return (
        <View>
            <Text>Shadow</Text>
        </View>
    );
};

export default Shadow;

const styles = StyleSheet.create({});
