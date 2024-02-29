import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './router'
// import axios from 'axios'
// 配置全局icon
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont1/iconfont.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 配置axiso
// app.provide('$axios',axios)
app.use(Antd).mount('#app');
