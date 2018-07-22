<template>
  <div class="header">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-row type="flex" justify="center">
              <el-col :span="18">
                <h1 class="header_logo">天涯浪子画中画</h1>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple-light">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">文章</el-menu-item>
              <el-menu-item index="3" disabled>案例</el-menu-item>
               <el-menu-item index="4">个人作品</el-menu-item>
              <el-menu-item index="5"><a href="javascript:void(0);" target="_blank">关于我</a></el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入内容" v-model="inputText">
              <!-- <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select> -->
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            
            <el-button type="text">登录</el-button> | 
            <el-button type="text" disabled>注册</el-button>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import BreadNav from '@/components/bread/BreadNav.vue'
export default {
  name: 'Header',
  data () {
    return {
      logoImg: 'login图标',
      activeIndex: '1',
      inputText:''
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    BreadNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    width: 100%;
    height: 100%;
    background: #eee;
  }
  .header_logo{
    /* display: block; */
    /* background: red; */
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 60px;
    color: #eee;
  }
  .el_row {
    background-color: rgb(84, 92, 100);
  }
  .el-col {
    border-radius: 0;
    line-height: 60px;
  }
  .el-col .grid-content {
    min-height: 60px;
  }
  .grid-content.bg-purple,.bg-purple-light {
     background-color: rgb(84, 92, 100);
  }
  .el-input-group{
    width: 70%;
    margin-right: 10px;
  }
</style>
