const authApi = {
    login: (data: any) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    token: 'token',
                    refreshToken: 'refreshToken',
                    user: {
                        id: 'userId',
                        name: 'name',
                        email: 'email',
                        role: 'expert',
                        avatar: 'https://picsum.photos/200',
                    },
                });
            }, 1000);
        });
    },

    refreshToken: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    token: 'token',
                    refreshToken: 'refreshToken',
                    user: {
                        id: 'userId',
                        name: 'name',
                        email: 'email',
                    },
                });
            }, 1000);
        });
    },
};

export default authApi;
