<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="标题" prop="title">
        <el-input
          v-model="queryParams.title"
          placeholder="请输入标题"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="发布时间，可设置定时，发布开始时间">
        <el-date-picker
          v-model="daterangePublishTime"
          style="width: 240px"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="是否线上" prop="isOnline">
        <el-select v-model="queryParams.isOnline" placeholder="请选择是否线上" clearable>
          <el-option
            v-for="dict in dict.type.sys_normal_disable"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="关键词" prop="keywords">
        <el-input
          v-model="queryParams.keywords"
          placeholder="请输入关键词"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态(-1:退回;0:草稿;1:审核中;2:审核通过;4:投稿中;9:回收站)" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择状态(-1:退回;0:草稿;1:审核中;2:审核通过;4:投稿中;9:回收站)" clearable>
          <el-option
            v-for="dict in dict.type.sys_common_status"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['admin:info:save']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['admin:info:update']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['admin:info:delete']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['admin:info:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="infoList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="信息ID" align="center" prop="infoId" />
      <el-table-column label="标题" align="center" prop="title" />
      <el-table-column label="发布时间，可设置定时，发布开始时间" align="center" prop="publishTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.publishTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="签收方式" align="center" prop="signType" />
      <el-table-column label="状态(-1:退回;0:草稿;1:审核中;2:审核通过;4:投稿中;9:回收站)" align="center" prop="status">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.sys_common_status" :value="scope.row.status"/>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['admin:info:update']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['admin:info:delete']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改会议调度信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="栏目ID" prop="channelId">
          <el-input v-model="form.channelId" placeholder="请输入栏目ID" />
        </el-form-item>
        <el-form-item label="行政区划编号，可以和城市平台的行政区划一致，可分级进行数据控制" prop="xzqhId">
          <el-input v-model="form.xzqhId" placeholder="请输入行政区划编号，可以和城市平台的行政区划一致，可分级进行数据控制" />
        </el-form-item>
        <el-form-item label="应用ID" prop="appId">
          <el-input v-model="form.appId" placeholder="请输入应用ID" />
        </el-form-item>
        <el-form-item label="站点ID" prop="siteId">
          <el-input v-model="form.siteId" placeholder="请输入站点ID" />
        </el-form-item>
        <el-form-item label="内容模型ID" prop="modelId">
          <el-input v-model="form.modelId" placeholder="请输入内容模型ID" />
        </el-form-item>
        <el-form-item label="企业会员信息ID，或者保存ORGAN_ID，所属单位" prop="entId">
          <el-input v-model="form.entId" placeholder="请输入企业会员信息ID，或者保存ORGAN_ID，所属单位" />
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="form.author" placeholder="请输入作者" />
        </el-form-item>
        <el-form-item label="编码，代码，标识符" prop="code">
          <el-input v-model="form.code" placeholder="请输入编码，代码，标识符" />
        </el-form-item>
        <el-form-item label="来源" prop="source">
          <el-input v-model="form.source" placeholder="请输入来源" />
        </el-form-item>
        <el-form-item label="来源链接，相关资源，参考的外部资源" prop="sourceUrl">
          <el-input v-model="form.sourceUrl" placeholder="请输入来源链接，相关资源，参考的外部资源" />
        </el-form-item>
        <el-form-item label="摘要" prop="abstractInfo">
          <el-input v-model="form.abstractInfo" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="发布时间，可设置定时，发布开始时间" prop="publishTime">
          <el-date-picker clearable
            v-model="form.publishTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择发布时间，可设置定时，发布开始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="是否线上" prop="isOnline">
          <el-select v-model="form.isOnline" placeholder="请选择是否线上">
            <el-option
              v-for="dict in dict.type.sys_normal_disable"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="线上会议地址，线下会议室地址及名称" prop="address">
          <el-input v-model="form.address" placeholder="请输入线上会议地址，线下会议室地址及名称" />
        </el-form-item>
        <el-form-item label="文库路径" prop="docPath">
          <el-input v-model="form.docPath" placeholder="请输入文库路径" />
        </el-form-item>
        <el-form-item label="责任行业条线ID，如市场监督条线" prop="dutyDepttypeId">
          <el-input v-model="form.dutyDepttypeId" placeholder="请输入责任行业条线ID，如市场监督条线" />
        </el-form-item>
        <el-form-item label="管理责任机构ID，任务业务的管理机构" prop="dutyOrganId">
          <el-input v-model="form.dutyOrganId" placeholder="请输入管理责任机构ID，任务业务的管理机构" />
        </el-form-item>
        <el-form-item label="责任人ID" prop="dutyUserId">
          <el-input v-model="form.dutyUserId" placeholder="请输入责任人ID" />
        </el-form-item>
        <el-form-item label="责任地域ID或责任地域CODE" prop="dutyAreaId">
          <el-input v-model="form.dutyAreaId" placeholder="请输入责任地域ID或责任地域CODE" />
        </el-form-item>
        <el-form-item label="责任地域层级" prop="dutyAreaLevel">
          <el-input v-model="form.dutyAreaLevel" placeholder="请输入责任地域层级" />
        </el-form-item>
        <el-form-item label="内容，知识库的问题" prop="txt">
          <el-input v-model="form.txt" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="扩展内容1，知识库问题的回答" prop="txt1">
          <el-input v-model="form.txt1" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="指定模板，内容展示模板">
          <editor v-model="form.tplContent" :min-height="192"/>
        </el-form-item>
        <el-form-item label="图片路径" prop="imagePath">
          <el-input v-model="form.imagePath" placeholder="请输入图片路径" />
        </el-form-item>
        <el-form-item label="是否重要0否1是" prop="isImportant">
          <el-input v-model="form.isImportant" placeholder="请输入是否重要0否1是" />
        </el-form-item>
        <el-form-item label="关键词" prop="keywords">
          <el-input v-model="form.keywords" placeholder="请输入关键词" />
        </el-form-item>
        <el-form-item label="排序码" prop="priority">
          <el-input v-model="form.priority" placeholder="请输入排序码" />
        </el-form-item>
        <el-form-item label="发布范围(0:全部;1:仅网站平台;2:仅移动终端;3:仅电视端;pubRange为2时移动端全端支持;40仅市民云;41仅政务微信;42仅微信小程序;43仅支付宝)" prop="pubRange">
          <el-input v-model="form.pubRange" placeholder="请输入发布范围(0:全部;1:仅网站平台;2:仅移动终端;3:仅电视端;pubRange为2时移动端全端支持;40仅市民云;41仅政务微信;42仅微信小程序;43仅支付宝)" />
        </el-form-item>
        <el-form-item label="状态(-1:退回;0:草稿;1:审核中;2:审核通过;4:投稿中;9:回收站)" prop="status">
          <el-select v-model="form.status" placeholder="请选择状态(-1:退回;0:草稿;1:审核中;2:审核通过;4:投稿中;9:回收站)">
            <el-option
              v-for="dict in dict.type.sys_common_status"
              :key="dict.value"
              :label="dict.label"
              :value="parseInt(dict.value)"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="最后时间" prop="lastTime">
          <el-date-picker clearable
            v-model="form.lastTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择最后时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="删除标记" prop="delFlag">
          <el-input v-model="form.delFlag" placeholder="请输入删除标记" />
        </el-form-item>
        <el-form-item label="说明" prop="description">
          <el-input v-model="form.description" placeholder="请输入说明" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listInfo, getInfo, delInfo, addInfo, updateInfo } from "@/api/admin/info";

