<template>
  <div>
    <a-modal v-model:visible="pageData.visible" width="60%" title="用户详细信息">
      <template #footer>
        <a-button @click="pageData.visible = false">关闭</a-button>
      </template>
      <a-form class="frame-detail-page" ref="userDetailFormRef" name="userDetailForm" :model="userDetailForm.data" :labelCol="{ span: 8 }" :wrapperCol="{ span: 14 }">
        <a-row :gutter="24">
          <a-col span="12">
            <a-form-item name="username" label="用户账号">
              <span>{{ userDetailForm.data.username }}</span>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="nickName" label="用户名称">
              <span>{{ userDetailForm.data.nickName }}</span>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item name="deptId" label="所属部门">
              <span>{{ LocalUtil.getDeptNameByDeptId(userDetailForm.data.deptId, pageData.deptTreeData) }}</span>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item name="positionIds" label="岗位">
              <span>{{ LocalUtil.getPostNamesByPostIds(userDetailForm.data.positionIds, pageData.postDict) }}</span>
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <a-form-item name="roleIds" label="角色">
              <span>{{ LocalUtil.getRoleNamesByRoleIds(userDetailForm.data.roleIds, pageData.roleDict) }}</span>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item name="mobile" label="手机号码">
              <span>{{ userDetailForm.data.mobile }}</span>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item name="email" label="邮箱">
              <span>{{ userDetailForm.data.email }}</span>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item name="status" label="状态">
              <span>{{ LocalUtil.getDictLabelByKey(userDetailForm.data.status, pageData.statusDict) }}</span>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import LocalUtil from '@/utils/LocalUtil.js';
import { getUser } from '@/api/admin/user';

// 当前页面使用的数据
const pageData = reactive({
  visible: false,
  sexDict: [],
  deptTreeData: [],
  statusDict: [],
  postDict: [],
  roleDict: [],
});
LocalUtil.getDictsByType('sys_user_sex').then((res) => {
  pageData.sexDict = res;
});
LocalUtil.getDeptTreeData().then((res) => {
  pageData.deptTreeData = res.data;
});
LocalUtil.getDictsByType('sys_normal_disable').then((res) => {
  pageData.statusDict = res;
});

//详细Form
const userDetailFormRef = ref();
    const userDetailForm = reactive({ data: { positionIds: [], roleIds:[]} });
// 打开详细窗口
const openModal = (record) => {
  pageData.visible = true;
  getUser(record.adminId).then((response) => {
    userDetailForm.data = response.data;
    pageData.postDict = LocalUtil.getPostDict(response.data.positions);
    pageData.roleDict = LocalUtil.getRoleDict(response.data.roles);
    userDetailForm.data.positionIds = response.data.positionIds;
    userDetailForm.data.roleIds = response.data.roleIds;
  });
};

// 对外暴露出去
defineExpose({
  openModal,
});
</script>

<style lang="less"></style>
