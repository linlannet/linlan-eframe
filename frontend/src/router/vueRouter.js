import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '/src/views/HomePage.vue'
import LoginPage from '/src/views/login/index.vue'
import NProgress from 'nprogress'// progress bar
import 'nprogress/nprogress.css'
import { getToken } from '../utils/auth.js'
import vueStore from '../store/vueStore.js'
import { notification } from 'ant-design-vue'

// 定义路由规则：请求相应的路径时，展示对应的页面
const routes = [
    {
        path: '/',
        component: LoginPage,
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
        children: [
            {
                name: 'Workbench',
                path: 'workbench',
                component: () => import('/src/views/workbench/WorkbenchPage.vue'),
            },
            {
                name: 'thirdLogin',
                path: 'thirdLogin',
                component: () => import('/src/views/profile/third-login.vue'),
            },
            {
                // 进入主页后，二级路由直接显示工作台页面
                path: '/',
                component: () => import('/src/views/workbench/WorkbenchPage.vue')
            },
        ]
    }
]

// 创建一个路由实例
const vueRouter = createRouter({
    history: createWebHashHistory(), // createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// 白名单
const whiteList = ['/', '/login', '/auth-redirect', '/bind', '/register'];

// 通过import.meta.glob进行动态引入页面
const modules = import.meta.glob('/src/views/**/*.vue');

// 每次访问路由前的处理：控制前端页面访问权限
vueRouter.beforeEach(async (to, from) => {

    // 开启进度条
    NProgress.start();
    // 已经获取到token
    if (getToken()) {
        // 全局设置信息
        to.meta.title && vueStore.dispatch('settings/setTitle', to.meta.title);

        // 已经获取到token，跳过登陆直接进入主页
        if (to.path === '/' || to.path === '/login') {
            vueRouter.push({ path: '/home' });
            NProgress.done();
        } else {
            // 判断当前用户是否已拉取完user_info信息，如果尚未拉取用户信息，请求后台进行获取
            if (vueStore.getters.roles.length === 0) {
                console.log('[开始]-获取用户信息');
                // await关键字只能放到async函数里面，并且需要成对使用
                await vueStore
                    .dispatch('GetUserInfo_Action')
                    .then(async () => {
                        console.log('[完成]-获取用户信息');
                        // await关键字只能放到async函数里面，并且需要成对使用
                        console.log('[开始]-获取路由信息');
                        await vueStore.dispatch('GenerateRoutes_Action').then((accessRoutes) => {
                            console.log('[完成]-获取路由信息');
                            console.log('[开始]-将用户可以访问的菜单添加到路由表');
                            for (let index = 0; index < accessRoutes.length; index++) {
                                // 获取父路由
                                const fatherRoute = accessRoutes[index];



                                // 如果父路由是超链接，暂时先不处理
                                if (fatherRoute.meta && fatherRoute.meta.link && fatherRoute.meta.link != 'null') {
                                    // TODO
                                } else {
                                    // 添加父路由-一级菜单
                                    // vueRouter.addRoute({
                                    //   name: fatherRoute.name,
                                    //   path: fatherRoute.path,
                                    //   component: HomePage, // 一级菜单必须的有component，而且必须为之前的一级菜单HomePage
                                    // });

                                    // 循环父路由中的子路由
                                    if (fatherRoute.children && fatherRoute.children.length) {
                                        const childRouteArr = fatherRoute.children;
                                        for (let i = 0; i < childRouteArr.length; i++) {
                                            const childRoute = childRouteArr[i];
                                            // 向当前的父路由中添加子路由-二级菜单
                                            if (childRoute.component && childRoute.component != 'ParentView') {
                                                addDynamicRoute(childRoute)
                                                if (childRoute.children && childRoute.children.length) {
                                                    const threeLevelRouteArr = childRoute.children;
                                                    // 向当前的父路由中添加子路由-三级菜单
                                                    for (let j = 0; j < threeLevelRouteArr.length; j++) {
                                                        const threeLevelRoute = threeLevelRouteArr[j];
                                                        addDynamicRoute(threeLevelRoute)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                            vueRouter.push({ path: to.path })
                        });
                    })
                    .catch((err) => {
                        notification.error({
                            message: '错误提示信息',
                            description: err
                        })
                    })
                // 二级路由刷新页面时，出现白屏不能显示对应页面，重新获取用户信息后，再次请求对应路由
            }
        }
    } else {
        // 没有token
        if (whiteList.indexOf(to.path) !== -1) {
            // 在免登录白名单，直接进入
        } else {
            vueRouter.push({ path: '/login' }); // 否则全部重定向到登录页
            NProgress.done();
        }
    }
});

// 动态新增路由项
const addDynamicRoute = function(dynamicRoute) {
    if (dynamicRoute.component && dynamicRoute.component != 'ParentView') {
        let routeUrl = '/src/views' + dynamicRoute.component + '.vue'
        if (modules[routeUrl]) {
            // 先取菜单，如果没有，则使用组件作为路由使用
            let name = dynamicRoute.name || dynamicRoute.component
            // 默认注册路不传入参数
            let path = name.split('?')[0]
            vueRouter.addRoute('HomePage', {
                name: name,
                path: path,
                component: modules[routeUrl],
            });
        }
    }
}
const addDynamicRoute2 = function(dynamicRoute) {
    if (dynamicRoute.component && dynamicRoute.component != 'ParentView') {
        let routeUrl = '/src/views' + dynamicRoute.component + '.vue'
        if (modules[routeUrl]) {
            vueRouter.addRoute('HomePage', {
                name: dynamicRoute.name,
                path: dynamicRoute.path,
                component: modules[routeUrl],
            });
        }
    }
}

// 每次访问路由后的处理
vueRouter.afterEach(() => {
    NProgress.done();
});

export default vueRouter;
