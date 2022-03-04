import Button from '@src/components/Button';
import {ExpertHomeScreenNavigationProp} from '@src/navigation/expert/types';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import BackgroundImage from '../user/components/BackgroundImage';

const ExpertHomeScreen: React.FC<ExpertHomeScreenNavigationProp> = ({navigation}) => {
    const {t} = useTranslation();

    return (
        <BackgroundImage>
            <View>
                <Text>{t('Home Expert')}</Text>
                <Button title="Create Post" onPress={() => navigation.navigate('CreatePost')} />
                <Button title="Create Event" onPress={() => navigation.navigate('CreatePost')} />
            </View>
        </BackgroundImage>
    );
};

export default ExpertHomeScreen;
