import {Post} from '@src/types';
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
        console.log('Events:', data);
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
    getPostsOfUser: async (firebase_user_id: string): Promise<Post[]> => {
        const {
            data: {data},
        } = await axiosInstance.get('/post');
        if (Array.isArray(data)) {
            return (data as Post[]).filter(p => p.firebase_user_id === firebase_user_id && p.emotion > 0);
        }
        return data;
    },
    getEventsOfUser: async (firebase_user_id: string): Promise<Post[]> => {
        const {
            data: {data},
        } = await axiosInstance.get('/post');
        if (Array.isArray(data)) {
            return (data as Post[]).filter(
                p => p.firebase_user_id === firebase_user_id && (!p.emotion || p.emotion === 0),
            );
        }
        return data;
    },
    getAllPostOfUser: async (firebase_user_id: string): Promise<Post[]> => {
        const {
            data: {data},
        } = await axiosInstance.get('/post');
        if (Array.isArray(data)) {
            return (data as Post[]).filter(p => p.firebase_user_id === firebase_user_id);
        }
        return data;
    },
    getTop5NewPost: async (): Promise<Post[]> => {
        const {
            data: {data},
        } = await axiosInstance.get('/post/top5/-1');
        return data as Post[];
    },
};

export default postApi;
