import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import axiosInstance from './instance';
const authApi = {
    login: async (firebaseUser: FirebaseAuthTypes.User) => {
        const {
            data: {data},
        } = await axiosInstance.post('/user/get-info', {});
        console.log(data);
        return data;
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve({
        //             token: 'token',
        //             refreshToken: 'refreshToken',
        //             user: {
        //                 id: 'userId',
        //                 name: 'Đạt Đỗ',
        //                 email: data.email,
        //                 firebase_user_id: data.uid,
        //                 bio: String,
        //                 is_expert: true,
        //                 avatar: 'https://picsum.photos/200',
        //             },
        //         });
        //     }, 1000);
        // });
    },

    register: async (user: any) => {
        const {
            data: {data},
        } = await axiosInstance.post('/user', {...user});
        return data;
    },
};

export default authApi;
