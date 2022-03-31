// EVENT_emotion = 0
// POST__happy = 1
// POST__sad = 2
// POST__scared = 3
// POST__angry = 4
// POST__worry = 5
// POST__normal = 6

import dayjs from 'dayjs';

// POST__depression = 7
const POST_EMOTION = ['Happy', 'Sad', 'Scared', 'Angry', 'Worry', 'Normal', 'Depression'];
const convertEmotion = (value: number | string) => {
    if (typeof value === 'number') {
        if (value < 0 || value > 7) {
            throw new Error('Invalid emotion value');
        }
        return POST_EMOTION[value];
    }

    if (typeof value === 'string') {
        return POST_EMOTION.indexOf(value);
    }
};

const isDateEqual = (date1: Date, date2: Date) => {
    const test = dayjs(date1).diff(dayjs(date2), 'day');
    return dayjs(date1).diff(dayjs(date2), 'day') === 0;
};
export {convertEmotion, POST_EMOTION, isDateEqual};
