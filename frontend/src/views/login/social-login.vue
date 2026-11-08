<template>
	<div class="login-third">
		<el-divider>其他登录方式</el-divider>
		<div class="third-btn">
			<el-button link title="钉钉" @click="thirdLogin('dingtalk')"><img src="./img/dingding.png" /></el-button>
			<el-button link title="飞书" @click="thirdLogin('feishu')"><img src="./img/feishu.png" /></el-button>
			<el-button link title="微信" @click="thirdLogin('wechat_open')"><img src="./img/weixin.png" /></el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import cache from '../../utils/cache'
import constant from '../../utils/constant'
import { useStore } from 'vuex';
// 获取store变量
const vueStore = useStore();
const router = useRouter()

const thirdLogin = (openType: string) => {
	// 请求接口
	const url = constant.thirdLoginUrl + openType
	// 打开新窗口
	window.open(url, '第三方登录', 'width=600, height=400, toolbar=no')

	window.onmessage = function (e) {
		if (!e.data?.platformType) {
			return
		}

		// 第三方登录

		vueStore.dispatch('thirdLogin_Action', {bindFrom:'admin_work',...e.data}).then(() => {
			router.push({ path: cache.getRedirect() || constant.loginPage })
		})
	}
}
</script>

<style lang="scss" scoped>
.login-third {
	margin-top: 36px;
	:deep(.el-divider__text) {
		color: #999 !important;
		font-size: 13px;
	}
	.third-btn {
		display: flex;
		justify-content: space-around;
		img{
			width: 36px;
			height: 36px;
		}
	}
}
</style>
