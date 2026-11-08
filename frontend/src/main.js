import { createApp } from 'vue'
import App from './App.vue'
import vueRouter from './router/vueRouter.js'
import vueStore from './store/vueStore.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import directive from './directive'
import VueHighlightJS from 'vue3-highlightjs'
import 'vue3-highlightjs/styles/solarized-light.css'
import plugins from './plugins' // plugins
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia()
pinia.use(piniaPersist)
// ElementPlus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import iconSvg from './components/icon-svg/index.vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component("iconSvg",iconSvg)//svg读取组件

// 分页组件
import Pagination from "@/components/Pagination/index.vue"
// 文件上传组件
import FileUpload from "@/components/FileUpload/index.vue"
// 图片上传组件
import ImageUpload from "@/components/ImageUpload/index.vue"
// 图片预览组件
import ImagePreview from "@/components/ImagePreview/index.vue"
// 字典标签组件
import DictTag from '@/components/DictTag/index.vue'

// 全局组件挂载
app.component('DictTag', DictTag)
app.component('Pagination', Pagination)
app.component('FileUpload', FileUpload)
app.component('ImageUpload', ImageUpload)
app.component('ImagePreview', ImagePreview)
import dictMixin from '@/utils/dict/index'
app.mixin(dictMixin)
// 创建应用
// 将APP.vue挂载到index.html中的app元素上
// 使用router进行路由管理：路由规则定义在src\router\index.js中
// 使用store进行状态管理：状态规则定义在src\store\index.js中
app.use(vueStore).use(plugins).use(vueRouter).use(Antd).use(directive).use(VueHighlightJS).use(ElementPlus, {
    locale: zhCn,
}).use(pinia).mount('#app');

import * as echarts from "echarts";
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, handleTree } from '@/utils/common';
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.$echarts = echarts
