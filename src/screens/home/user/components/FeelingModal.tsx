import {scaleSize} from '@core/utils';
import {COLORS} from '@src/assets/const';
import Button from '@src/components/Button';
import DismissKeyboardView from '@src/components/DismissKeyboardView';
import Stack from '@src/components/Stack';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {Feeling, Feelings} from '../feeling';
import FeelingCard from './FeelingCard';
import {useAppSelector} from '@src/store';
import { Feel, User } from '@src/types';
import Textarea from './Textarea';
import feelApi from '@src/api/feelApi';

interface IFeelingModal {
    modalVisible?: boolean;
    setModalVisible: (_: boolean) => void;
}
const width = Dimensions.get('screen').width / 3 - scaleSize(20);

const FeelingModal: React.FC<IFeelingModal> = ({modalVisible, setModalVisible}) => {
    const {t} = useTranslation();
    const [selectedFeel, setSelectedFeel] = useState<Feeling | undefined>(undefined);
    const [reason, setReason] = useState<string>('');
    const user = useAppSelector(state => state.auth.user);

    function Notice() {
        Alert.alert('Notice', 'Create Emotion Diary successfully', [
            {
                text: 'OK',
                onPress: async () => {
                    handleCancelPress();
                },
            },
            {text: 'Exit', onPress: () => {
                handleCancelPress();}},
        ]);
    }

    const handlePress = async () => {
        console.log({
            reason,
            feel: selectedFeel,
        });
        
        const newFeel: Feel = {
            id: "",
            firebase_user_id: user.firebase_user_id,
            feel_id: selectedFeel!.number,
            reason: reason,
        }
        try {
            console.log("pre create: ", newFeel)
            const res = await feelApi.createFeel(newFeel);
            console.log("after create: ", res);
        } catch (error) {
            console.log(error);
        }
        Notice();
    };
    const handleCancelPress = () => {
        setModalVisible(false);
        setSelectedFeel(undefined);
        setReason('');
    };
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
                                            <FeelingCard
                                                key={feel.name}
                                                feeling={feel}
                                                selected={feel === selectedFeel}
                                                size={width - scaleSize(2)}
                                                onPress={() => setSelectedFeel(feel)}
                                            />
                                        );
                                    } else {
                                        const inputSize = 2 * (width - scaleSize(2));
                                        return (
                                            // <View key={feel.name} style={{flexDirection: 'row'}}>
                                            <Stack key={feel.name} direction="row">
                                                <FeelingCard
                                                    feeling={feel}
                                                    size={width - scaleSize(2)}
                                                    onPress={() => setSelectedFeel(feel)}
                                                />
                                                <Textarea
                                                    inputSize={inputSize}
                                                    onChangeText={text => setReason(text)}
                                                    placeholder={t("What's going on!")}
                                                />
                                            </Stack>
                                            // </View>
                                        );
                                    }
                                })}
                            </Stack>
                        </ScrollView>

                        {/* FIXME: Migrate into styled button component  */}
                        <Stack style={styles.buttonWrapper} direction="row" space={scaleSize(30)}>
                            <Button
                                title={t('Save')}
                                onPress={handlePress}
                                color={COLORS.white_1}
                                style={styles.button}
                            />
                            <Button
                                title={t('Cancel')}
                                color={COLORS.white_1}
                                textStyle={{color: '#F67E7A'}}
                                style={styles.button}
                                onPress={handleCancelPress}
                            />
                        </Stack>
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
    button: {
        paddingVertical: scaleSize(6),
        paddingHorizontal: scaleSize(40),
    },
});
