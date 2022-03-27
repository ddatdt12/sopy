import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {authApi} from '@src/api';

export type AuthState = Partial<{
    token: string;
    user: User;
    error: string;
}>;

const login = createAsyncThunk('auth/login', async (firebase_user_id: string) => {
    const authState = await authApi.login(firebase_user_id);
    return authState;
});
const register = createAsyncThunk('auth/register', async (user: FirebaseAuthTypes.User) => {
    const authState = await authApi.register({
        firebase_user_id: user?.uid,
        email: user.email,
        name: user.displayName,
        picture: user.photoURL,
    });
    return authState;
});

export const initialState: AuthState = {
    error: undefined,
    token: undefined,
    user: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            return initialState;
        },
        update: (state, action: PayloadAction<AuthState>) => {
            state = {...state, ...action.payload};
        },
    },
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            console.log('Pending login');
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
            return {...state, loading: false, ...action.payload};
        });
        builder.addCase(login.rejected, () => {
            return initialState;
        });
        builder.addCase(register.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
            return {...state, loading: false, ...action.payload};
        });
        builder.addCase(register.rejected, (state, action: PayloadAction<any>) => {
            return initialState;
        });
    },
});

export const authActions = {
    ...authSlice.actions,
    login,
    register,
};
