<template>
  <div>
    <a-modal v-model:visible="pageData.visible" width="60%" :title="pageData.title">
      <template #footer>
        <a-button @click="pageData.visible = false">关闭</a-button>
      </template>
      <a-form class="frame-detail-page" ref="commlogDetailFormRef" name="commlogDetailForm" :model="commlogDetailForm.data" :labelCol="{ span: 8 }" :wrapperCol="{ span: 14 }">
        <a-row :gutter="24">
          <a-col span="12">
            <a-form-item name="title" label="系统模块">
              <span>{{ commlogDetailForm.data.title }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="businessType" label="操作类型">
              <span>{{ LocalUtil.getDictLabelByKey(commlogDetailForm.data.businessType, fatherPageData.sysOperTypeDict) }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="method" label="方法名称">
              <span>{{ commlogDetailForm.data.method }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="requestMethod" label="请求方式">
              <span>{{ commlogDetailForm.data.requestMethod }}</span>
            </a-form-item>
          </a-col>
          <!-- <a-col span="12">
            <a-form-item name="operatorType" label="操作类别">
              <span>{{ LocalUtil.getDictLabelByKey(commlogDetailForm.data.operatorType, fatherPageData.sysOperTypeDict) }}</span>
            </a-form-item>
          </a-col> -->
          <a-col span="12">
            <a-form-item name="operName" label="操作人员">
              <span>{{ commlogDetailForm.data.operName }}</span>
            </a-form-item>
          </a-col>
          <!-- <a-col span="12">
            <a-form-item name="deptName" label="部门名称">
              <span>{{ commlogDetailForm.data.deptName }}</span>
            </a-form-item>
          </a-col> -->
          <a-col span="12">
            <a-form-item name="operUrl" label="请求URL">
              <span>{{ commlogDetailForm.data.operUrl }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="operIp" label="主机地址">
              <span>{{ commlogDetailForm.data.operIp }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="operLocation" label="操作地点">
              <span>{{ commlogDetailForm.data.operLocation }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="operParam" label="请求参数">
              <span>{{ commlogDetailForm.data.operParam }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="jsonResult" label="返回参数">
              <span>{{ commlogDetailForm.data.jsonResult }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="status" label="操作状态">
              <span>{{ LocalUtil.getDictLabelByKey(commlogDetailForm.data.status, fatherPageData.sysCommonStatusDict) }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="errorMsg" label="错误消息">
              <span>{{ commlogDetailForm.data.errorMsg }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="operTime" label="操作时间">
              <span>{{ commlogDetailForm.data.operTime }}</span>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
// import { getCommlog } from "@/api/monitor/commlog";
import { reactive, ref } from 'vue';
import LocalUtil from '@/utils/LocalUtil.js';

// 父页面公用数据
const fatherPageData = defineProps({
  sysOperTypeDict: Array,
  sysCommonStatusDict: Array,
});

// 当前页面使用的数据
const pageData = reactive({
  title: '详细页面',
  visible: false,
  operateType: '',
});

//详细Form
const commlogDetailFormRef = ref();
const commlogDetailForm = reactive({ data: {} });
// 打开详细窗口
const openModal = (record) => {
  commlogDetailForm.data = record;
  pageData.visible = true;
  // getCommlog(record.operId).then((response) => {
  //   commlogDetailForm.data = response.data;
  //   pageData.visible = true;
  // });
};

// 对外暴露出去
defineExpose({
  openModal,
});
</script>

<style lang="less"></style>
