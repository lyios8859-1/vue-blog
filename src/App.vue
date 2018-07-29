<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    
  }
}
</script>

<style>
ul {
  list-style-type: none;
}
li {
  display: inline-block;
}
a {
  text-decoration: none;
  color: #42b983;
}
img{
  vertical-align: middle;
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
