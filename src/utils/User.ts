import {User} from '@src/types';

const getRandomUser = (arr: User[], exclude?: User) => {
    let user;
    while (!user) {
        const randomUser = arr[Math.floor(Math.random() * arr.length)];
        if (randomUser.firebase_user_id !== exclude?.firebase_user_id) {
            user = randomUser;
        }
    }

    return user;
};

export {getRandomUser};
