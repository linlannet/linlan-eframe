<template>
	<el-form ref="dataFormRef" :model="dataForm" :rules="dataRules" label-width="100px">
		<el-form-item prop="password" label="旧密码">
			<el-input v-model="dataForm.password" type="password" show-password></el-input>
		</el-form-item>
		<el-form-item prop="newPassword" label="新密码">
			<el-input v-model="dataForm.newPassword" type="password" show-password></el-input>
		</el-form-item>
		<el-form-item prop="confirmPassword" label="确认密码">
			<el-input v-model="dataForm.confirmPassword" type="password" show-password></el-input>
		</el-form-item>
		<el-form-item>
			<el-button 
				type="primary" 
				@click="handleDataForm"
				:loading="loading"
				:disabled="loading"
			>
				{{ loading ? '提交中...' : '提交' }}
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { updatePwd } from '@/api/user'
import { validatePassword } from '@/utils/validate'
import { ElMessage } from 'element-plus'

const dataFormRef = ref<FormInstance>()
const loading = ref(false)

const dataForm = reactive({
	password: '',
	newPassword: '',
	confirmPassword: ''
})

const validateConfirmPassword = (rule: any, value: string, callback: any) => {
	if (!value) {
		callback(new Error('请输入确认密码'))
	} else if (value !== dataForm.newPassword) {
		callback(new Error('两次输入的密码不一致'))
	} else {
		callback()
	}
}

const dataRules = ref({
	password: [{ required: true, message: '请输入旧密码', trigger: 'blur' }],
	newPassword: [{ required: true, validator: validatePassword, trigger: 'blur' }],
	confirmPassword: [
		{ required: true, message: '请输入确认密码', trigger: 'blur' },
		{ validator: validateConfirmPassword, trigger: 'blur' }
	]
})

const handleDataForm = async () => {
	if (loading.value) return
	
	try {
		const valid = await dataFormRef.value?.validate()
		if (!valid) return
		
		loading.value = true
		await updatePwd(dataForm.password, dataForm.newPassword)
		ElMessage.success('修改成功')
		
		// 清空表单
		Object.keys(dataForm).forEach(key => {
			dataForm[key] = ''
		})
		dataFormRef.value?.resetFields()
	} catch (error: any) {
		ElMessage.error(error?.message || '修改失败，请稍后重试')
	} finally {
		loading.value = false
	}
}
</script>
