<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" @keyup.enter="onLogin">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input v-model="loginForm.password" :prefix-icon="Lock" show-password placeholder="请输入用户密码"></el-input>
		</el-form-item>
		<el-form-item v-if="captchaVisible" prop="captcha" class="login-captcha">
			<el-input v-model="loginForm.captcha" placeholder="请输入验证码" :prefix-icon="Key"></el-input>
			<img :src="captchaBase64" @click="onCaptcha" />
		</el-form-item>
		<el-form-item class="login-button">
			<el-button type="primary" @click="onLogin()">登录</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { User, Lock, Key } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import cache from '../../utils/cache'
import constant from '../../utils/constant'
import { getVerifyCodeImg } from '../../api/login'
import { useStore } from 'vuex';
// 获取store变量
const vueStore = useStore();
const router = useRouter()
const loginFormRef = ref()
const captchaBase64 = ref()

const loginForm = reactive({
	username:  '',
	password:  '',
	key: '',
	captcha: ''
})

const loginRules = ref({
	username: [{ required: true, message:'请输入用户名', trigger: 'blur' }],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
	captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

// 是否显示验证码
const captchaVisible = ref(true)

onMounted(() => {
	//onCaptchaEnabled()
	onCaptcha()
})

// const onCaptchaEnabled = async () => {
// 	const { data } = await useCaptchaEnabledApi()
// 	captchaVisible.value = data

// 	if (data) {
// 		await onCaptcha()
// 	}
// }

const onCaptcha = async () => {
	const { data } = await getVerifyCodeImg()
	if (data.enabled) {
		captchaVisible.value = true
	}
	loginForm.key = data.uuid
	captchaBase64.value = 'data:image/gif;base64,' +  data.img
}

const onLogin = () => {
	loginFormRef.value.validate((valid: boolean) => {
		if (!valid) {
			return false
		}

		// 重新封装登录数据
		const loginData = {
			username: loginForm.username,
			password: loginForm.password,
			uuid: loginForm.key,
			code: loginForm.captcha
		}

		// 用户登录
		vueStore.dispatch('Login_Action', loginData)
			.then(() => {
				router.push({ path: cache.getRedirect() || constant.loginPage })
			})
			.catch(() => {
				if (captchaVisible.value) {
					onCaptcha()
				}
			})
	})
}
</script>

<style lang="scss" scoped>
.login-captcha {
	:deep(.el-input) {
		width: 200px;
	}
}
.login-captcha img {
	width: 150px;
	height: 40px;
	margin: 5px 0 0 10px;
	cursor: pointer;
}
.login-button {
	:deep(.el-button--primary) {
		margin-top: 10px;
		width: 100%;
		height: 45px;
		font-size: 18px;
		letter-spacing: 8px;
	}
}
</style>
