<template>
	<div class="article">
		<el-row>
			<el-col :span="20">
				<el-row>
					<el-col :span="18">
						<div class="grid-content bg-purple">
							<article class="article_content">
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
	created() {
		query_list.fetchDatas(this);
	}
}


</script>

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
