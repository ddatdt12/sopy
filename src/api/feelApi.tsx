import {Feel} from '@src/types';
import axiosInstance, {setToken} from './instance';

const feelApi = {
    getUserFeel: async (firebase_user_id: string): Promise<Feel[]> => {
        setToken(firebase_user_id);
        const {
            data: {data},
        } = await axiosInstance.get('/user-feel');

        return data;
    },
    createFeel: async (feel: Feel): Promise<Feel[]> => {
        setToken(feel.firebase_user_id);
        const {
            data: {data},
        } = await axiosInstance.post('/user-feel', {...feel});

        return data;
    },
};

export default feelApi;
