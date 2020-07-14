// 常用的loader和plugin

// loader是一个导出为function的node模块。可以将匹配到的文件进行一次转换，同时loader可以链式传递。

// 一般loader的使用方式分为三种：
// 1：在配置文件webpack.config.js中配置
// 2：通过命令行参数方式
// webpack --module-bind 'txt=raw-loader'复制代
// 3：通过内联使用
// import txt from 'raw-loader!./file.txt';
// webpack常用的loader
// style-loader、css-loader、less-loader、sass-loader等
// 文件：raw-loader、file-loader 、url-loader等
// 编译：babel-loader、coffee-loader 、ts-loader等
// 校验测试：mocha-loader、jshint-loader 、eslint-loader等

// sass-loader转化sass为css文件 并且包一层module.exports成为一个js module
// style-loader将创建一个style标签将css文件嵌入到html中
// css-loader则处理其中的@import和url()。

// vue-loader、babel-loader等可以将特定文件格式转成js模块、将其他语言转化为js语言和编译下一代js语言
// file-loader、url-loader等可以处理资源
// file-loader可以复制和放置资源位置，并可以指定文件名模板，用hash命名更好利用缓存。
// url-loader可以将小于配置limit大小的文件转换成内敛Data Url的方式，减少请求。
// imports-loader、exports-loader等可以向模块注入变量或者提供导出模块功能

// 常用plugin
// 1. html-webpack-plugin 可以根据模板自动生成html代码，并自动引用css和js文件
// 2. ProvidePlugin：自动加载模块，代替require和import
// 3. DefinePlugin 编译时配置全局变量
// 4. HotModuleReplacementPlugin 热更新
// 5.UglifyJsPlugin 压缩和混淆代码
// 6. CommonsChunkPlugin 提高打包效率，将第三方库和业务代码分开打包
// 7. extract-text-webpack-plugin 将js文件中引用的样式单独抽离成css文件
// 8. webpack 内置的DllPlugin 和 DllReferencePlugin相互配合
// 9. happypack：通过多进程模型，来加速代码构建

// 写一个webpack插件
// 编写一个JavaScript命名函数。
// 在它的原型上定义一个apply方法。
// 指定挂载的webpack事件钩子。
// 处理webpack内部实例的特定数据。
// 功能完成后调用webpack提供的回调。
// 编写插件之前要理解compiler和compilation两个对象，以及webpack生命周期的各个阶段和钩子，plugin 比 loader强大，通过plugin你可以访问compliler和compilation过程，通过钩子拦截webpack的执行。