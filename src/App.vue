<template>
  <div id="app">
    <router-view/>
    <button @click="fetchData">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fetchData(){
      let self = this;
      let postData = {
        userName:'admin',
        password:'123456'
      };
      self.$axios.get('/api/querylist'/*,{
        params: {
          ...postData,
        }
      }*/).then(res => {
        alert(JSON.parse(res));
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: #42b983;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
