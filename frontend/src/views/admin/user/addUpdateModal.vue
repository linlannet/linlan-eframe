<template>
  <div>
    <a-modal v-model:visible="pageData.visible" width="60%" :title="pageData.title" :destroyOnClose="true" @ok="clickModalOk" @cancel="handleModalCancel">
      <a-form ref="userAddUpdateFormRef" name="userAddUpdateForm" :model="userAddUpdateForm.data" :labelCol="{ span: 8 }" :wrapperCol="{ span: 14 }">
        <a-row :gutter="24">
          <a-col span="12">
            <a-form-item name="username" label="用户账号" :rules="[{ required: true, message: '用户账号不能为空！' }]">
              <a-input v-model:value="userAddUpdateForm.data.username" :maxlength="30" placeholder="请填写用户账号" :disabled="pageData.operateType === 'update'"></a-input>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="nickName" label="用户名称" :rules="[{ required: true, message: '用户名称不能为空！' }]">
              <a-input v-model:value="userAddUpdateForm.data.nickName" :maxlength="30" placeholder="请填写用户名称"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item name="deptId" label="所属部门" :rules="[{ required: true, message: '归属部门不能为空！' }]">
              <a-tree-select v-model:value="userAddUpdateForm.data.deptId" placeholder="请选择归属部门" :tree-data="pageData.deptTreeData" :fieldNames="{ children: 'children', label: 'label', key: 'id', value: 'id' }">
              </a-tree-select>
            </a-form-item>
          </a-col>
          <a-col :span="24" class="frame-form-whole-row">
            <a-form-item name="positionIds" label="岗位" :labelCol="{ span: 4 }" :wrapperCol="{ span: 14 }">
              <a-select mode="multiple" v-model:value="userAddUpdateForm.data.positionIds" :options="pageData.postDict" placeholder="请选择岗位"> </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24" class="frame-form-whole-row">
            <a-form-item name="roleIds" label="角色" :labelCol="{ span: 4 }" :wrapperCol="{ span: 14 }">
              <a-select mode="multiple" v-model:value="userAddUpdateForm.data.roleIds" :options="pageData.roleDict" placeholder="请选择角色"> </a-select>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="mobile" label="手机号码">
              <a-input-number v-model:value="userAddUpdateForm.data.mobile" :maxlength="11" placeholder="请填写手机号码"></a-input-number>
            </a-form-item>
          </a-col>
          <a-col span="12">
            <a-form-item name="email" label="邮箱" :rules="[{ type: 'email', message: '请填写正确的邮箱！' }]">
              <a-input v-model:value="userAddUpdateForm.data.email" :maxlength="50" placeholder="请填写邮箱"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12" v-if="pageData.operateType === 'add'">
            <a-form-item name="password" label="密码" :rules="[{ required: true, message: '密码不能为空！' }]">
              <a-input v-model:value="userAddUpdateForm.data.password" :maxlength="30" type="password" placeholder="请填写密码"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item name="status" label="状态" :rules="[{ required: true, message: '状态不能为空！' }]">
              <a-select v-model:value="userAddUpdateForm.data.status" :options="pageData.statusDict" placeholder="请选择状态"> </a-select>
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
import { addUser, getUser, updateUser } from '@/api/admin/user';
import { message } from 'ant-design-vue';

// 引入父页面方法
const pageEmit = defineEmits(["refreshFatherPageTable"]);

// 当前页面使用的数据
const pageData = reactive({
  title: '导入表',
  visible: false,
  operateType: '',
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

// 新增修改Form
const userAddUpdateFormRef = ref();
const userAddUpdateForm = reactive({ data: { positionIds: [], roleIds: [] } });
// 重置userAddUpdateForm
const resetuserAddUpdateForm = () => {
  LocalUtil.resetFormFieldsToEmpty(userAddUpdateForm.data);
  // 值为数组时，特殊处理下
  userAddUpdateForm.data.positionIds = [];
  userAddUpdateForm.data.roleIds = [];
};

// 打开新增窗口
const openAddModal = (tablePage) => {
  pageData.visible = true;
  pageData.operateType = 'add';
  pageData.title = '新增用户';
  getUser().then((response) => {
    pageData.postDict = LocalUtil.getPostDict(response.data.positions);
    pageData.roleDict = LocalUtil.getRoleDict(response.data.roles);
  });
};

// 打开修改窗口
const openUpdateModal = (record, tablePage) => {
  pageData.visible = true;
  pageData.operateType = 'update';
  pageData.title = '修改用户';
  getUser(record.adminId).then((response) => {
    userAddUpdateForm.data = response.data;
    pageData.postDict = LocalUtil.getPostDict(response.data.positions);
    pageData.roleDict = LocalUtil.getRoleDict(response.data.roles);
    userAddUpdateForm.data.positionIds = response.data.positionIds;
    userAddUpdateForm.data.roleIds = response.data.roleIds;
    console.log(userAddUpdateForm.data);
  });
};

// 点击窗口确认
const clickModalOk = (e) => {
  userAddUpdateFormRef.value
    .validateFields()
    .then((values) => {
      if (pageData.operateType === 'add') {
        addUser(userAddUpdateForm.data).then((res) => {
          pageData.visible = false;
          resetuserAddUpdateForm();
          // 调用父页面刷新方法
          pageEmit("refreshFatherPageTable");
          LocalUtil.messageSuccess('新增操作成功。');
        });
      } else if (pageData.operateType === 'update') {
        updateUser(userAddUpdateForm.data).then((res) => {
          pageData.visible = false;
          resetuserAddUpdateForm();
          // 调用父页面刷新方法
          pageEmit("refreshFatherPageTable");
          LocalUtil.messageSuccess('修改操作成功。');
        });
      }
    })
    .catch((info) => {
      console.log('Validate Failed:', info);
    });
};

// 点击窗口取消
const handleModalCancel = () => {
  resetuserAddUpdateForm();
};

// 对外暴露出去
defineExpose({
  openAddModal,
  openUpdateModal,
});
</script>

<style lang="less"></style>
