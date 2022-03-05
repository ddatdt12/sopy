import Button from '@src/components/Button';
import {ExpertHomeScreenNavigationProps} from '@src/navigation/expert/type';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import BackgroundImage from '../user/components/BackgroundImage';

const ExpertHomeScreen: React.FC<ExpertHomeScreenNavigationProps> = ({navigation}) => {
    const {t} = useTranslation();

    return (
        <BackgroundImage>
            <View style={{flex: 1}}>
                <Text>{t('Home Expert')}</Text>
                <Button title="Create Post" onPress={() => navigation.navigate('CreatePost')} />
                <Button title="Create Event" onPress={() => navigation.navigate('CreateEvent')} />
                <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Button title="Open modal" onPress={() => navigation.navigate('CreateEvent')} />
                </View>
            </View>
        </BackgroundImage>
    );
};

export default ExpertHomeScreen;
