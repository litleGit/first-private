<template>
    <div class="index">
        <!-- 头部统计图 -->
        <div class="ind-con">
            <div class="ic-head">
                <div class="ich">
                    <div class="i-head">月销售金额(元)</div>
                    <div class="i-title">{{ num.xiao.toLocaleString() }}</div>
                    <div class="i-xiao">
                        <p>周同比🔺12% </p>
                        <p>日环比🔽12% </p>
                    </div>
                </div>
                <div class="ich">
                    <div class="i-head">月回款金额(元)</div>
                    <div class="i-title">{{ num.hui.toLocaleString() }}</div>
                    <div class="i-bot">
                        <img src="../../../assets/3.png" alt="">
                    </div>
                </div>
                <div class="ich">
                    <div class="i-head">本月成交订单</div>
                    <div class="i-title">{{ num.success.toLocaleString() }}</div>
                    <div class="i-bot">
                        <img src="../../../assets//4.png" alt="">
                    </div>
                </div>
                <div class="ich">
                    <div class="i-head">完成销售目标</div>
                    <div class="i-title">{{ num.mu + "%" }}</div>
                    <div class="i-mu">
                        <div class="ib-right">
                            <a-progress type="circle" :percent="num.mu" size='small' />
                        </div>
                    </div>
                </div>
                <div class="ich">
                    <div class="i-head">回款达成率</div>
                    <div class="i-title">{{ num.da + "%" }}</div>
                    <div class="i-bot">
                        <a-progress :percent="num.da" />
                    </div>
                </div>
            </div>
            <!-- 快速创建 -->
            <div class="ic-state">
                <div class="ics-head">快捷创建</div>
                <span></span>
                <div class="ics-li">
                    <div class="ics-con" v-for="item in fastCreate" :key="item.id" @click="() => href(item.path)">
                        <span :class="['iconfont', item.icon].join(' ')">

                        </span>
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </div>
            <!-- 业务模块部分 -->
            <div class="bot">
                <!-- 数据简报 -->
                <div class="easy">
                    <div class="title">
                        <span>数据简报</span>
                        <div class="et-right">
                            <!-- 下拉菜单 -->
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link" @click.prevent>
                                    <span style="margin: 0 10px;">公司简报</span>
                                    <DownOutlined />
                                </a>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>
                                            <a>1st menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>2nd menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>3rd menu item</a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link" @click.prevent>
                                    <span style="margin: 0 10px;">本周</span>
                                    <DownOutlined />
                                </a>
                                <template #overlay class="sele">
                                    <a-menu>
                                        <a-menu-item>
                                            <a href="javascript:;">本周</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a href="javascript:;">上周</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a href="javascript:;">上个月</a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                        </div>
                    </div>
                    <ul class="e-con">
                        <li v-for="item in list.data" :key="item.id" class="ec-data">
                            <div style="color: rgba(153, 154, 154);">{{ item.name }}</div>
                            <div style="color: rgba(102, 102, 102);font-size: 35px;">{{ item.num }}</div>
                        </li>
                    </ul>
                </div>
                <!-- 系统公告 -->
                <div class="system">
                    <div class="title">
                        <span>数据简报</span>
                        <div class="et-right">
                            <div class="btn">
                                <span class="iconfont icon-tianjia"></span>
                                <span>发布公告</span>
                            </div>
                            <div class="btn">
                                <span>发布公告</span>
                                <span class="iconfont icon-xiayiyeqianjinchakangengduo"></span>
                            </div>
                        </div>
                    </div>
                    <ul class="e-con">
                        <li class="ec-sys" v-for="item in list.affiche" :key="item.id">
                            <div class="ecs-left">
                                <span style="font-weight: bold;color: black;">【{{ item.title }}】</span>
                                <span>{{ item.text }}</span>
                            </div>
                            <div class="ecs-right">
                                <span class="iconfont"></span>
                                <span class="time">{{ item.time }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 业绩目标 -->
                <div class="mubiao">
                    <div class="title">
                        <span>业绩目标</span>
                        <div class="et-right">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link" @click.prevent>
                                    <span style="margin: 0 10px;">公司目标</span>
                                    <DownOutlined />
                                </a>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>
                                            <a>1st menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>2nd menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>3rd menu item</a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                            <div class="btn">
                                <span>2024-01</span>
                                <span class="iconfont icon-xiayiyeqianjinchakangengduo"></span>
                            </div>
                        </div>
                    </div>
                    <div class="e-con">
                        <p>成交金额</p>
                        <div class="ec-ech">
                            <div class="ech">
                                <a-progress stroke-linecap="square" :percent="targetNum" type="circle" :size="200" />
                            </div>
                            <div class="ece-right">
                                <div class="ecer-top">
                                    <p>目标金额</p>
                                    <p class="momey">￥{{ target.all.toLocaleString() }}</p>
                                </div>
                                <div class="ecer-top">
                                    <p>完成金额</p>
                                    <p class="momey">￥{{ target.finish.toLocaleString() }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 业绩排行 -->
                <div class="paihang">
                    <div class="title">
                        <span>业绩排行</span>
                        <div class="et-right">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link" @click.prevent>
                                    <span style="margin: 0 10px;">个人排行</span>
                                    <DownOutlined />
                                </a>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>
                                            <a>1st menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>2nd menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>3rd menu item</a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                            <span>2019-05</span>
                        </div>
                    </div>
                    <div class="e-con">
                        <Pai :data="rank" :type="['目标金额', '成交金额']" :mu1="targets" :mu2="oks" :names="names" />
                    </div>
                </div>
                <!-- 销售预测 -->
                <div class="yuce">
                    <div class="title">
                        <span>销售预测</span>
                        <div class="et-right">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link" @click.prevent>
                                    <span style="margin: 0 10px;">公司数据</span>
                                    <DownOutlined />
                                </a>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>
                                            <a>1st menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>2nd menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>3rd menu item</a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                        </div>
                    </div>
                    <div class="e-con">
                        <Pai :type="['预计销售金额', '概率金额']" :mu1="yu" :mu2="gai" :names="month" />
                    </div>
                </div>
                <!-- 销售漏斗 -->
                <div class="loudou">
                    <div class="title">
                        <span>销售漏斗</span>
                        <div class="et-right">
                            <a-dropdown :trigger="['click']">
                                <a class="ant-dropdown-link" @click.prevent>
                                    <span style="margin: 0 10px;">公司数据</span>
                                    <DownOutlined />
                                </a>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>
                                            <a>1st menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>2nd menu item</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a>3rd menu item</a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                            <span>2019-05</span>
                        </div>
                    </div>
                    <div class="e-con">
                        <Lou :percent="percent" />
                    </div>
                </div>
                <!-- 工作报告 -->
                <div class="baogao">
                    <div class="title">
                        <span>工作报告</span>
                        <div class="et-right">
                            <div class="btn">
                                <span class="iconfont icon-tianjia"></span>
                                <span>发布公告</span>
                            </div>
                            <div class="btn">
                                <span>发布公告</span>
                                <span class="iconfont icon-xiayiyeqianjinchakangengduo"></span>
                            </div>
                        </div>
                    </div>
                    <ul class="e-con">
                        <li v-for="item in works" :keys="item.id">
                            <div class="times">{{ item.time }} {{ item.lei }}</div>
                            <div class="name">{{ item.name }}</div>
                            <div class="type"><span class="point" :style='{backgroundColor:item.type==="已批阅"? "green":"orange"}'></span>{{ item.type }}</div>
                            <div class="right"><span>></span>详情</div>
                        </li>
                    </ul>
                </div>
                <!-- 日程日历 -->
                <div class="rili">
                    <div class="title">
                        <span>日程日历</span>
                        <div class="et-right">
                            <div class="btn">
                                <span class="iconfont icon-tianjia"></span>
                                <span>发布公告</span>
                            </div>
                            <div class="btn">
                                <span>发布公告</span>
                                <span class="iconfont icon-xiayiyeqianjinchakangengduo"></span>
                            </div>
                        </div>
                    </div>
                    <div class="e-con">
                        <Calendar/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import { DownOutlined } from '@ant-design/icons-vue';
// 引入条形图模块
import Pai from '../../../components/index/menu/pai/pai.vue';
// 引入漏斗图模块
import Lou from '../../../components/index/menu/lou/loudou.vue';
// 引入日历模块
import  Calendar  from '../../../components/index/menu/calendar/calendar.vue';
let href = useRouter().push
interface num {
    xiao: number,
    hui: number,
    success: number,
    mu: number,
    da: number,
}
let num = ref<num>(
    {
        //月销售金额
        xiao: 120000,
        // 月回款金额
        hui: 100000,
        // 本月成交订单
        success: 1000,
        // 完成销售目标
        mu: 75,
        // 回款达成率
        da: 80
    }
)
// 配置数据
interface listd {
    data: any[],
    affiche: any[],
}
let list = ref<listd>({
    data: [
        {
            id: 0,
            name: '新增客户',
            num: 0,
        },
        {
            id: 1,
            name: '新增线索',
            num: 0,
        },
        {
            id: 2,
            name: '新建商机',
            num: 0,
        },
        {
            id: 3,
            name: '新建订单',
            num: 0,
        },
        {
            id: 4,
            name: '新建联系人',
            num: 0,
        },
        {
            id: 5,
            name: '跟进次数',
            num: 0,
        },
        {
            id: 6,
            name: '处理任务',
            num: 0,
        },
        {
            id: 7,
            name: '处理工单',
            num: 0,
        },
    ],
    affiche: [
        {
            id: 0,
            title: "内部分享",
            text: "如何建立良好的客户关系",
            time: new Date().toLocaleString()
        },
        {
            id: 1,
            title: "内部分享",
            text: "如何提高客户的购买力",
            time: new Date().toLocaleString()
        }
    ]
})
// 快捷新建
let fastCreate = ref<any[]>(
    [
        {
            id: 0,
            name: "新建客户",
            icon: "icon-customer",
            path: "/home/index/newCustom"
        },
        {
            id: 1,
            name: "新建线索",
            icon: "icon-dengpao",
            path: "/home/index/clue"
        },
        {
            id: 2,
            name: "新建商机",
            icon: "icon-wodeshangjizhuanhuan",
            path: ""
        },
        {
            id: 3,
            name: "新建订单",
            icon: "icon-dingdan",
            path: ""
        },
        {
            id: 4,
            name: "新建联系人",
            icon: "icon-lianxiren",
            path: ""
        },
        {
            id: 5,
            name: "写新跟进",
            icon: "icon-xiegenjin",
            path: ""
        },
        {
            id: 6,
            name: "新建任务",
            icon: "icon-renwu",
            path: ""
        },
        {
            id: 7,
            name: "新建工单",
            icon: "icon-gongdanqueren",
            path: ""
        },
        {
            id: 8,
            name: "新建回款单",
            icon: "icon-huikuanguanli",
            path: ""
        },
        {
            id: 9,
            name: "回款计划",
            icon: "icon-huikuan",
            path: ""
        },
    ]
)

// 配置业绩目标的数据
interface target {
    finish: number,
    all: number
}
let target = ref<target>({
    finish: 1000000,
    all: 4000000,
})
// 配置计算属性设置百分比
let targetNum = computed({
    // return (target.value.finish / target.value.all) * 100
    get: () => {
        return (target.value.finish / target.value.all) * 100
    },
    set: (value: any) => {
        console.log(value);

    }

})

// 配置业绩排行的数据
let rank = ref<any[]>([
    {
        id: 1,
        name: "李小刚",
        target: 1500000,
        ok: 2500000
    },
    {
        id: 2,
        name: "王小红",
        target: 1500000,
        ok: 2700000
    },
    {
        id: 3,
        name: "周小明",
        target: 1300000,
        ok: 2200000
    },
    {
        id: 4,
        name: "张小刚",
        target: 1200000,
        ok: 2000000
    },
    {
        id: 5,
        name: "张小伟",
        target: 1100000,
        ok: 2000000
    },
    {
        id: 6,
        name: "周小伟",
        target: 1000000,
        ok: 1900000
    },
    {
        id: 7,
        name: "李晓红",
        target: 900000,
        ok: 1500000
    }


])
// 配置筛选函数
const filtrate = (data: any[]): any => {
    let targets = data.reduce((prev: any[], item: any) => {
        prev.push(item.target)
        return prev
    }, [])
    let oks = data.reduce((prev: any[], item: any) => {
        prev.push(item.ok)
        return prev
    }, [])
    let names = data.reduce((prev: any[], item: any) => {
        prev.push(item.name)
        return prev
    }, [])
    return {
        targets,
        oks,
        names
    }
}
let targets = filtrate(rank.value).targets
let oks = filtrate(rank.value).oks
let names = filtrate(rank.value).names



//销售预测
// 配置销售预测的数据
let forecast = ref<any[]>([
    {
        id: 1,
        name: '1月',
        target: 700000,
        ok: 400000
    },
    {
        id: 2,
        name: '2月',
        target: 750000,
        ok: 460000
    },
    {
        id: 3,
        name: '3月',
        target: 900000,
        ok: 800000
    },

    {
        id: 4,
        name: '4月',
        target: 1400000,
        ok: 900000
    }, {
        id: 5,
        name: '5月',
        target: 1900000,
        ok: 1200000
    },
    {
        id: 6,
        name: '6月',
        target: 2200000,
        ok: 1600000
    },
    {
        id: 7,
        name: '7月',
        target: 2500000,
        ok: 1600000
    },
    {
        id: 8,
        name: '8月',
        target: 3400000,
        ok: 1900000
    },
    {
        id: 9,
        name: '9月',
        target: 2800000,
        ok: 1400000
    },

    {
        id: 10,
        name: '10月',
        target: 1900000,
        ok: 1100000
    },
    {
        id: 11,
        name: '11月',
        target: 1800000,
        ok: 700000
    },
    {
        id: 12,
        name: '12月',
        target: 900000,
        ok: 300000
    },
])
let yu = filtrate(forecast.value).targets
let gai = filtrate(forecast.value).oks
let month = filtrate(forecast.value).names




//销售漏斗
interface louschild {
    id: number,
    name: string,
    num: number,
}
let lous = ref<louschild[]>([
    {
        id: 1,
        name: '初步洽谈',
        num: 500,
    },
    {
        id: 2,
        name: '深入沟通',
        num: 350,
    },
    {
        id: 3,
        name: '产品报价',
        num: 250,
    },
    {
        id: 4,
        name: '成交商机',
        num: 150,
    },
    {
        id: 5,
        name: '流失商机',
        num: 150,
    },
])
let allValue = lous.value.reduce((prev: number, item: any) => {
    prev += item.num
    return prev
}, 0)
// 配置百分比
let percent = ref<any[]>([
    {
        value: ((lous.value[0].num / allValue) * 100).toFixed(1),
        name: lous.value[0].name
    },
    {
        value: ((lous.value[1].num / allValue) * 100).toFixed(1),
        name: lous.value[1].name
    },
    {
        value: ((lous.value[2].num / allValue) * 100).toFixed(1),
        name: lous.value[2].name
    },
    {
        value: ((lous.value[3].num / allValue) * 100).toFixed(1),
        name: lous.value[3].name
    },
    {
        value: ((lous.value[4].num / allValue) * 100).toFixed(1),
        name: lous.value[4].name
    },

])

// 工作报告
let works = ref<any[]>([
    {
        id: 1,
        name: '赵小刚',
        type: '未批阅',
        context: '商机进展跟进',
        time: new Date().toLocaleDateString(),
        lei: '工作日报'
    },
    {
        id: 2,
        name: '孙小紫',
        type: '未批阅',
        context: '商机进展跟进',
        time: new Date().toLocaleDateString(),
        lei: '工作日报'
    },
    {
        id: 3,
        name: '王小五',
        type: '已批阅',
        context: '商机进展跟进',
        time: new Date().toLocaleDateString(),
        lei: '工作日报'
    },
    {
        id: 4,
        name: '张小丽',
        type: '未批阅',
        context: '商机进展跟进',
        time: new Date().toLocaleDateString(),
        lei: '工作日报'
    },
])
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;

}

.index::-webkit-scrollbar {
    display: none;
}

.index {
    width: 100%;
    max-height: 810px;
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: #f0f2f5;
    padding: 0 30px;

    .ic-head {
        height: 140px;
        background-color: #f0f2f5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        margin: 10px 0;
        box-sizing: border-box;

        .ich {
            width: 260px;
            height: 100%;
            background-color: white;
            margin: 20px 0;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px 10px;

            .i-head {
                display: flex;
                align-items: center;
                color: grey;
                flex: 1;
            }

            .i-title {
                font-size: 30px;
                font-weight: bold;
                flex: 1;
            }

            .i-xiao {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .i-mu {
                flex: 1;
                display: flex;
                justify-content: space-between;
                text-align: right;
                padding: 0 20px;

                .ib-right {
                    width: 100%;
                    height: 100%;
                }
            }

            .i-bot {
                flex: 1;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .ic-state {
        border-radius: 15px;
        border-collapse: collapse;

        .ics-head {
            height: 60px;
            background-color: #f9f9f9;
            line-height: 60px;
            padding: 0 10px;
            font-weight: bold;
            box-sizing: border-box;
            border-bottom: 0;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            border: 1px solid #ccc;
        }

        .ics-li {
            border: 1px solid #ccc;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            border-top: 1px solid #ccc;
            height: 140px;
            display: flex;
            justify-content: space-between;
            background-color: white;
            align-items: center;
            box-sizing: border-box;
            box-sizing: border-box;

            .ics-con {
                box-sizing: border-box;
                flex: 1;
                height: 100%;
                margin: 0 10px;
                text-align: center;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .iconfont {
                    font-size: 50px;
                    color: #ccc;
                }

                p {
                    font-size: 12px;
                    margin: 10px 0;
                }
            }

            .active {
                background-color: #f9f9f9;
            }
        }
    }

    // 底部内容
    .bot {
        margin: 20px 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        border-collapse: collapse;

        div:nth-child(n) {
            border: 1px solid #ccc;
            height: 400px;
            width: 49%;
            margin: 10px 0;
            margin-right: 10px;

            .title {
                border: 0;
                background-color: rgba(249, 249, 249);
                padding: 0 10px;
                width: 100%;
                height: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0;

                .et-right {
                    .btn {
                        width: auto;
                        border: 1px solid #ccc;
                        height: 30px;
                        border-radius: 15px;
                        background-color: white;
                        display: block;
                        line-height: 30px;
                        padding: 0 10px;
                        color: grey;

                        span {
                            margin: 0 5px;
                        }
                    }
                }

                span {
                    font-weight: bold;
                }

                div {
                    border: 0;
                    display: flex;
                    height: 60px;
                    margin: 0;
                    justify-content: space-evenly;
                    align-items: center;

                    .ant-dropdown-link {
                        padding: 5px 20px;
                        border: 1px solid #ccc;
                        display: flex;
                        justify-content: space-evenly;
                        border-radius: 15px;
                        color: grey;
                        background-color: white;
                    }
                }
            }

            .e-con {
                margin: 0;
                height: 340px;
                background-color: white;
                .ec-sys {
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    div {
                        width: auto;
                        height: auto;
                        border: 0;
                    }
                }

                .ec-data {
                    width: 25%;
                    div {
                        border: 0;
                        width: auto;
                        height: auto;
                    }

                }
            }
        }

        .easy {
            .e-con {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                padding: 10px 20px;
                text-align: center;
            }
        }

        .mubiao {
            .e-con {
                padding: 0;
                border: 0;
                width: auto;
                height: auto;

                div {
                    border: 0;
                    width: auto;
                    height: auto;
                }

                .ec-ech {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .ece-right {
                        .momey {
                            font-size: 20px;
                        }

                        p {
                            margin: 10px;
                            padding: 10px 0;
                            color: rgba(144, 146, 144);
                        }

                    }
                }
            }
        }

        .paihang {
            .e-con {
                margin: 0;
                padding: 0;
                border: 0;
                width: auto;
                height: auto;

                div {
                    border: 0;
                }
            }

        }

        .yuce {
            .e-con {
                padding: 0;
                border: 0;
                width: auto;
                height: auto;

                div {
                    border: 0;
                }
            }
        }

        .loudou {
            .e-con {
                padding: 0;
                border: 0;
                width: auto;
                height: auto;

                div {
                    border: 0;
                }
            }
        }

        .baogao {
            .e-con {
                padding: 0;
                border: 0;
                width: auto;
                height: auto;

                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 30px;
                    text-align: center;

                    .type {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;

                        .point {
                            width: 10px;
                            height: 10px;
                            background-color: orange;
                            display: block;
                            margin: 0 5px;
                            border-radius: 50%;
                        }
                    }
                }

                div {
                    border: 0;
                    height: auto;
                }
            }
        }
        .rili{
            .e-con {
                padding:0;
                margin: 0;
                border: 0;
                width: auto;
                height: auto;

                div {
                    border: 0;
                }
            }
        }

    }
}
</style>