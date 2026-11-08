<template>
	<el-table :data="thirdList">
		<el-table-column type="index" label="序号" width="100" align="center" />
		<el-table-column prop="openType" label="平台类型" align="center">
			<template #default="scope">
				<el-text v-if="scope.row.openType === 'dingtalk'"><img class="icon-third" src="../login/img/dingding.png" /> 钉钉</el-text>
				<el-text v-else-if="scope.row.openType === 'feishu'"><img  class="icon-third" src="../login/img/feishu.png" />飞书</el-text>
				<el-text v-else-if="scope.row.openType === 'wechat_open'"><img  class="icon-third" src="../login/img/weixin.png" /> 微信</el-text>
			</template>
		</el-table-column>
		<el-table-column prop="username" label="用户名" align="center" />
		<el-table-column prop="nickName" label="昵称" align="center" />
		<el-table-column prop="status" label="状态" align="center">
			<template #default="scope">
				<el-tag v-if="scope.row.status === 0" type="success">已绑定</el-tag>
				<el-tag v-else type="danger">未绑定</el-tag>
			</template>
		</el-table-column>
		<el-table-column label="操作" align="center" width="100">
			<template #default="scope">
				<el-button v-if="scope.row.status === 1" type="danger" link @click="handleBind(scope.row.openType)">绑定</el-button>
				<el-button v-else type="primary" link @click="handleUnBind(scope.row)">解绑</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import constant from '../../utils/constant'
import { socialBind,socialUnbind,getMyBindList } from '../../api/user'

let thirdList = reactive([
	{ openType: 'dingtalk', username: '-', nickName: '-', status: 1 },
	{ openType: 'feishu', username: '-', nickName: '-', status: 1 },
	{ openType: 'wechat_open', username: '-', nickName: '-', status: 1 }
])

const getThirdList = async () => {
	const res = await getMyBindList()

	thirdList.forEach(third => {
		// 初始化
		third.status = 1
		third.username = '-'

		res.data.list.forEach((item: any) => {
			if (third.openType === item.openType) {
				third.status = 0
				third.username = item.username
				third.nickName = item.spare1

			}
		})
	})
}

getThirdList()

// 绑定
const handleBind = (openType: string) => {
	// 请求接口
	const url = constant.thirdLoginUrl + openType
	// 打开新窗口
	window.open(url, '第三方登录', 'width=600, height=400, toolbar=no')

	window.onmessage = function (e) {
		if (!e.data?.platformType) {
			return
		}

		socialBind(e.data).then(() => {
			ElMessage.success({
				message: '操作成功',
				duration: 500,
				onClose: () => {
					getThirdList()
				}
			})
		})
	}
}

// 解绑
const handleUnBind = (item: any) => {
	socialUnbind({platformType:item.openType,bindFrom:'admin_work'}).then(() => {
		ElMessage.success({
			message: '操作成功',
			duration: 500,
			onClose: () => {
				getThirdList()
			}
		})
	})
}
</script>

<style lang="scss" scoped>
.profile-password .el-input {
	--el-input-width: 280px;
}
.icon-third{
	width: 36px;
	height: 36px;
}
</style>
