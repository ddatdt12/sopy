import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AuthState} from '@src/store/authSlice';
import axiosInstance, {setToken} from './instance';
const userApi = {
    login: async (firebaseUser: FirebaseAuthTypes.User): Promise<AuthState> => {
        setToken(firebaseUser.uid);
        const {
            data: {data},
        } = await axiosInstance.get('/user/login');
        console.log('Login status: ', data);
        return {
            token: firebaseUser.uid,
            user: {...data},
        };
    },
    register: async (user: any): Promise<AuthState> => {
        setToken(user.uid);
        console.log('before call api register:', user);
        const {data} = await axiosInstance.post('/user', user);
        console.log('Login status: ', data);
        return {
            token: user.uid,
            user: {...data},
        };
    },
};

export default userApi;
