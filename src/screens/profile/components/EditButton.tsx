import {scaleSize} from '../../../../core/utils';
import {COLORS} from '../../../assets/const';
import {IMAGES} from '../../../assets';
import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';

type Props = {};

const EditButton = (props: Props) => {
    return (
        <TouchableOpacity style={styles.back_button}>
            <Image source={IMAGES.edit} style={styles.back_button_img}></Image>
        </TouchableOpacity>
    );
};

export default EditButton;

const styles = StyleSheet.create({
    back_button: {
        height: 40,
        width: 40,
        borderRadius: 60,
        backgroundColor: '#E9F0F7',
        marginLeft: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,

        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#8A9BBD',
    },
    back_button_img: {
        height: 20,
        width: 20,
        alignSelf: 'center',
    },
});
