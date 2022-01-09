import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authApi} from '@src/api';

export type AuthState = Partial<{
    token: string;
    refreshToken: string;
    userId: string;
    profile: any;
}>;

const login = createAsyncThunk('auth/login', async (data: any, thunkAPI) => {
    // NOTE
    const response = await authApi.login(data);
    return response;
});

export const initialState: AuthState = {};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<AuthState>) => {
            state = {...state, ...action.payload};
        },
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
            state = action.payload;
        });
        builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
            state = {};
        });
    },
});

export const authActions = {
    ...authSlice.actions,
    login,
};
