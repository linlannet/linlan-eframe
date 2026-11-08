<template>
	<div class="login-container">
		<div class="login-intro">
			<div class="background">

			</div>
			<div class="login-inner">
				<div class="login-bg">
					<LoginBg />
				</div>
				<h1>统一用户中后台管理系统</h1>
				<div class="desc">
					工程化、高性能、跨平台的一体化支撑平台
				</div> 
			</div>
			
		</div>
		<div class="login-form">
			<div class="form-inner">
				<div class="login-title">
					<el-button link :class="loginType === 'account' ? 'account' : ''" @click="loginSwitch('account')">登录</el-button>
					<el-button link :class="loginType === 'mobile' ? 'account' : ''" @click="loginSwitch('mobile')">手机登录</el-button>
				</div>
				<account v-if="loginType === 'account'" />
				<mobile v-if="loginType === 'mobile'" />
				<third />
			</div>
			<div class="copyright">
				 Copyright © 2023-2025 EFRAME. All rights reserved.
			</div>
		</div>
	</div>
	<logo />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Account from './form-login.vue'
import Mobile from './mobile-login.vue'
import Third from './social-login.vue'
import { useRoute } from 'vue-router'
import cache from '../../utils/cache'
import logo from './logo.vue'
import LoginBg from './loginbg.vue'
// 登录类型
const loginType = ref('account')
const loginSwitch = (type: string) => {
	loginType.value = type
}

// 登录跳转
const route = useRoute()
watch(
	() => route,
	value => {
		const redirect = route?.query?.redirect as string
		if (redirect && redirect !== '/') {
			cache.setRedirect(redirect)
		} else {
			cache.setRedirect('')
		}
	},
	{ immediate: true }
)
</script>

<style lang="scss" scoped>
.login-container {
	display: flex;
	align-items: center;
	height: 100vh;
}
.login-intro {
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	width: 60%;
	height: 100vh;
	flex: 0 1 auto;
	background: #f1f3f6;
	overflow: hidden;
	text-align: center;
	
	.background{
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(154deg, rgba(7, 7, 9, 0.08235) 30%, hsl(212 100% 45% / 30%) 48%, rgba(7, 7, 9, 0.08235) 64%);
    	filter: blur(100px);
	}
}
.login-intro h1 {
	margin: 50px 0 0 0;
	font-size: 26px;
	color: #333;
}
.login-intro .desc {
	color: #666;
	line-height: 32px;
	font-size: 16px;
}
.login-bg {
	margin:auto;
	width: 220px;
	animation: float-enhanced 2.5s ease-in-out infinite;
}
@keyframes float-enhanced {
  0% {
    transform: translateY(0);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-15px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0.8;
  }
}

.login-title {
	display: flex;
	justify-content: space-around;
	margin-bottom: 20px;
	:deep(.el-button) {
		font-size: 20px;
		color: #333;
		padding-bottom: 8px;
	}
	.account {
		color: var(--el-color-primary);
		border-bottom: 4px solid var(--el-color-primary) !important;
	}
}
.login-form {
	background-color: #fff;
	flex: 0 1 auto;
	padding: 40px;
	border-radius: 6px;
	box-sizing: border-box;
	width: 40%;
	.form-inner {
		width: 100%;
	}
	:deep(.el-input) {
		height: 45px;
		margin-top: 5px;
		.el-input__inner {
			padding: 10px 15px 10px 5px;
			height: 45px;
			line-height: 45px;
			color: #666;
			font-size: 16px;
		}
	}
	.copyright{
		position: absolute;
		right: 40px;
		bottom: 20px;
		text-align: right;
		color: #999;
	}
}

@media only screen and (max-width: 992px) {
	.login-intro {
		display: none;
	}
	.login-form{
		width: 100%;
	}
}
@media only screen and (max-width: 768px) {
	.login-container {
		background: #fff;
	}
	.login-intro {
		display: none;
	}
	.login-form {
		flex: 0 1 auto;
		border-radius: 0;
		box-shadow: none;
	}
	.login-captcha {
		:deep(.el-input) {
			width: 150px;
		}
	}
}
</style>
