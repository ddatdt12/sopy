import {scaleSize} from '@core/utils';
import feelApi from '@src/api/feelApi';
import {COLORS} from '@src/assets/const';
import Button from '@src/components/Button';
import DismissKeyboardView from '@src/components/DismissKeyboardView';
import Stack from '@src/components/Stack';
import {useAppSelector} from '@src/store';
import {Feel} from '@src/types';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {Feeling, Feelings} from '../feeling';
import FeelingCard from './FeelingCard';
import Textarea from './Textarea';

interface IFeelingModal {
}
const width = Dimensions.get('screen').width / 3 - scaleSize(20);

const FeelingModal: React.FC<IFeelingModal> = () => {
    const {t} = useTranslation();
    const [selectedFeel, setSelectedFeel] = useState<Feeling | undefined>(undefined);
    const [reason, setReason] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const user = useAppSelector(state => state.auth.user);

    const Notice = () => {
        Alert.alert('Notice', 'Create Emotion Diary successfully', [
            {
                text: 'OK',
                onPress: async () => {
                    handleCancelPress();
                },
            },
        ]);
    };

    const handlePress = async () => {
        console.log({
            reason,
            feel: selectedFeel,
        });

        const newFeel: Feel = {
            id: '',
            firebase_user_id: user!.firebase_user_id,
            feel_id: selectedFeel!.number,
            reason: reason,
        };
        try {
            setLoading(true);
            const res = await feelApi.createFeel(newFeel);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
        Notice();
    };
    const handleCancelPress = () => {
        setSelectedFeel(undefined);
        setReason('');
    };
    return (
        <View style={styles.container}>
            <DismissKeyboardView>
                    <KeyboardAvoidingView behavior="padding">
                        <View style={styles.header}>
                            <Text style={styles.title}>{t('How are you feeling today?')}</Text>
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
                                                    selected={feel === selectedFeel}
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
                                loading={loading}
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
            </DismissKeyboardView>
        </View>
    );
};

export default FeelingModal;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        borderTopEndRadius: scaleSize(44),
        borderTopStartRadius: scaleSize(44),
        marginTop: scaleSize(49)
    },
    header: {
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        width: scaleSize(302),
        alignSelf: 'center',
        paddingBottom: scaleSize(9)
    },
    title: {
        textAlign: 'center',
        fontSize: scaleSize(25),
        fontWeight: '500',
        color: COLORS.black_1,
        alignSelf: 'center',
        width: scaleSize(302),
    },
    feelingWrapper: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: scaleSize(4),
        marginTop: scaleSize(24),
        height: scaleSize(350),
        // width: '100%',
        backgroundColor: '#EBF3FA',
    },
    buttonWrapper: {
        marginTop: scaleSize(48),
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingVertical: scaleSize(6),
        paddingHorizontal: scaleSize(40),
    },
});
