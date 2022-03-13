import {Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaleSize} from '@core/utils';
import {FONTS, STYLES} from '@src/assets/const';

interface Props {
    visible: boolean;
    onOpenLibraryPress: () => void;
    onOpenCameraPress: () => void;
    onCancel: () => void;
}

const BottomModal: React.FC<Props> = props => {
    const {visible, onOpenLibraryPress, onOpenCameraPress, onCancel} = props;
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
                    <View style={styles.takePhotoModalOption}>
                        <TouchableOpacity 
                            onPress={onOpenCameraPress} 
                            style={styles.modalButton}
                        >
                            <Text style={styles.takePhotoText}>Take Photo</Text>
                        </TouchableOpacity>

                        <View style={{backgroundColor: '#BABCC1', height: scaleSize(1), width: scaleSize(376)}} />

                        <TouchableOpacity 
                            onPress={onOpenLibraryPress} 
                            style={styles.modalButton}
                        >
                            <Text style={styles.chooseLibraryText}>Choose From Library</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.chooseLibraryModalOption}>
                        <TouchableOpacity 
                            onPress={() => onCancel()} 
                            style={styles.modalButton}
                        >
                            <Text style={styles.cancelText}>Cancel</Text>
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
        height: scaleSize(184),
        width: scaleSize(376),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    takePhotoModalOption: {
        ...STYLES.deepShadow,
        height: scaleSize(112),
        width: scaleSize(376),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F9FD',
        borderRadius: 10,
    },
    chooseLibraryModalOption: {
        ...STYLES.deepShadow,
        height: scaleSize(56),
        width: scaleSize(376),
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F9FD',
        borderRadius: 10,
    },
    takePhotoText: {
        fontSize: scaleSize(23),
        color: '#1D325E'
    }, 
    chooseLibraryText: {
        fontSize: scaleSize(23), 
        color: '#1D325E', 
        marginBottom: scaleSize(9)
    },
    cancelText: {
        ...FONTS.h1,
        fontSize: scaleSize(23),
    },
    modalButton: {
        alignItems: 'center', 
        justifyContent: 'center',
        height: scaleSize(58), 
        width: scaleSize(376),
    }
});
