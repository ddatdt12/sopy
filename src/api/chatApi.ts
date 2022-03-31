import axiosInstance from './instance';

const chatApi = {
    getMessages: (userid: string, id: string) => axiosInstance.get(`/chat/getall/${userid}/${id}`),
    getUserConversations: async (userId: string) => {
        const {data} = await axiosInstance.get(`chat/conversations/${userId}`);
        return data;
    },
    updateShowEmotionWithExpert: async (userId: string, partnerId: string) => {
        const {data} = await axiosInstance.put(`chat/emotion/${userId}/${partnerId}`);
        return data;
    },
    sendMessage: async (message: any) => {
        const {
            data: {data},
        } = await axiosInstance.post(`chat/${message.senderId}`, {
            ...message,
        });
        return data;
    },
};
export default chatApi;
