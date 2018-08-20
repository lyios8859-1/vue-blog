<template>
	<div class="article">
		<el-row>
			<el-col :span="18">
				<el-row>
					<el-col :span="24">
						<div class="grid-content bg-purple">
							<div class="container" v-cloak>
								ghgf
								<ArticleSolt/>
								<!-- <solt name="article"></solt> -->
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
export default {
	components: {
		ArticleSolt
	}
}
</script>

<style scoped>
	.article{
		width: 100%;
		height: 100%;
	}
</style>