import axiosInstance from './instance';

const userApi = {
    getProfile: async () => {
        const res = await axiosInstance.get('user/get-info');
        return res.data;
    },
    getAllUsers: async (): Promise<User[]> => {
        const {
            data: {data},
        } = await axiosInstance.get('user/all');
        return data;
    },
};

export default userApi;
