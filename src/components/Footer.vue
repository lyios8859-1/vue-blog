<template>
  <div class="footer">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          {{footer}}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footer: 'Footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .el-col {
    border-radius: 0;
    line-height: 60px;
  }
  .el-col .grid-content {
    min-height: 60px;
    background-color: rgb(109, 199, 117);
  }
</style>
