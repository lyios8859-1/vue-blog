<template>
	<div class="article">
		<el-row>
			<el-col :span="18">
				<el-row>
					<el-col :span="24">
						<div class="grid-content bg-purple">
							<article class="article_content" v-cloak>
								<ul class="ul" id="ul">
									<li class="ulli" id="ulli" v-for="(obj, index) in article"  :key="index" v-cloak>
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
											<div class="readfull"><el-button type="text" class="readfull" @click='readFull(obj["content"], obj["title"])'>阅读全文 >></el-button></div>
										</div>
										<div class="right_img" v-cloak>
											<img src="../../../static/img/1.jpg" alt="" /><!--width="300px" height="200px"-->
										</div>
									</li>
								</ul>
								<div class="loading">
									<p class="get-more" @click="getMore" v-show="switchShow">点击加载更多</p>
									<p v-show="!switchShow">加载中...</p>
								</div>
							</article>
						</div>
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="6" style="background: blue;margin-top: 10px;">
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
			article: [], // 内容
			nowPage: 1, // 页数
			switchShow:false,
		}
	},
	created() { //初始化data, el还没有
		
	},
	beforeMount() {
	    // 在页面挂载前就发起请求
	    this.query();
	 },
	mounted() { //初始化data, el，请求数据了
		lodingData: {
			this.scroll()
		}
	},
	methods: {
		overShow(e) { // 鼠标悬浮时效果
			//alert(e.target.tagName)
		},
		outHide(e) { // 鼠标离开时效果
			//alert(e.target.tagName)
		},
		readFull(conten, title){
			this.$alert(conten, title, {
	          confirmButtonText: '确定',
	          callback: action => {
	            this.$message({
	              type: 'info',
	              message: `action: ${ action }`
	            });
	          }
	        });
		},
		query(){
			let result = query_list.fetchDatas(this, this.nowPage);
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
		},
		getMore(){ // 没有对点击做判断，之后修改当没有数据了不允许点击，给出提示没有更多数据了
			this.switchShow=!this.switchShow;
			//++this.nowPage;
			this.scroll();
		},
		scroll() { // 滚动加载数据   //还没有判断数据是否已经加载完，如果加载完，就不需要去请求服务器了
			let isLoading = false;// 节流
			window.onscroll = () => {
				let oh = document.documentElement.offsetHeight;
				let scrollTop = document.documentElement.scrollTop;
				let wh = window.innerHeight;
				let bottomOfWindow =  ((oh - scrollTop - wh) <= 200);
				if (bottomOfWindow && isLoading == false) {
					isLoading = true;
					let pageNo = ++this.nowPage;
					console.log("pageNo===" + pageNo);
					let result = query_list.fetchDatas(this, pageNo);
					result.then(res => {
			        	//let result = JSON.parse(res.data);//如果传递的时json格式的字符串就是转换一下
			        	
				        let message = res.data;
				        console.log(message)
			        	if(message.length) {
				        	message.forEach(obj => {  
							    this.article.push({
							    	title: obj['title'],
							    	content: obj['content'],
							    	trimcontent: trimHtml(obj['content'], {limit: 100}) 
							    });
							});
							isLoading = false;
							this.switchShow = !this.switchShow;
						} else {
							alert("没有更多数据！！！");
						}
			        })
			        .catch(err => {
			            console.log(err);
			        });
				}
			}
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
	    bottom: -5px;
	    right: 10px;
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
	.loading{
		width: 100%;
	    height: 40px;
	    background: gainsboro;
	    text-align: center;
	    line-height: 40px;
	    font-size: 16px;
	    letter-spacing: 2px;
	}
</style>
