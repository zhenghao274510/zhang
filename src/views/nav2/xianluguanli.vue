<template>
  <div>
    <a-row>
      <a-col :span="24" class="border">
        <a-button>线路管理</a-button>
        <a-button type="primary">车辆绑定路线查询</a-button>
      </a-col>
    </a-row>
    <a-row class="xianlu_">
      <a-col :span="2">线路名称:&nbsp;&nbsp;</a-col>
      <a-col :span="6"><a-input placeholder="单行输入"/></a-col>
      <a-col :span="2">区域类型:&nbsp;&nbsp;</a-col>
      <a-col :span="1"><a-dropdown>
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">全部</a-menu-item>
        <a-menu-item key="2">线路</a-menu-item>
        <a-menu-item key="3">圆</a-menu-item>
        <a-menu-item key="4">矩形</a-menu-item>
        <a-menu-item key="5">多边形</a-menu-item>
      </a-menu>
      <a-button>
        矩形 <a-icon type="down" />
      </a-button>
    </a-dropdown>
  </a-dropdown></a-col>
  <a-col :span="9"></a-col>
      <a-col :span="2"><a-button type="primary">查询</a-button></a-col>
      <a-col :span="2"><a-button type="primary">添加</a-button></a-col>
    </a-row>
    <!-- 表格 -->
   <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data" bordered>
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
    </span>
  </a-table>
    
  </div>
</template>

<script>
const columns = [{
  title: '',
  dataIndex: 'index',
  key: 'index',
  scopedSlots: { customRender: 'index' },
  width:'50px',
  align:"center"
}, {
  title: '线路名称',
  dataIndex: 'name',
  key: 'name',
  scopedSlots: { customRender: 'name' },
  align:"center"
}, {
  title: '线路类型',
  dataIndex: 'type',
  key: 'type',
  scopedSlots: { customRender: 'type' },
  align:"center"
},{
  title: '最高速度（km/h）',
  dataIndex:'speed',
  key: 'speed',
  scopedSlots: { customRender: 'speed' },
  align:"center"
},{
  title: '开始时间',
  dataIndex:'begin',
  key: 'begin',
  scopedSlots: { customRender: 'begin' },
  align:"center"
},{
  title: '结束时间',
  dataIndex:'end',
  key: 'end',
  scopedSlots: { customRender: 'end' },
  align:"center"
}, {
  title: '操作',
  key: 'tags',
  dataIndex: 'tags',
  scopedSlots: { customRender: 'tags' },
  align:"center"
}];


const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    index: `${i+1}`,
    name: `郸城-长春`,
    type: `线路`,
    speed: `--`,
    begin:`2017-11-8 00:00:00`,
    end:`2018-11-08 13:58:33`,
    tags: ['查看', '删除','绑定车辆'],
  });
}


export default {
  data() {
    return {
      data,
     columns,
    }
  },
  computed: { //单选框
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
          }
        }),
      }
    }
  },
  methods: {
     handleMenuClick(e) {
      console.log('click', e);
    },
    //表格

  },
  components: {
    


      
  }
}
</script>

<style scoped>
  .border{
    border-bottom: 4px solid #bebebe;
    padding-left:60px; 
  }
  .border .ant-btn{
      height:40px;
  }
  .xianlu_{
    margin:15px 0;
  }
  .xianlu_ div{
    text-align: end;
    font-size:16px;
    line-height:31px; 
  }

  .editable-row-operations a {
  margin-right: 8px;
}
</style>
