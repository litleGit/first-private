<template>
    <div class="login">
        <div class="mask">
            <div class="m-top">
                <div class="mt-top">
                    <img src="../../assets/2.png" alt="" class="imgs">
                </div>
                <div class="mt-bot">
                    <div class="mt-title">客户关系管理系统</div>
                    <div class="mt-english">Customer Relationship Management</div>
                </div>
            </div>
            <!-- 表单验证 -->
            <div class="m-bot">
                <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="form">
                    <a-form-item label="用户名:" v-bind="validateInfos.username" :label-col="{ span: 4 }"
                        :wrapper-col="{ span: 24 }">
                        <a-input v-model:value="modelRef.username"
                            @blur="validate('name', { trigger: 'blur' }).catch(() => { })" placeholder="张三"/>
                    </a-form-item>
                    <a-form-item label="密码:" v-bind="validateInfos.password" :label-col="{ span: 4 }"
                        :wrapper-col="{ span: 24 }">
                        <a-input-password v-model:value="modelRef.password"
                            @blur="validate('name', { trigger: 'blur' }).catch(() => { })"  placeholder="123456"/>
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 14, offset: 4 }" class="btn">
                        <a-button type="primary" @click.prevent="onSubmit">登录</a-button>
                        <a-button style="margin-left: 10px" @click="resetFields">重置</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// 表单验证
import { reactive, inject, onMounted, toRaw } from 'vue';
import { message, Form } from 'ant-design-vue';
// 导入api接口
import { logins } from '@/api/api'
import { useRouter } from 'vue-router';

//获取路由跳转
let href = useRouter()
const useForm = Form.useForm;

const labelCol = { span: 4 };
const wrapperCol = { span: 14 };
const modelRef = reactive({
    username: "",
    password: null,
});
// 策略模式的表单验证
const rulesRef = reactive({
    username: [
        {
            required: true,
            message: 'many name',
        },
        {
            min: 1,
            max: 5,
            message: '长度应该在1-5之间',
            trigger: 'blur',
        },
    ],
    //密码
    password: [
        {
            required: true,
            message: '密码不能为空',
        },
        {
            min: 3,
            max: 6,
            message: '长度在3-6之间',
            trigger: 'blur',
        },
    ],
});
// 获取 表单的属性内容
const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
const onSubmit = () => {
    validate()
        .then(async () => {
            //调用login 接口
            //调用 api 中的登录接口 传递 用户名和密码(modelRef) 
            let res = await logins(toRaw(modelRef).username, toRaw(modelRef).password)            
            if (res.code === 200) {
                message.success('登录成功')
                localStorage.setItem('token',res.token)
                href.push('/loading')
            } else {
                message.error(res.msg)
            }
        })
        .catch(err => {
            console.log('error', err);
        });
};

</script>

<style scoped lang="scss">
.login {
    width: 100%;
    height: 100%;
    position: relative;
    background: url(../../assets/a4291a6cd6becf195a2846eefc5c7ab9.jpg);
    background-size: 100% 100%;

    .mask {
        padding: 20px;
        position: absolute;
        width: 500px;
        height: 600px;
        background-color: white;
        border-radius: 25px;
        left: calc(50% - 250px);
        top: calc(50% - 300px);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;

        .m-top {
            flex: 1;

            .mt-top {
                .imgs {
                    display: block;
                    margin: 20px auto;
                }
            }

            .mt-bot {
                text-align: center;

                .mt-title {
                    font-size: 35px;
                    color: #0079fe;
                    font-weight: bolder;
                    margin: 10px 0;
                }

                .mt-english {
                    font-size: 14px;
                    color: #0079fe;
                    letter-spacing: 2px;
                    margin: 10px 0;
                }
            }
        }

        .m-bot {
            flex: 1;
            width: 400px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;

            .form {
                width: 400px;

                .btn {
                    width: 100%;
                    margin: 10px 20px;
                }
            }
        }
    }
}
</style>