# myblog

> 个人Blog

# 创建项目
	``` bash
	# 使用vue-cli构建，.表示当前目录下，构建webpack自动化Vue项目
	vue init webpack .
	
	# 安装依赖包
	npm install
	
	# 启动服务（开发环境）
	npm run dev
	
	# 打包构建（生产环境）
	npm run build
	
	# 构建生产并查看捆绑分析器报告
	npm run build --report
	
	```

**注意：** 使用 **vue-cli** 需要全局安装
> npm install vue-cli -g

# 技术栈
> vue + vue-router + axios + Webpack + ElementUI

# 配置代理地址
> 找到config目录下的index.js文件

	proxyTable: {
      '/api/*':{
          target:'http://localhost:3000',//被代理的接口
          changeOrigin: true,
          secure:true // 如果是https接口，需要配置这个参数
      },
      '/users/*':{
        target:'http://localhost:3000'
      }
    }
	
	# node的express配置可以通过跨域请求
	app.all('*',function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
		res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

		if (req.method == 'OPTIONS') {
			res.send(200); // 让options请求快速返回
		} else {
			next();
		}
	});

	// 跨域可请求
	app.get('/api/*', function(req, res, next){ 
		res.json({msg: '数据请求成功了！'}); 
	}); 