import axiosInstance from './instance';

const chatApi = {
    getMessages: (userid: string, id: string) => axiosInstance.get(`/chat/getall/${userid}/${id}`),
    getSocket: (userid: string, id: string) => axiosInstance.get(`/chat/${userid}/${id}`),
    getUserConversations: async (userId: string) => {
        const {data} = await axiosInstance.get(`chat/conversations/${userId}`);
        return data;
    },
    updateShowEmotionWithExpert: async (userId: string, partnerId: string) => {
        const {data} = await axiosInstance.put(`chat/emotion/${userId}/${partnerId}`, {
            ShowEmotion: true,
        });
        return data;
    },
};
export default chatApi;
