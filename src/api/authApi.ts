const authApi = {
    login: (data: any) => {
        return new Promise((resolve, reject) => {
            // reject('Error cho zui');
            setTimeout(() => {
                resolve({
                    token: 'token',
                    refreshToken: 'refreshToken',
                    user: {
                        id: 'userId',
                        name: 'name',
                        email: 'email',
                        role: 'user',
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
