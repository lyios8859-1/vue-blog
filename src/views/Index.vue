<template>
    <div class="index">
      <header>
        <Header></Header>
      </header>
      <main>
        <Article></Article>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Article from '@/views/article/Article'

export default {
  name: 'Index',
  data() {
    return {
      title: '首页'
    }
  },
  components: {
    Header,
    Article,
    Footer
  }
}
</script>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  main{
    margin: 10px auto;
  }

</style>
