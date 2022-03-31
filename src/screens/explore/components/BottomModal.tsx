import {Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaleSize} from '@core/utils';
import {COLORS, FONTS, SIZES, STYLES} from '@src/assets/const';
import { useTranslation } from 'react-i18next';

type Props = {
    visible: boolean;
    onEditPress: () => void;
    onDeletePress: () => void;
    onCancel: () => void;
};

const BottomModal: React.FC<Props> = props => {
    const {visible, onEditPress, onDeletePress, onCancel} = props;
    const {t} = useTranslation()
    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View
                style={{
                    flex: 1,
                    paddingBottom: scaleSize(33),
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}>
                <View style={styles.modalView}>
                    <View style={[styles.option, {marginBottom: scaleSize(18)}]}>
                        <TouchableOpacity onPress={onEditPress} style={styles.modalButton}>
                            <Text style={FONTS.body2}>{t('Edit')}</Text>
                        </TouchableOpacity>

                        <View style={{backgroundColor: '#BABCC1', height: scaleSize(1), width: scaleSize(376)}} />

                        <TouchableOpacity onPress={onDeletePress} style={styles.modalButton}>
                            <Text style={[FONTS.body2, {color: COLORS.error_1}]}>{t("Delete")}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.option}>
                        <TouchableOpacity onPress={() => onCancel()} style={styles.modalButton}>
                            <Text style={styles.cancelText}>{t("Cancel")}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default BottomModal;

const styles = StyleSheet.create({
    modalView: {
        ...STYLES.deepShadow,
        borderRadius: 10,
        paddingHorizontal: scaleSize(6),
        width: SIZES.WindowWidth,
    },
    option: {
        ...STYLES.deepShadow,
        backgroundColor: COLORS.white_1,
        borderRadius: 10,
        shadowColor: 'white',
    },
    cancelText: {
        ...FONTS.h2,
    },
    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scaleSize(10),
    },
});
