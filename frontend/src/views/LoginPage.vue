<template>
    <div id="userLayout" :class="['user-layout-wrapper']">
        <div class="container">
            <div class="loginbox">
                <a-form id="loginForm" ref="loginFormRef" class="user-layout-login" :model="loginFormModel"
                    :rules="loginFormRules" :scrollToFirstError="true">
                    <a-page-header title="麟览一体化支撑平台系统软件"/>
                    <!-- Form校验时，需要给a-form-item添加name属性 -->
                    <a-form-item name="username">
                        <!-- 双向绑定，必须使用v-model:value -->
                        <a-input v-model:value="loginFormModel.username" size="large" placeholder="用户名">
                            <template #prefix>
                                <UserOutlined style="padding-right: 5px; color: blue" />
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item name="password">
                        <a-input-password v-model:value="loginFormModel.password" size="large" placeholder="密码">
                            <template #prefix>
                                <LockOutlined style="padding-right: 5px; color: blue" />
                            </template>
                        </a-input-password>
                    </a-form-item>
                    <a-form-item name="code">
                        <a-row :gutter="16">
                            <a-col class="gutter-row" :span="16">
                                <a-input v-model:value="loginFormModel.code" size="large" type="text" autocomplete="off"
                                    placeholder="验证码">
                                    <template #prefix>
                                        <SecurityScanOutlined style="padding-right: 5px; color: blue" />
                                    </template>
                                </a-input>
                            </a-col>
                            <a-col class="gutter-row" :span="8">
                                <img class="getCaptcha" :src="loginFormModel.codeUrl" @click="getVerifyCode" />
                            </a-col>
                        </a-row>
                    </a-form-item>
                    <a-form-item>
                        <a-button size="large" type="primary" htmlType="submit" class="login-button"
                            :disabled="loginFormModel.loginButtonDisabled" :loading="loginFormModel.loginButtonLoading"
                            @click="submitForm()">{{
                                loginFormModel.loginButtonName }}</a-button>
                    </a-form-item>
                    <!-- <a-form-item>
                        <div style="float: left; line-height: 30px">
                            还没有账号？
                            <a-button type="link">立即注册</a-button>
                            <a-button type="link">忘记密码</a-button>
                            <a-input v-model:value="loginFormModel.uuid"></a-input>
                        </div>
                    </a-form-item> -->
                </a-form>
            </div>
            <!-- <div class="footer">
          <div class="links">
            <a href="https://github.com/fuzui/AiDex-Antdv" target="_blank">帮助</a>
            <a href="https://github.com/fuzui/AiDex-Antdv" target="_blank">隐私</a>
            <a href="https://github.com/fuzui/AiDex-Antdv" target="_blank">条款</a>
          </div>
          <div class="copyright">
            Copyright &copy; 2021 <a target="_blank"></a>
          </div>
        </div> -->
        </div>
    </div>
</template>

<script setup>
import { getVerifyCodeImg } from '../api/login.js';
import { ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { UserOutlined, LockOutlined, SecurityScanOutlined } from '@ant-design/icons-vue';

// 获取router变量
const vueRouter = useRouter();
// 获取store变量
const vueStore = useStore();

const loginFormRef = ref();
// 定义表单对象
const loginFormModel = reactive({
    // username: "",
    // password: "",
    // code: "",
    username: 'admin',
    password: 'admin123',
    code: '',
    uuid: '',
    codeUrl: '',
    loginButtonDisabled: false,
    loginButtonLoading: false,
    loginButtonName: '登录',
});
// 定义表单校验规则
const loginFormRules = reactive({
    username: [{ required: true, message: '请输入用户名！', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码！', trigger: 'blur' }],
    code: [{ required: true, message: '请输入验证码！', trigger: 'blur' }],
});

// 获取验证码
const getVerifyCode = () => {
    getVerifyCodeImg().then((res) => {
        // this.captchaOnOff = res.data.captchaOnOff === undefined ? true : res.data.captchaOnOff;
        // if (this.captchaOnOff) {
        loginFormModel.codeUrl = 'data:image/gif;base64,' + res.data.img;
        loginFormModel.uuid = res.data.uuid;
        // }
    });
};

// 提交表单方法
const submitForm = () => {
    loginFormModel.loginButtonDisabled = true;
    loginFormModel.loginButtonLoading = true;
    loginFormModel.loginButtonName = '登录中...';
    loginFormRef.value
        .validate()
        .then(() => {
            vueStore
                .dispatch('Login_Action', loginFormModel)
                .then(() => {
                    // 登陆成功，跳转到主页
                    vueRouter.push({ path: '/home' }).catch(() => { });
                })
                .catch(() => {
                    loginFormModel.loginButtonDisabled = false;
                    loginFormModel.loginButtonLoading = false;
                    loginFormModel.loginButtonName = '登录';
                });
        })
        .catch((error) => {
            loginFormModel.loginButtonDisabled = false;
            loginFormModel.loginButtonLoading = false;
            loginFormModel.loginButtonName = '登录';
        });
};
// 重置表单方法
const resetForm = () => {
    loginFormRef.value.resetFields();
};

// 默认调用获取验证码方法
getVerifyCode();
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
    height: 100%;

    .container {
        width: 100%;
        min-height: 100%;
        background: #e2effc url(src/assets/img/bg_login.png) no-repeat center top;
        background-size: 100% 100%;
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: end;
        a {
            text-decoration: none;
        }

        .loginbox {
            width: 414.529px;
            height: 440.266px ;//475.266px;
            display: block;
            padding: 0 30px;
            border-radius: 20px;
            margin-right: 10vw;
            background: url(<path-to-image>) lightgray -681.477px -250.559px / 347.382% 205.194% no-repeat;
                background: #FFF;
            box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.10);
        }

        .user-layout-login {
            :deep(.ant-page-header){
                text-align: center;
                padding: 0;
                margin: 0
            }
            :deep(.ant-page-header-heading){
                justify-content: center;
            }
            :deep(.ant-page-header-heading-left) {
                margin: 0;
                padding: 0;
            }

            :deep(.ant-page-header-heading-title) {
                padding:55px 0 55px 0;
                color: #000;
                font-family: "PingFang SC";
                font-size: 32px !important;
                font-style: normal;
                font-weight: 600;
                line-height: 100%;
                margin: 0;
            }

            .getCaptcha {
                display: block;
                width: 100%;
                height: 40px;
            }

            button.login-button {
                padding: 0 15px;
                font-size: 16px;
                height: 40px;
                width: 100%;
                border-radius: 4px;
            }
        }
    }
}
</style>