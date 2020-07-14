// react 事件机制

// react 对原生事件进行了封装 改造和升级 包括对浏览器的兼容


// 事件注册过程
//  事件注册 根据组件内的声明的事件类型-onclick，onchange 等，给 document 上添加事件 -addEventListener，并指定统一的事件处理程序 dispatchEvent
//  事件存储 react 把所有的事件和事件类型以及react 组件进行关联，把这个关系保存在了一个 map里，也就是一个对象里（键值对），然后在事件触发的时候去根据当前的组件id和事件类型查找到对应的事件fn。
// React将DOM事件全都注册到document这个节点上
// 注册事件的入口是listenTo方法, 它解决了不同浏览器间捕获和冒泡不兼容的问题
// 事件回调方法在bubble阶段被触发

// 事件分发
// 事件分发主要调用dispatchEvent进行，从事件触发组件开始，向父元素遍历


// ReactEventEmitter：负责每个组件上事件的执行
// EventPluginHub：负责事件的存储，合成事件以对象池的方式实现创建和销毁，大大提高了性能
// SimpleEventPlugin等plugin：根据不同的事件类型，构造不同的合成事件。如focus对应的React合成事件为SyntheticFocusEvent