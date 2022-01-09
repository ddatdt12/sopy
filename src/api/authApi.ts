const authApi = {
    login: (data: any) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    token: 'token',
                    refreshToken: 'refreshToken',
                    userId: 'userId',
                    profile: {
                        name: 'name',
                        email: 'email',
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
                    userId: 'userId',
                    profile: {
                        name: 'name',
                        email: 'email',
                    },
                });
            }, 1000);
        });
    },
};

export default authApi;
