import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORE_KEY} from '@src/assets/const';

class TokenService {
    getLocalRefreshToken = async () => {
        try {
            const refreshToken = await AsyncStorage.getItem(STORE_KEY.REFRESH_TOKEN);
            return refreshToken;
        } catch {
            return null;
        }
    };

    getLocalAccessToken() {}

    updateLocalAccessToken(token: any) {}
}
