<template>
	<div class="article">
		<el-row>
			<el-col :span="20">
				<el-row>
					<el-col :span="18">
						<div class="grid-content bg-purple">
							<article class="article_content" v-cloak>
							{{article}}
							</article>
						</div>
					</el-col>
					<el-col :span="6" style="background: yellow;">
						dsfadsfsadf
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="4" style="background:blue;">
				<el-row>
					<el-col :span="24">
						<div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div>
						<div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div>
					</el-col>
				</el-row>
			</el-col>
    	</el-row>
	</div>
</template>

<script>
import query_list from '@/query/query_list'
export default {
	name: 'Article',
	data() {
		return {
			article: ''
		}
	},
	created() { //初始化data, el还没有
	},
	mounted(){ //初始化data, el，请求数据了
		query: {
			let result = query_list.fetchDatas(this);
	        result.then(res => {
	        	//let result = JSON.parse(res.data);//如果传递的时json格式的字符串就是转换一下
	        	let result = res.data;
				this.article = result.message;
	        })
	        .catch(err => {
	            console.log(err);
	        });
		}
		save: {
			
		}
	}
}


</script>

<style>
	[v-cloak] { display: none } 
</style>
<style scoped>
  .article{
		width: 100%;
		height: 100%;
	}
	.article .article_content {
		width: 100%;
		height: 100px;
		background-color: red;
	}
	.content_container{
		width: 88%;
		height: 100%;
		background: blue;
	}
	.loadmore{
		margin: 10px auto;
		width: 100%;
		height: 40px;
		background: yellow;
	}
	.el-row{
		margin: 10px auto;
	}
</style>
