export type Feeling = {
    name: string;
    color: string;
    value: number;
    y?: number;
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

export default feelingStatistics;
