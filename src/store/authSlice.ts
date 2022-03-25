import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authApi} from '@src/api';

export type AuthState = Partial<{
    token: string;
    user: User;
    loading: boolean;
    error: string;
}>;

const login = createAsyncThunk('auth/login', async (data: any) => {
    const authState = await authApi.login(data);
    return authState;
});
const register = createAsyncThunk('auth/register', async (data: any) => {
    const authState = await authApi.register(data);
    return authState;
});

export const initialState: AuthState = {
    error: undefined,
    loading: false,
    token: undefined,
    user: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loading: state => {
            state.loading = true;
        },
        logout: state => {
            return initialState;
        },
        stopLoading: state => {
            state.loading = false;
        },
        update: (state, action: PayloadAction<AuthState>) => {
            state = {...state, ...action.payload};
        },
    },
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
            return {...state, loading: false, ...action.payload};
        });
        builder.addCase(login.rejected, (state, {error}) => {
            return initialState;
        });
        builder.addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
            return {...state, loading: false, ...action.payload};
        });
    },
});

export const authActions = {
    ...authSlice.actions,
    login,
    register,
};
