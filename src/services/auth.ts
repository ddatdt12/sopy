import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

const googleSignIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        await GoogleSignin.signIn();
        const {idToken} = await GoogleSignin.getTokens();
        const credential = auth.GoogleAuthProvider.credential(idToken);
        const userCredential = await auth().signInWithCredential(credential);
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
export type AuthResponse = Partial<{
    user: FirebaseAuthTypes.User;
    error: string;
}>;
export type LoginData = {
    email: string;
    password: string;
};
const emailPasswordLogin = async ({email, password}: LoginData): Promise<AuthResponse> => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        console.log('User account created & signed in!');

        return {
            user: userCredential.user,
            error: undefined,
        };
    } catch (error: any) {
        let errorMessage = 'Something went wrong!';

        if (error.code === 'auth/email-already-in-use') {
            errorMessage = 'That email address is already in use!';
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = 'Wrong email or password!';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'That email address is invalid!';
        }

        return {
            user: undefined,
            error: errorMessage,
        };
    }
};
const emailPasswordRegister = async ({email, password}: LoginData): Promise<AuthResponse> => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        console.log('User account created & signed in!');

        return {
            user: userCredential.user,
            error: undefined,
        };
    } catch (error: any) {
        let errorMessage = 'Something went wrong!';

        if (error.code === 'auth/email-already-in-use') {
            errorMessage = 'That email address is already in use!';
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = 'Wrong email or password!';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'That email address is invalid!';
        }

        return {
            user: undefined,
            error: errorMessage,
        };
    }
};
const facebookLogin = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
        throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
        throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return (await auth().signInWithCredential(facebookCredential)).user;
};
const firebaseLogout = async () => {
    try {
        await auth().signOut();
        console.log('Success logout');
    } catch (error) {
        console.log('Error', error);
    }
};
export {googleSignIn, facebookLogin, emailPasswordLogin, emailPasswordRegister, firebaseLogout};
