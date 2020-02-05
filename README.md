# TaroProject
Tarojs开发的游戏交易平台，h5网站项目

## 使用 npm 安装 CLI
$ npm install -g @tarojs/cli  
OR 使用 yarn 安装 CLI  
$ yarn global add @tarojs/cli  
 OR 安装了 cnpm，使用 cnpm 安装 CLI  
$ cnpm install -g @tarojs/cli  

## npm install或者yarn install 下载全部依赖包
## yarn dev:h5运行到h5页面

## src目录下进行开发
app.js全局容器，http.js为封装的http请求接口
目录component为自定义全局组件，目录image为静态图片区，目录pages为每个页面，less书写样式，为防止样式冲突，建议书写less嵌套，带上父元素;  
### redux引入redux-thunk进行数据管理  
   store根据reducer创建数据商店，用store包裹app.js，使得app中所有组件都可以使用store中的数据，reducer管理所有数据，reducer暴露出去的每个模块数据，供页面中组件连接使用。组件连接reducer，通过dispatch触发action中的方法，触发不同的方法，然后将数据交给reducer下的模块，reducers根据传递过来的action参数，进行数据处理。页面中通过props接受所连接的reducers模块中中所有数据




