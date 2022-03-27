// import {BASE_URL} from '@src/assets/const';
import axios, {AxiosRequestConfig} from 'axios';

const BASE_URL = 'https://mental-health-gdsc-app.herokuapp.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;

export const setToken = (token?: string) => {
    // @ts-ignore
    axiosInstance.defaults.headers['x-firebase-uid'] = token;
};
const getUrl = (config: AxiosRequestConfig) => {
    if (BASE_URL) {
        return config.url?.replace(BASE_URL, '').split('?')[0];
    }
    return config.url;
};

// export const setupInterceptors = (store: IStore) => {
//     axiosInstance.interceptors.request.use(
//         config => {
//             store.getState().auth.token;
//             const token = store.getState().auth.token;

//             if (token) {
//                 // @ts-ignore
//                 config.headers['x-access-token'] = `Bearer ${token}`;
//             }

//             const url = getUrl(config);
//             console.log(`%c ${config.method?.toUpperCase()} - ${url}:`, 'color: #0086b3; font-weight: bold', config);

//             return config;
//         },
//         error => {
//             console.log(`%c ${error.response?.status}  :`, 'color: red; font-weight: bold', error.response?.data);
//             return Promise.reject(error);
//         },
//     );

//     axiosInstance.interceptors.response.use(
//         (response: AxiosResponse) => {
//             const url = getUrl(response.config);
//             console.log(` %c ${response.status} - ${url}:`, 'color: #008000; font-weight: bold', response);

//             return response;
//         },
//         async (err: AxiosError) => {
//             const originalConfig = err.config;
//             const whiteList = ['/auth/login'];

//             const url = getUrl(originalConfig);

//             if (url && whiteList.includes(url) === false) {
//                 // @ts-ignore
//                 if (err.response?.status === 401 && !originalConfig._isRetry) {
//                     try {
//                         // NOTE
//                         const res = await authApi.refreshToken();
//                         store.dispatch(authActions.update(res as any));

//                         // @ts-ignore
//                         originalConfig._isRetry = true;
//                         return axiosInstance(originalConfig);
//                     } catch (_error) {
//                         return Promise.reject(_error);
//                     }
//                 }
//             }

//             return Promise.reject(err);
//         },
//     );
// };
