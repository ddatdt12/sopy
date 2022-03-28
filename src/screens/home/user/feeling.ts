import {ColorValue, ImageSourcePropType} from 'react-native';
import {IMAGES} from '@src/assets';

export type Feeling = {
    name: string;
    color: ColorValue;
    backgroundColor: ColorValue;
    image: ImageSourcePropType;
    number: number;
};

export const Feelings: Feeling[] = [
    {name: 'Happy', color: '#F84988CF', backgroundColor: '#F7B2AE', image: IMAGES.feelings.happy, number: 1},
    {name: 'Sad', color: '#3897FF', backgroundColor: '#94BAE3', image: IMAGES.feelings.sad, number: 2},
    {name: 'Scared', color: '#858585', backgroundColor: '#B6BAC1', image: IMAGES.feelings.scared, number: 3},
    {name: 'Angry', color: '#9C50FF', backgroundColor: '#DBAEF7', image: IMAGES.feelings.angry, number: 4},
    {name: 'Worry', color: '#1AB101F7', backgroundColor: '#76FA8B', image: IMAGES.feelings.worry, number: 5},
    {name: 'Normal', color: '#BBBD2D', backgroundColor: '#F7E7AE', image: IMAGES.feelings.normal, number: 6},
    {name: 'Depression', color: '#E89D00', backgroundColor: '#F3BC48', image: IMAGES.feelings.depression, number: 7},
];
