// import tab from './tab'
// import auth from './auth'
// import cache from './cache'
import modal from './modal'
// import download from './download'

export default {
    install(app) {
        // 页签操作
        // Vue.prototype.$tab = tab
        // 认证对象
        // Vue.prototype.$auth = auth
        // 缓存对象
        // Vue.prototype.$cache = cache
        // 模态框对象
        app.config.globalProperties.$modal = modal
        // 下载文件
        // Vue.prototype.$download = download
    }
}
