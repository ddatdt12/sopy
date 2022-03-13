import Button from '@src/components/Button';
import {ExpertHomeCompositeProps} from '@src/navigation/expert/type';
import {firebaseLogout} from '@src/services/auth';
import {useAppDispatch} from '@src/store';
import {authActions} from '@src/store/authSlice';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import BackgroundImage from '../user/components/BackgroundImage';

const ExpertHomeScreen: React.FC<ExpertHomeCompositeProps> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    return (
        <BackgroundImage>
            <View style={{flex: 1}}>
                <Text>{t('Home Expert')}</Text>
                <Button title="Create Post" onPress={() => navigation.navigate('CreatePost')} />
                <Button title="Create Event" onPress={() => navigation.navigate('CreateEvent')} />
                <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Button
                        title="Logout"
                        onPress={() => {
                            firebaseLogout();
                            dispatch(authActions.logout());
                        }}
                    />
                </View>
            </View>
        </BackgroundImage>
    );
};

export default ExpertHomeScreen;
