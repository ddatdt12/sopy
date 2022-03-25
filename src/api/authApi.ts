import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AuthState} from '@src/store/authSlice';
import axiosInstance, {setToken} from './instance';
const userApi = {
    login: async (firebase_user_id: string): Promise<AuthState> => {
        setToken(firebase_user_id);
        const {
            data: {data},
        } = await axiosInstance.post('/user/login');
        console.log('Login status: ', data);

        return {
            token: firebase_user_id,
            user: {...data},
        };
    },
    register: async (user: any): Promise<AuthState> => {
        console.log('before call api register:', user);
        const {
            data: {data},
        } = await axiosInstance.post('/user', user);
        console.log('Register status: ', data);
        return {
            token: data.firebase_user_id,
            user: {...data},
        };
    },
};

export default userApi;
