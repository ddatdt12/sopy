import {isIOS} from '@core/utils';
import storage from '@react-native-firebase/storage';

const uploadImage = async (uri: string) => {
    const filename = uri.substring(uri.lastIndexOf('/') + 1) + new Date().valueOf();
    const uploadUri = isIOS ? uri.replace('file://', '') : uri;
    const imageRef = await storage().ref(`profiles/${filename}`);
    try {
        await imageRef.putFile(uploadUri, {});
        const url = await imageRef.getDownloadURL();
        return {url};
    } catch (e: any) {
        console.error(e);
        return {error: e?.message};
    }
};

export {uploadImage};
