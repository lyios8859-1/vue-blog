<template>
	<div class="article">
		<el-row>
			<el-col :span="18">
				<el-row>
					<el-col :span="24">
						<div class="grid-content bg-purple">
							<article class="article_content" v-cloak>
								<ul>
									<li v-for="(obj, index) in article"  :key="index" v-cloak>
										<div class="left_text">
											<h2 class="title" v-text='obj["title"]' v-cloak></h2>
											<div class="content" v-text='obj["content"]' v-cloak @mouseover="overShow" @mouseout="outHide"></div>
										</div>
										<div class="right_img" v-cloak>
											<img src="../../../static/img/1.jpg" alt="" /><!--width="300px" height="200px"-->
										</div>
									</li>
								</ul>
							</article>
						</div>
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="6" style="background:blue;">
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
			article: []
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
	        	result.forEach( obj =>{  
				    this.article.push({title: obj['title'], content:obj['content']});  
				});
	        })
	        .catch(err => {
	            console.log(err);
	        });
		}
		save: {
			
		}
	},
	methods: {
		overShow: function(e) { // 鼠标悬浮时效果
			//alert(e.target.tagName)
		},
		outHide: function(e) { // 鼠标离开时效果
			//alert(e.target.tagName)
		}
	}
}


</script>

<style>
	[v-cloak] { display: none } 
</style>
<style scoped>
/* 下划线向两端缩放 */
	.title{
	    display: inline;
	    text-align: center;
	    position: relative;
	}
	.title::after{
	    position: absolute;
	    left: 0;
	    top: 100%;
	    margin-top: 4px;
	    content: '';
	    background-color: gainsboro;
	    width: 100%;
	    transform: scale(0);
	    -webkit-transform: scale(0);
	    transition: all .4s;
	    -webkit-transition: all .4s;

	}
	.title:hover::after{
	    height: 2px;
	    -webkit-transform: scale(1);
	    transform: scale(1);
	}
/* 下划线向两端缩放 */




   .article{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.article .article_content {
		width: 100%;
		height: 100%;
	}
	.content_container{
		width: 88%;
		height: 100%;
		background: blue;
	}
	.loadmore{
		margin: 10px auto;
		width: 100%;
		background: yellow;
	}
	.el-row{
		margin: 0;
	}
	.article_content li{
		position: relative;
		width: 100%;
		height: 200px;
		margin-bottom: 10px;
	    line-height: 25px;
	    box-shadow: 1px 1px 1px 1px #ddd;
	    
	}
	.article_content li:hover{
		box-shadow: 0px 10px 16px 0px #666;
	}
	.article_content li:last-child{ 
		margin-bottom: 0px;
		border-bottom: 0px;
	}
	.article_content li .title{
		font-size: 20px;
	    font-weight: bold;
	    line-height: 38px;
	    height: 38px;
	}
	.article_content .left_text{
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100% - 270px);
		margin-left: 20px;
	}
	.article_content .right_img{
		position: absolute;
		top: 0;
		right: 0;
		width: 250px;
	    height: 160px;
	    margin-top: 20px;
	}
	.right_img img{
		display: inline-block;
	  	height: auto;
	  	max-width: 100%;
	}
	.article_content li .content{
		height: 162px;
	}
</style>
