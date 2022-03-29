import {Feel} from '@src/types';
import axiosInstance from './instance';

const feelApi = {
    getUserFeel: async (): Promise<Feel[]> => {
        const {
            data: {data},
        } = await axiosInstance.get('/user-feel');

        return data;
    },
    createFeel: async (feel: Feel): Promise<Feel[]> => {
        const {
            data: {data},
        } = await axiosInstance.post('/user-feel', {...feel});

        return data;
    },
};

export default feelApi;
