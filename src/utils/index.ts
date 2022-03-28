// EVENT_emotion = 0
// POST__happy = 1
// POST__sad = 2
// POST__scared = 3
// POST__angry = 4
// POST__worry = 5
// POST__normal = 6
// POST__depression = 7
const POST_EMOTION = ['Happy', 'Sad', 'Scared', 'Angry', 'Worry', 'Normal', 'Depression'];
const convertEmotionIntoNumber = (value: number | string) => {
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
export {convertEmotionIntoNumber, POST_EMOTION};
