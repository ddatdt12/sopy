export type Feeling = {
    name: string;
    color: string;
    value: number;
    y?: number;
    x?: 13;
    percentage?: string;
};
export type FeelingColor = {
    label: string;
    color: string;
};
export type Diary = {
    id: string;
    feel: string;
    reason: string;
    time: Date;
};

const feelingStatistics: Feeling[] = [
    {
        name: 'Happy',
        color: '#FFAAC9',
        value: 17,
    },
    {
        name: 'Sad',
        color: '#84B8F0',
        value: 30,
    },
    {
        name: 'Worry',
        color: '#9BE98F',
        value: 30,
    },
    {
        name: 'Normal',
        color: '#E9E01A',
        value: 40,
    },
    {
        name: 'Angry',
        color: '#AB6ADE',
        value: 60,
    },
    {
        name: 'Depression',
        color: '#EFA922',
        value: 10,
    },
    {
        name: 'Scared',
        color: '#A3A8AE',
        value: 5,
    },
];

const feelingColors: FeelingColor[] = [
    {
        label: 'Happy',
        color: '#FFAAC9',
    },
    {
        label: 'Sad',
        color: '#84B8F0',
    },
    {
        label: 'Worry',
        color: '#9BE98F',
    },
    {
        label: 'Normal',
        color: '#E9E01A',
    },
    {
        label: 'Angry',
        color: '#AB6ADE',
    },
    {
        label: 'Depression',
        color: '#EFA922',
    },
    {
        label: 'Scared',
        color: '#A3A8AE',
    },
];
const diaryList: Diary[] = [
    {
        id: '1',
        feel: 'Happy',
        reason: 'Vì em có ny mới',
        time: new Date(),
    },
    {
        id: '2',
        feel: 'Sad',
        reason: 'Mới chia tay',
        time: new Date(),
    },
    {
        id: '123',
        feel: 'Sad',
        reason: 'CHả biết vì sao buồn',
        time: new Date(),
    },
    {
        id: '3',
        feel: 'Depression',
        reason: 'Điểm em thấp',
        time: new Date(),
    },
    {
        id: '4',
        feel: 'Scared',
        reason: 'Em bị hù',
        time: new Date(),
    },
    {
        id: '5',
        feel: 'Worry',
        reason: 'Lo lắng vì hết tiền mua đồ',
        time: new Date(),
    },
    {
        id: '6',
        feel: 'Normal',
        reason: 'Cuộc sống nhạt',
        time: new Date(),
    },
    {
        id: '7',
        feel: 'Happy',
        reason: 'Có học bổng',
        time: new Date(),
    },
    {
        id: '8',
        feel: 'Happy',
        reason: 'Có tiền',
        time: new Date(),
    },
    {
        id: '9',
        feel: 'Angry',
        reason: 'Em mất đồ, huhu',
        time: new Date(),
    },
];

export {feelingStatistics, feelingColors, diaryList};
