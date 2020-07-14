// Vue 中的 computed 和 watch 的区别在哪里
// 计算属性不在data中，计算属性新值的相关已知值在data中。
// 1. watch擅长处理的场景：一个数据影响多个数据
// 2. computed擅长处理的场景：一个数据受多个数据影响

// 实现模糊搜索结果的关键词高亮显示
// 正则替换

// ES6 代码转成 ES5 代码的实现思路是什么
// 将ES6的代码转换为AST语法树，然后再将ES6 AST转为ES5 AST，再将AST转为代码
// 可以使用 @babel/parser 的 parse 方法，将代码字符串解析成 AST；
// 使用 @babel/core 的 transformFromAstSync 方法，对 AST 进行处理，将其转成 ES5 并生成相应的代码字符串；
// 可能还需要使用 @babel/traverse 来获取依赖文件等

// 如何把一个字符串的大小写取反

function processString(s) {
  var arr = s.split('');
  var new_arr = arr.map((item) => {
    return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
  });
  return new_arr.join('');
}
console.log(processString('AbC'))

