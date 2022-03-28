import {BASE_URL} from '@src/assets/const';
import {User} from '@src/types';
import axios from 'axios';
import axiosInstance, {setToken} from './instance';

const userApi = {
    getProfile: async (firebase_user_id: string): Promise<User> => {
        setToken(firebase_user_id);
        const {
            data: {data},
        } = await axiosInstance.post('/user/login');
        console.log('Login status: ', data);
        return data;
    },
    updateProfile: async (user: User): Promise<User> => {
        //const [profile, setProfile] = useState(user)
        console.log('preeee update: ', user);
        const config = {
            headers: {
                'x-firebase-uid': user.firebase_user_id,
            },
        };
        const body = {
            name: user.name,
            picture: user.picture,
            bio: user.bio,
            is_expert: user.is_expert,
        };
        axios
            .put(`${BASE_URL}/user`, body, config)
            .then(res => {
                console.log('update successfully: ', res.data);
                return res.data;
            })
            .catch(err => console.log('update error: ', err));
        return user;
    },
    getAllUsers: async (): Promise<User[]> => {
        const {
            data: {data},
        } = await axiosInstance.get('user/all');
        return data;
    },
};

export default userApi;
