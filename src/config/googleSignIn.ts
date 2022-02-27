import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '1029761536101-5mn92qjl1n19i97k4o1ialphq1h64htv.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    forceCodeForRefreshToken: true,
});
