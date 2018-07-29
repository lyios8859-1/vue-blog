<template>
	<div class="article">
		<el-row>
			<el-col :span="18">
				<el-row>
					<el-col :span="24">
						<div class="grid-content bg-purple">
							<article class="article_content" v-cloak>
								<ul class="ul">
									<li class="ulli"	v-for="(obj, index) in article"  :key="index" v-cloak>
										<div class="left_text">
											<h2 class="title" v-text='obj["title"]' v-cloak></h2>
											<div class="message">
												<ul>
													<li><span>发表于：</span><time>2018/03/12</time></li>
													<li><span>分类于：</span><time>技术文章</time></li>
													<li><span>标签：</span><time>nodejs</time></li>
												</ul>
											</div>
											<div class="content" v-text='obj["trimcontent"]["html"]' v-cloak @mouseover="overShow" @mouseout="outHide"></div>
											<div class="readfull"><a href="">阅读全文 >></a></div>
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
import trimHtml from 'trim-html'
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
				    this.article.push({
				    	title: obj['title'],
				    	content:obj['content'],
				    	trimcontent: trimHtml(obj['content'], {limit: 100}) 
				    });
				});
	        })
	        .catch(err => {
	            console.log(err);
	        });
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
	.article_content .ul{
		padding: 10px;
	}
	.loadmore{
		margin: 10px auto;
		width: 100%;
		background: yellow;
	}
	.el-row{
		margin: 0;
	}
	.article_content .ulli{
		position: relative;
		width: 100%;
		height: 200px;
		margin-bottom: 10px;
	    line-height: 25px;
	    box-shadow: 1px 1px 1px 1px #ddd;
	    transition: all .4s;
	    -webkit-transition: all .4s;
	}
	.article_content .ulli:hover{
		box-shadow: 0px 10px 16px 0px #666;
	}
	.article_content .ulli:hover img{
		transform: scale(1.4);
		-webkit-transform: scale(1.4);
	}
	.article_content .ulli:last-child{ 
		margin-bottom: 0px;
		border-bottom: 0px;
	}
	.article_content .ulli .title{
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
	.left_text .readfull{
	    position: absolute;
	    bottom: 0;
	    right: 10px;
		letter-spacing: 2px;
	    color: gainsboro;
	}
	.article_content .right_img{
		position: absolute;
		top: 0;
		right: 0;
		width: 250px;
	    height: 160px;
	    overflow: hidden;
	    margin-top: 20px;
	}
	.right_img img{
		display: inline-block;
	  	height: auto;
	  	max-width: 100%;
	  	transition: all .4s;
	    -webkit-transition: all .4s;
	    -webkit-transform: scale(1);
	  	transform: scale(1);
	}
	.article_content .ulli .content{
		height: 130px;
	}
	.message li{
		color: gainsboro;
		margin: 0 20px 0 0;
	}
</style>
