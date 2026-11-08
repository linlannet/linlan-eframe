// import { constantRoutes } from '/src/router'
import { getIndexRouters } from '/src/api/menu';
// import Layout from '/src/layout/index'
// import ParentView from '/src/components/ParentView';
// import InnerLink from '/src/layout/components/InnerLink'

const permission = {
    state: {
        routes: [],
        addRoutes: [],
        defaultRoutes: [],
        topbarRouters: [],
        sidebarRouters: [],
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.addRoutes = routes;
            // state.routes = constantRoutes.concat(routes)
        },
        SET_DEFAULT_ROUTES: (state, routes) => {
            // state.defaultRoutes = constantRoutes.concat(routes)
        },
        SET_TOPBAR_ROUTES: (state, routes) => {
            // 顶部导航菜单默认添加统计报表栏指向首页
            const index = [
                {
                    path: 'index',
                    meta: { title: '统计报表', icon: 'dashboard' },
                },
            ];
            state.topbarRouters = routes.concat(index);
        },
        SET_SIDEBAR_ROUTERS: (state, routes) => {
            state.sidebarRouters = routes;
        },
    },
    actions: {
        // 生成路由
        GenerateRoutes_Action({ commit }) {
            return new Promise((resolve) => {
                // 向后端请求路由数据
                getIndexRouters().then((res) => {
                    let routeData = listToTree(res.data.menuList,[],0);
                    const sdata = JSON.parse(JSON.stringify(routeData));
                    const rdata = JSON.parse(JSON.stringify(routeData));
                    const sidebarRoutes = filterAsyncRouter(sdata);
                    const rewriteRoutes = filterAsyncRouter(rdata, false, true);
                    rewriteRoutes.push({ path: '*', redirect: '/404', hidden: true });
                    commit('SET_ROUTES', rewriteRoutes);
                    commit('SET_SIDEBAR_ROUTERS', sidebarRoutes);
                    // commit('SET_SIDEBAR_ROUTERS', constantRoutes.concat(sidebarRoutes))
                    commit('SET_DEFAULT_ROUTES', sidebarRoutes);
                    commit('SET_TOPBAR_ROUTES', sidebarRoutes);
                    resolve(rewriteRoutes);
                });
            });
        },
    },
};


// 菜单数据重组(兼容老项目)
const listToTree = function(oldArr, newArr, parentId) {
    oldArr.forEach((item) => {
        const ele = {
            name: item.url ,
            id: item.id,
            parentId: item.parentId,
            path: item.url || item.menuSeq || ('/' + item.id),
            component: item.menuSeq || item.id,
            meta: { title: item.name, icon: item.icon }
        }
        if (ele.parentId == parentId) {
            //当内层循环的ID== 外层循环的parendId时，（说明有children），需要往该内层id里建个children并push对应的数组；
            ele.children = listToTree(oldArr, [], ele.id)
            newArr.push(ele)
        }
    })
    return newArr
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, lastRouter = false, type = false) {
    return asyncRouterMap.filter((route) => {
        if (type && route.children) {
            route.children = filterChildren(route.children);
        }
        if (route.component) {
            // Layout ParentView 组件特殊处理
            // if (route.component === 'Layout') {
            //   route.component = Layout
            // } else if (route.component === 'ParentView') {
            //   route.component = ParentView
            // } else if (route.component === 'InnerLink') {
            //   route.component = InnerLink
            // } else {
            //   route.component = loadView(route.component)
            // }
        }
        if (route.children != null && route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children, route, type);
        } else {
            delete route['children'];
            delete route['redirect'];
        }
        return true;
    });
}

function filterChildren(childrenMap, lastRouter = false) {
    var children = [];
    childrenMap.forEach((el, index) => {
        if (el.children && el.children.length) {
            if (el.component === 'ParentView') {
                el.children.forEach((c) => {
                    c.path = el.path + '/' + c.path;
                    if (c.children && c.children.length) {
                        children = children.concat(filterChildren(c.children, c));
                        return;
                    }
                    children.push(c);
                });
                return;
            }
        }
        if (lastRouter) {
            el.path = lastRouter.path + '/' + el.path;
        }
        // el.component = () => import("/src/views/Menu.vue");
        children = children.concat(el);
    });
    return children;
}

export const loadView = (view) => {
    // 路由懒加载
    return (resolve) => require([`@/views/${view}`], resolve);
};

export default permission;
