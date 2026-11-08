<template>
	<div>
		<a-form ref="queryFormRef" name="queryCommlogForm" :model="queryCommlogForm.data" :labelCol="{ span: 8 }"
			:wrapperCol="{ span: 14 }">
			<a-row :gutter="24">
				<a-col span="8">
					<a-form-item name="title" label="系统模块">
						<a-input v-model:value="queryCommlogForm.data.title" allowClear></a-input>
					</a-form-item>
				</a-col>
				<a-col span="8">
					<a-form-item name="businessType" label="操作类型">
						<a-select v-model:value="queryCommlogForm.data.businessType" :options="pageData.sysOperTypeDict"
							allowClear> </a-select>
					</a-form-item>
				</a-col>
				<a-col span="8">
					<a-form-item name="operName" label="操作人员">
						<a-input v-model:value="queryCommlogForm.data.operName" allowClear></a-input>
					</a-form-item>
				</a-col>
				<a-col span="8">
					<a-form-item name="status" label="操作状态">
						<a-select v-model:value="queryCommlogForm.data.status" :options="pageData.sysCommonStatusDict"
							allowClear> </a-select>
					</a-form-item>
				</a-col>
				<a-col :span="8">
					<a-form-item name="operTime" label="操作时间起期">
						<a-date-picker v-model:value="queryCommlogForm.data.params.beginTime" format="YYYY-MM-DD"
							valueFormat="YYYY-MM-DD" />
					</a-form-item>
				</a-col>
				<a-col :span="8">
					<a-form-item name="operTime" label="操作时间止期">
						<a-date-picker v-model:value="queryCommlogForm.data.params.endTime" format="YYYY-MM-DD"
							valueFormat="YYYY-MM-DD" />
					</a-form-item>
				</a-col>
			</a-row>
			<a-row :gutter="24" class="frame-button-row">
				<a-col :span="12" style="text-align: left">
					<!-- <a-button type="primary" @click="openCommlogAddModal()" v-hasPermi="['monitor:commlog:add']"><LocalIcon icon="plus-outlined" />新增</a-button> -->
					<a-button type="primary" danger @click="clickDeleteCommlog()"
						:disabled="commlogTableObj.selectedRowKeys.length <= 0" v-hasPermi="['monitor:commlog:remove']">
						<LocalIcon icon="delete-outlined" />删除
					</a-button>
					<a-button type="primary" danger @click="clickCleanCommlog()"
						v-hasPermi="['monitor:commlog:remove']">
						<LocalIcon icon="delete-outlined" />清空
					</a-button>
					<a-button type="primary" @click="clickExport()" v-hasPermi="['monitor:commlog:export']">
						<LocalIcon icon="export-outlined" />导出
					</a-button>
				</a-col>
				<a-col :span="12" style="text-align: right">
					<a-button type="primary" @click="queryCommlogList()">
						<LocalIcon icon="SearchOutlined" />查询
					</a-button>
					<a-button @click="resetCommlogQueryForm()">
						<LocalIcon icon="redo-outlined" />重置
					</a-button>
				</a-col>
			</a-row>
		</a-form>

		<a-table rowKey="operId" :columns="commlogTableObj.columns" :data-source="commlogTableObj.dataSource"
			:loading="commlogTableObj.loading" :pagination="commlogTablePagination" @change="commlogTableHandChangePage"
			:row-selection="{ selectedRowKeys: commlogTableObj.selectedRowKeys, onChange: onCommlogTableSelectChange }"
			bordered size="small" tableLayout="fixed">
			<template #bodyCell="{ index, column, record }">
				<template v-if="column.key === 'pageIndex'">
					{{ index + 1 }}
				</template>
				<template v-else-if="column.key === 'businessType'">
					<span> {{ LocalUtil.getDictLabelByKey(record.businessType, pageData.sysOperTypeDict) }} </span>
				</template>
				<template v-else-if="column.key === 'status'">
					<span>
						{{ LocalUtil.getDictLabelByKey(record.status, pageData.sysCommonStatusDict) }}
					</span>
				</template>
				<template v-else-if="column.key === 'commlogTableOperateCol'">
					<span>
						<a @click="openCommlogDetailModal(record)"> 查看 </a>
						<!-- <a-divider type="vertical" v-hasPermi="['monitor:commlog:edit']" />
            <a @click="openCommlogUpdateModal(record)" v-hasPermi="['monitor:commlog:edit']"> 修改 </a> -->
					</span>
				</template>
			</template>
		</a-table>

		<!-- <CommlogAddUpdateModal ref="commlogAddUpdateModalRef" :sysOperTypeDict="pageData.sysOperTypeDict" :sysOperTypeDict="pageData.sysOperTypeDict" :sysCommonStatusDict="pageData.sysCommonStatusDict" /> -->
		<CommlogDetailModal ref="commlogDetailModalRef" :sysOperTypeDict="pageData.sysOperTypeDict"
			:sysCommonStatusDict="pageData.sysCommonStatusDict" />
	</div>
</template>

