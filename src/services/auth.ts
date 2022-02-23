import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import {auth} from '@src/config/firebase';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';

const googleSignIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        await GoogleSignin.signIn();
        const {idToken, accessToken} = await GoogleSignin.getTokens();
        const credential = GoogleAuthProvider.credential(idToken, accessToken);
        const userCredential = await signInWithCredential(auth, credential);
        return {user: userCredential.user, error: null};
    } catch (error: any) {
        let errorMessage: string | null = null;
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login fRlow
            errorMessage = 'User just cancel google sign in';
        } else if (error.code === statusCodes.IN_PROGRESS) {
            errorMessage = 'Signin in progress';
            // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            errorMessage = 'Play service is not available';
            // play services not available or outdated
        } else {
            errorMessage = error.message;
        }
        return {user: null, error: errorMessage};
    }
};

export {googleSignIn};
