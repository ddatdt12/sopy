import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const authApi = {
    login: (data: FirebaseAuthTypes.User) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    token: 'token',
                    refreshToken: 'refreshToken',
                    user: {
                        id: 'userId',
                        name: 'Đạt Đỗ',
                        email: data.email,
                        firebase_user_id: data.uid,
                        bio: String,
                        is_expert: true,
                        avatar: 'https://picsum.photos/200',
                    },
                });
            }, 1000);
        });
    },

    refreshToken: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    token: 'token',
                    refreshToken: 'refreshToken',
                    user: {
                        id: 'userId',
                        name: 'name',
                        email: 'email',
                    },
                });
            }, 1000);
        });
    },
};

export default authApi;