<script setup name="Commlog">
	import {
    listCommlog,
		delCommlog,
		cleanCommlog,
		exportCommlog
	} from '@/api/monitor/commlog';
	// import CommlogAddUpdateModal from './addUpdateModal.vue';
	import CommlogDetailModal from './detailModal.vue';
	import {
		computed,
		reactive,
		ref
	} from 'vue';
	import {
		LocalIcon
	} from '@/utils/LocalIcon.js';
	import LocalUtil from '@/utils/LocalUtil.js';
	import moment from 'moment';

	// 当前页面使用的数据
	const pageData = reactive({
		sysOperTypeDict: [],
		sysCommonStatusDict: [],
	});

	LocalUtil.getDictsByType('sys_oper_type').then((res) => {
		pageData.sysOperTypeDict = res;
	});
	LocalUtil.getDictsByType('sys_common_status').then((res) => {
		pageData.sysCommonStatusDict = res;
	});
	// 查询Form
	const queryFormRef = ref();
	const queryCommlogForm = reactive({
		data: {
			page: 1,
			limit: 10,
			params: {}
		}
	});

	// 重置查询Form
	const resetCommlogQueryForm = () => {
		queryCommlogForm.data = {
			page: 1,
			limit: 10,
			params: {},
		}
		queryCommlogList()
	};
	// 列表数据
	const commlogTableObj = reactive({
		// 列表数据集
		dataSource: [],
		// 列表总记录数
		total: 0,
		// 列表加载是否加载中
		loading: false,
		// 列表选中行数组
		selectedRowKeys: [],
		// 列表列定义
		columns: [{
				title: '序号',
				dataIndex: 'pageIndex',
				key: 'pageIndex',
				width: 50,
				align: 'center',
			},
			{
				title: '系统模块',
				key: 'title',
				dataIndex: 'title',
			},
			{
				title: '操作类型',
				key: 'businessType',
				dataIndex: 'businessType',
			},
			// {
			//   title: '操作类别',
			//   key: 'operatorType',
			//   dataIndex: 'operatorType',
			// },
			{
				title: '方法名称',
				key: 'method',
				dataIndex: 'method',
			},
			{
				title: '请求方式',
				key: 'requestMethod',
				dataIndex: 'requestMethod',
			},
			{
				title: '操作人员',
				key: 'operName',
				dataIndex: 'operName',
			},
			{
				title: '请求URL',
				key: 'operUrl',
				dataIndex: 'operUrl',
			},
			{
				title: '操作地点',
				key: 'operLocation',
				dataIndex: 'operLocation',
			},
			{
				title: '操作状态',
				key: 'status',
				dataIndex: 'status',
			},
			{
				title: '操作时间',
				key: 'operTime',
				dataIndex: 'operTime',
			},
			{
				title: '操作',
				key: 'commlogTableOperateCol',
				width: 100,
			},
		],
	});


	// 查询列表数据
	const queryCommlogList = () => {
		// 调用后端列表查询方法，通过返回结果设置commlogTableObj.total，commlogTableObj.dataSource，commlogTableObj.loading
		debugger
    LocalUtil.getTableDataByQueryFuncV2(listCommlog(queryCommlogForm.data), commlogTableObj);
	}

	// 默认查询列表数据
	queryCommlogList();

	// 用户列表翻页工具条：必须通过计算函数每次重新生成
	const commlogTablePagination = computed(() => LocalUtil.createTablePaginationV2(commlogTableObj, queryCommlogForm));

	// 手动翻页方法
	const commlogTableHandChangePage = (page, filters, sorter) => {
		queryCommlogForm.data.pageSize = page.pageSize;
		queryCommlogForm.data.pageNum = page.current;
		queryCommlogList();
	};

	// 列表选中方法
	const onCommlogTableSelectChange = (selectedRowKeys, selectedRows) => {
		commlogTableObj.selectedRowKeys = selectedRowKeys;
		// console.log('selectedRows[0].dictType=' + JSON.stringify(selectedRows[0].dictType));
	};


	// // 打开新增窗口
	// const commlogAddUpdateModalRef = ref();
	// const openCommlogAddModal = () => {
	//   commlogAddUpdateModalRef.value.openAddModal(commlogTablePage);
	// };

	// // 打开修改窗口
	// const openCommlogUpdateModal = (record) => {
	//   commlogAddUpdateModalRef.value.openUpdateModal(record, commlogTablePage);
	// };

	// 打开详细窗口
	const commlogDetailModalRef = ref();
	const openCommlogDetailModal = (record) => {
		commlogDetailModalRef.value.openModal(record);
	};

	// 点击删除
	const clickDeleteCommlog = () => {
		LocalUtil.confirmDeleteSelectedData(() => {
			delCommlog(commlogTableObj.selectedRowKeys).then((res) => {
				commlogTableObj.selectedRowKeys = [];
				LocalUtil.messageSuccess('删除操作成功。');
				commlogTablePage.reload();
			});
		});
	};

	// 点击清空
	const clickCleanCommlog = () => {
		LocalUtil.confirmCleanAllData(() => {
			cleanCommlog().then((res) => {
				LocalUtil.messageSuccess('清空操作成功。');
				commlogTablePage.reload();
			});
		});
	};

	// 点击导出
	const clickExport = () => {
		let exportUrl = 'monitor/commlog/export';
		let moduleName = "操作日志";
		let exportFileName = moduleName + "_" + moment().format('YYYY-MM-DD_HH-mm-ss') + ".xlsx";
		LocalUtil.download(exportUrl, queryCommlogForm.data, exportFileName);
	};
</script>
<style lang="less"></style>
