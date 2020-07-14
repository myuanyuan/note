// ts 有什么优势

// 静态检查
// 早发现问题 编译时期就发现 运行前发现一部分潜在的bug
// 类型就是最好的注释
// rename 把数据对应的 interface 改掉 然后重新编译一次，把编译失败的地方全部改掉就好了。
// 引入了 接口

// interface和type区别
// 相同点-> 都可以描述一个对象或者函数
// 都允许拓展（extends）
// interface extends interface (接口继承接口)
// type extends type (类型继承类型)
// interface extends type (接口继承类型)
// type extends interface (类型继承接口)

// 不同点
// type 可以声明基本类型别名，联合类型，元组等类型
// interface 能够声明合并