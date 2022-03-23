import axiosInstance from './instance';

const postApi = {
    getAllPosts: async (): Promise<Post[]> => {
        const {
            data: {data},
        } = await axiosInstance.get('/post');
        if (Array.isArray(data)) {
            return data.filter(p => p.emotion > 0);
        }
        return data;
    },
    getAllEvents: async (): Promise<Post[]> => {
        const {
            data: {data},
        } = await axiosInstance.get('/post');
        if (Array.isArray(data)) {
            return data.filter(p => !p.emotion || p.emotion === 0);
        }
        return data;
    },
    getPostDetails: async (postId?: string): Promise<void> => {
        const {
            data: {data},
        } = await axiosInstance.get(`/post/${postId}`);

        return data;
    },
    createPost: async (post: any): Promise<void> => {
        await axiosInstance.post('/post', {
            ...post,
        });
    },
    updatePost: async (post: Post): Promise<Post> => {
        const {
            data: {data},
        } = await axiosInstance.put(`/post/${post.id}`, {...post});
        return data;
    },
    deletePost: async (postId: string): Promise<Post> => {
        const {
            data: {data},
        } = await axiosInstance.delete(`/post/${postId}`);
        return data;
    },
};

export default postApi;
