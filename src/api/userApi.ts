import axiosInstance from './instance';

const userApi = {
    getProfile: async () => {
        const res = await axiosInstance.get('user/get-info');
        console.log('res', res);

        return res.data;
    },
};

export default userApi;