export default {
  name: "Info",
  dicts: ['sys_common_status', 'sys_normal_disable'],
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 会议调度信息表格数据
      infoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 说明时间范围
      daterangePublishTime: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        title: null,
        publishTime: null,
        isOnline: null,
        signType: null,
        keywords: null,
        status: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        title: [
          { required: true, message: "标题不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询会议调度信息列表 */
    getList() {
      this.loading = true;
      this.queryParams.params = {};
      if (null != this.daterangePublishTime && '' != this.daterangePublishTime) {
        this.queryParams.params["beginPublishTime"] = this.daterangePublishTime[0];
        this.queryParams.params["endPublishTime"] = this.daterangePublishTime[1];
      }
      listInfo(this.queryParams).then(response => {
        this.infoList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        infoId: null,
        channelId: null,
        xzqhId: null,
        appId: null,
        siteId: null,
        modelId: null,
        entId: null,
        title: null,
        author: null,
        code: null,
        source: null,
        sourceUrl: null,
        abstractInfo: null,
        publishTime: null,
        isOnline: null,
        address: null,
        docPath: null,
        docType: null,
        signType: null,
        dutyDepttypeId: null,
        dutyOrganId: null,
        dutyUserId: null,
        dutyAreaId: null,
        dutyAreaLevel: null,
        txt: null,
        txt1: null,
        tplContent: null,
        imagePath: null,
        isImportant: null,
        keywords: null,
        priority: null,
        pubRange: null,
        status: null,
        creatorId: null,
        createTime: null,
        lastTime: null,
        delFlag: null,
        description: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.daterangePublishTime = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.infoId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加会议调度信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const infoId = row.infoId || this.ids
      getInfo(infoId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改会议调度信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.infoId != null) {
            updateInfo(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addInfo(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const infoIds = row.infoId || this.ids;
      this.$modal.confirm('是否确认删除会议调度信息编号为"' + infoIds + '"的数据项？').then(function() {
        return delInfo(infoIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('api/admin/info/export', {
        ...this.queryParams
      }, `info_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
