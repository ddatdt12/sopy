import axiosInstance from './instance';

const chatApi = {
    getMessages: (userid: string, id: string) => axiosInstance.get(`/chat/getall/${userid}/${id}`),
    getSocket: (userid: string, id: string) => axiosInstance.get(`/chat/${userid}/${id}`),
    getUserConversations: async (userId: string) => {
        console.log(userId);
        const {data} = await axiosInstance.get(`chat/conversations/${userId}`);

        console.log(data);
        return data;
    },
};
export default chatApi;
