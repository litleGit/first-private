import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/login.vue'
import Loading from '../views/loading/loading.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home/Home.vue'),
      children: [
        // 菜单首页 index
        {
          path: '/home/index',
          name: 'index',
          redirect: "/home/index/index",
          meta: {
            id: 0,
            icon: "iconfont icon-caidan",
            name: "快捷菜单"
          },
          children: [
            //系统首页  index
            {
              path: '/home/index/index',
              name: 'index',
              component: () => import('../views/Home/index/index.vue'),
              meta: {
                name: "系统首页",
              }
            },
            // 客户列表  customList
            {
              path: '/home/custom/customList',
              name: 'customList',
              redirect: '/home/custom/customList',
              meta: {
                name: "客户列表"
              },
            },
            // 客户筛选  customFiltrate
            {
              path: '/home/custom/customFiltrate',
              name: 'customFiltrate',
              redirect: '/home/custom/customFiltrate',
              meta: {
                name: "客户筛选",
              }
            },
            //销售线索  salesLead
            {
              path: '/home/custom/salesLead',
              name: 'salesLead',
              redirect: '/home/custom/salesLead',
              meta: {
                name: "销售线索",
              }
            },
            //全部商机 boAll
            {
              path: '/home/busOpportunity/boAll',
              name: 'boAll',
              redirect: '/home/busOpportunity/boAll',
              meta: {
                name: "全部商机",
              }
            },
            //全部订单 oAll
            {
              path: "/home/order/oAll",
              name: 'oAll',
              redirect: "/home/order/oAll",
              meta: {
                name: "全部订单",
              }
            },
            // 回款管理  rdManagement
            {
              path: '/home/finance/rdManage',
              name: 'rdManage',
              redirect: '/home/finance/rdManage',
              meta: {
                name: "回款管理",
              }
            },
            //回款审批  rdApproval
            {
              path: '/home/approval/rdApproval',
              name: 'rdApproval',
              redirect: '/home/approval/rdApproval',
              meta: {
                name: "回款审批",
              }
            },
            // //报销审批  ReimbursementApproval
            {
              path: '/home/approval/ReimbursementApproval',
              name: 'ReimbursementApproval',
              redirect: '/home/approval/ReimbursementApproval',
              meta: {
                name: "报销审批",
              }
            },
            //全部工单 allWord
            {
              path: "/home/wordOrder/allWord",
              name: 'allWord',
              redirect: "/home/wordOrder/allWord",
              meta: {
                name: "全部工单",
              }
            },
            //系统公告 systemNotice
            {
              path: "/home/officeManagement/systemNotice",
              name: 'systemNotice',
              redirect: "/home/officeManagement/systemNotice",
              meta: {
                name: "系统公告",
              }
            },
            //内部消息
            {
              path: "/home/officeManagement/insideInformation",
              name: 'insideInformation',
              redirect: "/home/officeManagement/insideInformation",
              meta: {
                name: "内部消息",
              }
            },
            //业绩目标 performance
            {
              path: "/home/marketing/performance",
              name: 'performance',
              redirect: "/home/marketing/performance",
              meta: {
                name: "业绩目标",
              }
            },
            //营销活动 marketingCampaign
            {
              path: "/home/marketing/marketingCampaign",
              name: 'marketingCampaign',
              redirect: "/home/marketing/marketingCampaign",
              meta: {
                name: "营销活动",
              }
            },
          ]
        },
        // 客户管理  custom
        {
          path: '/home/custom',
          name: 'custom',
          redirect: "/home/custom/customList",
          meta: {
            id: 1,
            icon: "iconfont icon-kehu",
            name: "客户管理"
          },
          // 客户列表
          children: [
            {
              path: '/home/custom/customList',
              name: 'customList',
              component: () => import('../views/Home/custom/customList.vue'),
              meta: {
                id: 0,
                name: "客户列表"
              },
            },
            // 客户筛选 customFiltrate
            {
              path: '/home/custom/customFiltrate',
              name: 'customFiltrate',
              component: () => import('../views/Home/custom/customFiltrate.vue'),
              meta: {
                id: 1,
                name: "客户筛选"
              },
            },
            //销售线索 salesLead
            {
              path: '/home/custom/salesLead',
              name: 'salesLead',
              component: () => import('../views/Home/custom/salesLead.vue'),
              meta: {
                id: 1,
                name: "销售线索"
              },
            },
            // 客户列表
            {
              path: '/home/custom/',
              redirect: "/home/custom/customList"
            }
          ]
        },
        // 商机管理 busOpportunity
        {
          path: '/home/busOpportunity',
          name: 'busOpportunity',
          redirect: "./home/busOpportunity/all",
          meta: {
            id: 2,
            icon: "iconfont icon-compass",
            name: "商机管理"
          },
          children: [
            //全部商机
            {
              path: '/home/busOpportunity/boAll',
              name: 'boAll',
              component: () => import('../views/Home/busOpportunity/boAll.vue'),
              meta: {
                name: "全部商机",
                id: 0
              }
            },
            // 我的商机
            {
              path: '/home/busOpportunity/boMy',
              name: 'boMy',
              component: () => import("../views/Home/busOpportunity/boMy.vue"),
              meta: {
                name: "我的商机",
                id: 1
              }
            },
            // 系统首页重定向
            {
              path: '/home/busOpportunity/',
              redirect: '/home/busOpportunity/boAll',
            }
          ]
        },
        //订单管理
        {
          path: '/home/order',
          name: 'order',
          redirect: "/home/order/all",
          meta: {
            id: 3,
            icon: "iconfont icon-dingdan",
            name: "订单管理"
          },
          // 全部订单 all
          children: [
            {
              path: "/home/order/oAll",
              name: 'oAll',
              component: () => import('../views/Home/order/oAll.vue'),
              meta: {
                id: 0,
                name: "全部订单"
              },
            },
            // 我的订单 my
            {
              path: "/home/order/oMy",
              name: 'oMy',
              component: () => import('../views/Home/order/oMy.vue'),
              meta: {
                id: 1,
                name: "我的订单"
              },
            },
            {
              path: '/home/order/',
              redirect: "/home/order/oAll",
            }
          ]
        },
        // 财务管理 finance
        {
          path: '/home/finance',
          name: 'finance',
          redirect: "/home/finance/rdMoney",
          meta: {
            id: 4,
            icon: "iconfont icon-yly_jisuanqi",
            name: "财务管理"
          },
          // 回款计划
          children: [
            {
              path: '/home/finance/rdMoney',
              name: 'rdMoney',
              component: () => import('../views/Home/finance/rdMoney.vue'),
              meta: {
                id: 0,
                name: "回款计划"
              },
            },
            // 回款管理 rdManage
            {
              path: '/home/finance/rdManage',
              name: 'rdManage',
              component: () => import('../views/Home/finance/rdManage.vue'),
              meta: {
                id: 1,
                name: "回款管理"
              },
            },

            {
              path: '/home/finance/',
              redirect: '/home/finance/rdManage',
            }
          ]
        },
        // 审批管理 approval
        {
          path: '/home/approval',
          name: 'approval',
          redirect: "/home/approval/orderApproval",
          meta: {
            id: 5,
            icon: "iconfont icon-shenpi",
            name: "审批管理"
          },
          // 订单审批
          children: [
            {
              path: "/home/approval/orderApproval",
              name: 'orderApproval',
              component: () => import('../views/Home/approval/orderApproval.vue'),
              meta: {
                name: "订单审批"
              },
            },
            // 回款审批 rdApproval
            {
              path: '/home/approval/rdApproval',
              name: 'rdApproval',
              component: () => import('../views/Home/approval/rdApproval.vue'),
              meta: {
                name: "回款审批"
              },
            },
            //报销审批 ReimbursementApproval
            {
              path: '/home/approval/ReimbursementApproval',
              name: 'ReimbursementApproval',
              component: () => import('../views/Home/approval/ReimbursementApproval.vue'),
              meta: {
                name: "报销审批"
              },
            },
            {
              path: '/home/approval/',
              redirect: "/home/approval/orderApproval",
            }
          ]
        },
        // 统计报表 statistic
        {
          path: '/home/statistic',
          name: 'statistic',
          redirect: "/home/statistic/preanalysis",
          meta: {
            id: 6,
            icon: "iconfont icon-tongji",
            name: "统计报表"
          },
          // 销售预分析  preanalysis
          children: [
            {
              path: "/home/statistic/preanalysis",
              name: 'preanalysis',
              component: () => import('../views/Home/statistic/preanalysis.vue'),
              meta: {
                id: 0,
                name: "销售预分析"
              },
            },
            {
              path: '/home/statistic/',
              redirect: "/home/statistic/preanalysis",
            }
          ]
        },
        // 工单管理 wordOrder
        {
          path: '/home/wordOrder',
          name: 'wordOrder',
          redirect: "/home/wordOrder/allWord",
          meta: {
            id: 7,
            icon: "iconfont icon-faqigongdan",
            name: "工单管理"
          },
          // 全部工单  allWord
          children: [
            {
              path: "/home/wordOrder/allWord",
              name: 'allWord',
              component: () => import('../views/Home/wordOrder/allWord.vue'),
              meta: {
                id: 0,
                name: "全部工单"
              },
            },
            {
              path: '/home/wordOrder/',
              redirect: "/home/wordOrder/allWord",
            }
          ]
        },
        // 办公申请 application
        {
          path: '/home/application',
          name: 'application',
          redirect: "/home/application/vacate",
          meta: {
            id: 8,
            icon: "iconfont icon-bangongshenqing",
            name: "办公申请"
          },
          // 请假申请  vacate
          children: [
            {
              path: "/home/application/vacate",
              name: 'vacate',
              component: () => import('../views/Home/application/vacate.vue'),
              meta: {
                id: 0,
                name: "请假申请"
              },
            },
            {
              path: '/home/application/',
              redirect: "/home/application/vacate",
            }
          ]
        },
        // 营销工具 marketing
        {
          path: '/home/marketing',
          name: 'marketing',
          redirect: "/home/marketing/performance",
          meta: {
            id: 9,
            icon: "iconfont icon-yingxiaoguanli",
            name: "营销工具"
          },
          // 业绩目标  performance
          children: [
            {
              path: "/home/marketing/performance",
              name: 'performance',
              component: () => import('../views/Home/marketing/performance.vue'),
              meta: {
                name: "业绩目标"
              },
            },
            //营销活动 marketingCampaign
            {
              path: "/home/marketing/marketingCampaign",
              name: 'marketingCampaign',
              component: () => import('../views/Home/marketing/marketingCampaign.vue'),
              meta: {
                name: "营销活动"
              },
            },
            {
              path: '/home/marketing/',
              redirect: "/home/marketing/performance",
            }
          ]
        },
        // 办公管理  officeManagement
        {
          path: '/home/officeManagement',
          name: 'officeManagement',
          redirect: "/home/officeManagement/systemNotice",
          meta: {
            id: 10,
            icon: "iconfont icon-diannao",
            name: "办公管理"
          },
          // 系统公告  systemNotice
          children: [
            {
              path: "/home/officeManagement/systemNotice",
              name: 'systemNotice',
              component: () => import('../views/Home/officeManagement/systemNotice.vue'),
              meta: {
                name: "系统公告"
              },
            },
            //内部消息 insideInformation
            {
              path: "/home/officeManagement/insideInformation",
              name: 'insideInformation',
              component: () => import('../views/Home/officeManagement/insideInformation.vue'),
              meta: {
                name: "内部消息"
              },
            },
            {
              path: '/home/officeManagement/',
              redirect: "/home/officeManagement/systemNotice",
            }
          ]
        },
        // 系统管理 systemManagement
        {
          path: '/home/systemManagement',
          name: 'systemManagement',
          redirect: "/home/systemManagement/index",
          meta: {
            id: 11,
            icon: "iconfont icon-xitong",
            name: "系统管理"
          },
          // 公告
          children: [
            {
              path: "/home/systemManagement/gong",
              name: 'gong',
              component: () => import('../views/Home/systemManagement/gong.vue'),
              meta: {
                id: 0,
                name: "公告"
              },
            },
            {
              path: '/home/systemManagement/',
              redirect: "/home/systemManagement/gong",
            }
          ]
        },
        // 新建客户
        {
          path: "/home/index/newCustom",
          name: 'systemIndex',
          component: () => import('../views/Home/index/newCustom.vue'),
            meta: {
            id: 12,
            name: ""
          },
        },
        // 新增线索 clue
        
        {
          path: "/home/index/clue",
          name: 'clue',
          component: () => import('../views/Home/index/clue.vue'),
            meta: {
            id: 13,
            name: ""
          },
        }
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/',
      redirect: "/home"
    },
  ]
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if (to.path === '/login' && token) {
    next('/home/index/index');
  } else if (to.path !== '/login' && !token) {
    next('/login')
  } else {
    next()
  }})
export default router
