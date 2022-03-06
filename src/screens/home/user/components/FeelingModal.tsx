import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Button from '@src/components/Button';
import DismissKeyboardView from '@src/components/DismissKeyboardView';
import Stack from '@src/components/Stack';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Dimensions, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {Feelings} from '../feeling';
import FeelingCard from './FeelingCard';
import Textarea from './Textarea';

interface IFeelingModal {
    modalVisible?: boolean;
    setModalVisible: (_: boolean) => void;
}
const width = Dimensions.get('screen').width / 3 - scaleSize(20);

const FeelingModal: React.FC<IFeelingModal> = ({modalVisible, setModalVisible}) => {
    const {t} = useTranslation();
    return (
        <ReactNativeModal
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
            onSwipeComplete={() => {
                setModalVisible(false);
            }}
            swipeDirection={'down'}
            style={{margin: 0, justifyContent: 'flex-end'}}
            backdropOpacity={0.4}>
            <DismissKeyboardView>
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior="padding">
                        <View style={styles.header}>
                            <Text style={styles.title}>{t('How are you feeling')}</Text>
                        </View>
                        <ScrollView>
                            <Stack direction="row" style={styles.feelingWrapper}>
                                {Feelings.map((feel, index) => {
                                    if (index !== Feelings.length - 1) {
                                        return (
                                            <FeelingCard key={feel.name} feeling={feel} size={width - scaleSize(2)} />
                                        );
                                    } else {
                                        const inputSize = 2 * (width - scaleSize(2));
                                        return (
                                            // <View key={feel.name} style={{flexDirection: 'row'}}>
                                            <Stack key={feel.name} direction="row">
                                                <FeelingCard feeling={feel} size={width - scaleSize(2)} />
                                                <Textarea inputSize={inputSize} placeholder={t("What's going on!")} />
                                            </Stack>
                                            // </View>
                                        );
                                    }
                                })}
                            </Stack>
                        </ScrollView>

                        {/* FIXME: Migrate into styled button component  */}
                        <View style={styles.buttonWrapper}>
                            <Button title={t('Save')} style={styles.button} />
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </DismissKeyboardView>
        </ReactNativeModal>
    );
};

export default FeelingModal;

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        width: '100%',
        height: '85%',
        backgroundColor: COLORS.gray_1,
        borderTopEndRadius: scaleSize(44),
        borderTopStartRadius: scaleSize(44),
    },
    header: {
        padding: scaleSize(16),
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        width: '100%',
    },
    title: {
        textAlign: 'center',
        fontSize: scaleSize(25),
        fontWeight: '500',
        color: COLORS.black_1,
    },
    feelingWrapper: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: scaleSize(4),
        marginTop: scaleSize(24),
        // width: '100%',
    },
    buttonWrapper: {
        marginTop: scaleSize(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {paddingVertical: scaleSize(6), width: '60%'},
});
