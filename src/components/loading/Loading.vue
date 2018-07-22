<template>
    <div class="loading">
      <img src="../../assets/img/loading.gif" alt="loading">
			<h2>{{loading}}</h2>
    </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: 'Loading'
    }
  }
}
</script>

<style scoped>
  
</style>
