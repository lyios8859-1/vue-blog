<template>
	<div class="article">
		<el-row>
			<el-col :span="18">
				<el-row>
					<el-col :span="24">
						<div class="grid-content bg-purple">
							<div class="container" v-cloak>
								<div v-if="serachData.length <= 0">
									<ArticleSolt>
										<!-- <div></div> -->
										<!-- <div slot="serach">父组件与子组件有对应的solt则显示父组件的信息</div> -->
									</ArticleSolt>
								</div>
								<div v-else>
									<SerachSolt :serachData="serachData"></SerachSolt>
								</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="6" style="background: blue;margin-top: 10px;">
				<el-row>
					<el-col :span="24">
						<div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div>
						<div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div><div>ksdlaflksd</div>
					</el-col>
				</el-row>
			</el-col>
    	</el-row>
	</div>
</template>

<script>
import ArticleSolt from '@/components/article_template/article_template.vue'
import SerachSolt from '@/components/article_template/serach_template.vue'
export default {
	props: ['serachData'],
	methods: {

	},
	components: {
		ArticleSolt,
		SerachSolt
	}
}
</script>

<style scoped>
	.article{
		width: 100%;
		height: 100%;
	}
</style>