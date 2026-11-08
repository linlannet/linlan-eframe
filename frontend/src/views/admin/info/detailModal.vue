<template>
	<div>
		<a-modal v-model:visible="pageDataObj.visible" width="60%" :title="pageDataObj.title">
			<template #footer>
				<a-button @click="pageDataObj.visible = false">关闭</a-button>
			</template>
			<a-form class="frame-detail-page" ref="detailFormRef" name="detailFormObj" :model="detailFormObj.data" :labelCol="{ span: 8 }" :wrapperCol="{ span: 14 }">
				<a-row :gutter="24">
					<a-col span="12">
						<a-form-item name="code" label="编码">
							<span>{{ detailFormObj.data.code }}</span>
						</a-form-item>
					</a-col>
					<a-col span="12">
						<a-form-item name="title" label="标题">
							<span>{{ detailFormObj.data.title }}</span>
						</a-form-item>
					</a-col>
					<a-col span="12">
						<a-form-item name="priority" label="排序">
							<span>{{ detailFormObj.data.priority }}</span>
						</a-form-item>
					</a-col>
					<a-col span="12">
						<a-form-item name="status" label="状态">
							<span>{{ LocalUtil.getDictLabelByKey(detailFormObj.data.status, fatherPageDataObj.sysNormalDisableDict) }}</span>
						</a-form-item>
					</a-col>
					<a-col span="12">
						<a-form-item name="remark" label="备注">
							<span>{{ detailFormObj.data.remark }}</span>
						</a-form-item>
					</a-col>
				</a-row>
			</a-form>
		</a-modal>
	</div>
</template>

<script setup>
	import {getInfo} from "@/api/admin/info";
	import {reactive, ref} from 'vue';
	import LocalUtil from '@/utils/LocalUtil.js';

	// 父页面公用数据
	const fatherPageDataObj = defineProps({
    sysNormalDisableDict: Array,
	});

	// 当前页面使用的数据
	const pageDataObj = reactive({
		title: '详细页面',
		visible: false,
		operateType: '',
	});

	//详细Form
	const detailFormRef = ref();
	const detailFormObj = reactive({data: {}});
	// 打开详细窗口
	const openModal = (record) => {
	    getInfo(record.infoId).then((response) => {
		    detailFormObj.data = response.data;
		    pageDataObj.visible = true;
	    });
	};

	// 对外暴露出去
	defineExpose({
		openModal,
	});
</script>

<style lang="less"></style>
