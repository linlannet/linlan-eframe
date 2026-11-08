import { login, logout, getInfo } from '../../api/login';
import { smsLogin,socialLogin } from '../../api/user';
import { getToken, setToken, removeToken } from '/src/utils/auth';

const user = {
    state: {
        token: getToken(),
        username: '',
        imagePath: '',
        roles: [],
        permissions: [],
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USERNAME: (state, username) => {
            state.name = username;
        },
        SET_NICKNAME: (state, nickName) => {
            state.nickName = nickName;
        },
        SET_IMAGE_PATH: (state, imagePath) => {
            state.imagePath = imagePath;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
        SET_PERMISSIONS: (state, permissions) => {
            state.permissions = permissions;
        },
    },

    // actions中的命名增加“_Action”结尾，便于全局查找定位
    actions: {
        // 登录
        Login_Action({ commit }, loginInfo) {
            return new Promise((resolve, reject) => {
                login(loginInfo)
                    .then((res) => {
                        setToken(res.data.token);
                        commit('SET_TOKEN', res.data.token);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        smsLogin_Action({ commit }, loginInfo) {
            return new Promise((resolve, reject) => {
                smsLogin(loginInfo)
                    .then((res) => {
                        setToken(res.data.token);
                        commit('SET_TOKEN', res.data.token);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        thirdLogin_Action({ commit }, loginInfo) {
            return new Promise((resolve, reject) => {
                socialLogin(loginInfo)
                    .then((res) => {
                        setToken(res.data.token);
                        commit('SET_TOKEN', res.data.token);
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        // 获取用户信息
        GetUserInfo_Action({ commit, state }) {
            return new Promise((resolve, reject) => {
                getInfo()
                    .then((res) => {
                        // console.log('res=' + JSON.stringify(res));
                        const user = res.data.user;
                        // console.log('user=' + JSON.stringify(user));
                        const imagePath = user.imagePath;
                        // const imagePath = user.imagePath == "" ? require("/src/assets/images/profile.jpg") : user.imagePath;
                        if (res.data.roles && res.data.roles.length > 0) {
                            // 验证返回的roles是否是一个非空数组
                            commit('SET_ROLES', res.data.roles);
                            commit('SET_PERMISSIONS', res.data.permissions);
                        } else {
                            commit('SET_ROLES', ['ROLE_DEFAULT']);
                        }
                        commit('SET_USERNAME', user.username);
                        commit('SET_NICKNAME', user.nickName);
                        commit('SET_IMAGE_PATH', imagePath);
                        resolve(res);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        // 退出系统
        LogOut_Action({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token)
                    .then(() => {
                        commit('SET_TOKEN', '');
                        commit('SET_ROLES', []);
                        commit('SET_PERMISSIONS', []);
                        removeToken();
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },

        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise((resolve) => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve();
            });
        },
    },
};

export default user;
