export type Post = {
    id: string;
    title: string;
    emotion: number; //  Post: >0, Event: 0
    detail: string;
    picture: string;
    firebase_user_id: string;
    expert: User;
    created_at?: number;
    updated_at?: Date;
    deleted?: boolean;
    deleted_at?: Date;
};

export type User = {
    id: string;
    name: string;
    email: string;
    firebase_user_id: string;
    bio: string;
    picture?: string;
    is_expert: boolean;
    created_at?: Date;
    updated_at?: Date;
    deleted?: boolean;
    deleted_at?: Date;
};

export type Feel = {
    id: string;
    firebase_user_id: string;
    feel_id: number;
    reason: string;
    created_at?: number;
    updated_at?: Date;
    deleted?: boolean;
    deleted_at?: Date;
};
