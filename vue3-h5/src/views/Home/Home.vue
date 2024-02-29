<template>
  <a-layout style="min-height: 100vh,overflow: hidden;">
    <!-- 头部 -->
    <a-layout-header style="height: 70px;">
      <div class="layhead-left">
        <img src="../../assets/1.png" alt="" class="imgs">
        <div class="ll-title">客户关系管理系统</div>
      </div>
      <div class="layhead-right">
        <!-- 搜索 -->
        <div class="search">
          <input type="text" placeholder="请输入客户名称">
          <span class="iconfont icon-sousuo"></span>
        </div>
        <!-- 事项 -->
        <div class="event">
          <span class="iconfont icon-shixiang"></span>
          <span>事项</span>
        </div>
        <!-- 日程 -->
        <div class="day">
          <span class="iconfont icon-richeng"></span>
          <span>日程</span>
        </div>
        <!-- 消息 -->
        <div class="massage">
          <span class="iconfont icon-xiaoxi"></span>
          <span>消息</span>
        </div>
        <!-- 锁屏 -->
        <div class="suo">
          <span class="iconfont icon-suoping"></span>
          <span>锁屏</span>
        </div>
        <!-- 个人信息 -->
        <div class="host">
          <span class="iconfont icon-geren2" style="font-size: 25px;"></span>
          <span style="color:#fff;">{{ host }}</span>
        </div>
      </div>
    </a-layout-header>
    <!-- 底部 -->
    <a-layout>
      <a-layout :style="{ display: 'flex' }">
        <!-- 底部侧边栏 -->
        <a-layout-sider collapsible style="height:'calc(100vh - 60px)'">
          <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
            <a-menu-item v-for="item in list" :key="item.meta.id" :style='{ height: "40px", margin: "35px 0" }'
              @click="() => href(item.path, item.meta.id)">
              <span :class="item.meta.icon" style="font-size: 20px;margin: 0 10px;"></span>
              <span class="spans">{{ item.meta.name }}</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <!-- 侧边栏白 -->
        <a-layout-sider width="200" style="background: #fff">
          <a-menu v-model:selectedKeys="selectedKeys2" mode="inline" style="height: 100%">
            <a-menu-item v-for="item in childList" :key="item.path" style="margin: 20px 0;">
              <RouterLink :to="item.path">
                {{ item.meta.name }}
              </RouterLink>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <!-- 右边栏 -->
        <a-layout>
          <a-layout-content style="margin: 0 16px;background-color: #fff;margin: 10px;">
            <div class="bread" style="margin: 10px 0;">
              <!-- 面包屑 -->
              <span v-for="item, index in tabBread" :key="index"
                style="display: inline-block;margin: 10px 0;border-top-right-radius: 25px;border-bottom-right-radius: 25px;border-right:3px solid #58a3f7;padding: 0 10px;">
                {{ item.meta.name }}
              </span>
            </div>
            <div class="grey" style="height: 10px;background-color: #f5f5f5;"> </div>
            <!-- 路由坑  表格内容 -->
            <div :style="{ background: '#fff', height: '100%' }">
              <!-- 子集路由 -->
              <!-- 懒加载 -->
              <Suspense fallback="...loading">
                <RouterView />
              </Suspense>
            </div>
          </a-layout-content>
          <a-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
          </a-layout-footer>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// 父级导航栏 高亮
const selectedKeys = ref<number[]>([0]);
const selectedKeys2 = ref<string[]>(['/home/index/index']);
let routes = useRouter()


// 获取用户名
let host = ref<string | null>(localStorage.getItem('token'))
// 配置面包屑变量 
let breadRoute = useRoute()
let tabBread = ref<any[]>([{ id: 0, path: "/home/index/index", name: "index", meta: { name: "系统首页" } }])

// 配置路由表
//配置左侧导航栏信息
const list = ref<any>([])

//配置子导航栏信息
const childList = ref<any[]>()

// 获取父级路由表
onMounted(() => {
  let router = routes.options.routes[0].children
  //获取当前路由地址  
  let path = useRoute().path
  // 切换子路由高亮
  selectedKeys2.value = [path]
  list.value = router
  childrouter(router)
})
onUpdated(() => {
  // 切换高亮 根据路径绑定二级侧边栏的高亮
  let path = useRoute().path
  selectedKeys2.value = [path]
})
// 配置子集路由
const childrouter = (router: any) => {
  let childrouter;
  selectedKeys.value[0] === 0 ? childrouter = router![selectedKeys.value[0]].children : childrouter = router![selectedKeys.value[0]].children?.filter((item: {}) => !item.hasOwnProperty("redirect"))
  childList.value = childrouter
}



// 路由跳转
let href = (path: string, id: number) => {
  // console.log(path, id);
  selectedKeys.value = [id]
  // 筛选子集路由表
  let router;
  selectedKeys.value[0] === 0 ? router = (routes.options.routes[0].children as any[])[selectedKeys.value[0]].children : router = (routes.options.routes[0].children as any[])[selectedKeys.value[0]].children.filter((item: {}) => !item.hasOwnProperty("redirect"))
  childList.value = router
  // 跳转
  routes.push(path)
}




// 编写面包屑 bread

watch(() => breadRoute.matched, (newVal: any, oldVal: any) => {
  console.log(newVal, 'new');
  tabBread.value = newVal
  console.log(tabBread.value);
}, { deep: true })
</script>
<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

:where(.css-dev-only-do-not-override-19yxfbp).ant-layout .ant-layout-sider-has-trigger {
  height: calc(100vh - 48px - 64px);
}

/* 头部样式 */
:where(.css-dev-only-do-not-override-19yxfbp).ant-layout .ant-layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: #373d41;
}


.layhead-left {
  display: flex;
  align-items: center;
}

/* 图片 */
.imgs {
  width: 60px;
  height: 50px;
  margin-right: 20px;
}

.ll-title {
  font-size: 25px;
  color: white;
}

.layhead-right {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.layhead-right div {
  margin: 0 10px;
  color: #fff;
  font-size: 16px;
}

.layhead-right div span {
  margin: 0 2px;
  color: #fff;
}

.search {
  background-color: #373d41;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 40px;
  padding: 5px 20px;
}

.search input {
  border: 0;
  background-color: #373d41;
  color: #fff;
  width: 100%;
  height: 100%;
}

.search .iconfont {
  color: #ccc;
}
</style>