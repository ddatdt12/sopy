import {scaleSize} from '@core/utils';
import {COLORS, FONTS} from '@src/assets/const';
import Button from '@src/components/Button';
import {UserMainTabProps} from '@src/navigation/user/type';
import {useAppDispatch} from '@src/store';
import {authActions} from '@src/store/authSlice';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import BackgroundImage from './components/BackgroundImage';
import FeelingModal from './components/FeelingModal';

const HomeScreen: React.FC<UserMainTabProps<'Home'>> = ({navigation}) => {
    const {t} = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useAppDispatch();

    return (
        <BackgroundImage>
            <View style={{flex: 1}}>
                <Text style={[FONTS.h1, {alignSelf: 'center'}]}>{t('User Home')}</Text>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Button
                        title="Open modal"
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    />
                    <Button
                        title="Log out"
                        onPress={() => {
                            dispatch(authActions.logout());
                        }}
                        style={{marginTop: 100}}
                    />
                </View>
            </View>
            <FeelingModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </BackgroundImage>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    titleWrapper: {},
    title: {
        color: COLORS.dark_blue_2,
        marginHorizontal: scaleSize(10),
    },
    button: {
        width: scaleSize(220),
        marginVertical: scaleSize(10),
    },
    text: {
        color: COLORS.dark_gray_2,
    },
    dot: {
        backgroundColor: 'red',
        width: scaleSize(10),
        height: scaleSize(10),
        borderRadius: scaleSize(10) / 2,
        marginVertical: scaleSize(10),
    },
    leftLine: {
        position: 'absolute',
        left: '0%',
    },
    verticalLine: {
        height: scaleSize(105),
        borderLeftColor: 'red',
        borderLeftWidth: 10,
    },
});
