// react 面试题
// 什么是虚拟DOM？
// 虚拟 DOM (VDOM)是真实 DOM 在内存中的表示。UI 的表示形式保存在内存中，并与实际的 DOM 同步 其实是一个js对象


// 类组件和函数组件之间的区别是啥？
// 类组件可以使用其他特性，如状态 state 和生命周期钩子。
// 当组件只是接收 props 渲染到页面时，就是无状态组件，就属于函数组件，也被称为哑组件或展示组件。

// 函数组件和类组件当然是有区别的，而且函数组件的性能比类组件的性能要高，因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可。为了提高性能，尽量使用函数组件。

// React 中 refs 干嘛用的？
// Refs 提供了一种访问在render方法中创建的 DOM 节点或者 React 元素的方法

// 在 React 中如何处理事件
// 为了解决跨浏览器的兼容性问题，SyntheticEvent 实例将被传递给你的事件处理函数，SyntheticEvent是 React 跨浏览器的浏览器原生事件包装器，它还拥有和浏览器原生事件相同的接口，包括 stopPropagation() 和 preventDefault()。
// 比较有趣的是，React 实际上并不将事件附加到子节点本身。React 使用单个事件侦听器侦听顶层的所有事件。这对性能有好处，也意味着 React 在更新 DOM 时不需要跟踪事件监听器。

// 如何创建 refs
// Refs 是使用 React.createRef() 创建的，并通过 ref 属性附加到 React 元素， 通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。

// 什么是高阶组件？
// 高阶组件(HOC)是接受一个组件并返回一个新组件的函数

// HOC 可以用于以下许多用例
// 代码重用、逻辑和引导抽象
// 渲染劫持
// state 抽象和操作
// props 处理

// 在构造函数调用 `super` 并将 `props` 作为参数传入的作用是啥？
// 在调用 super() 方法之前，子类构造函数无法使用this引用，ES6 子类也是如此。将 props 参数传递给 super() 调用的主要原因是在子构造函数中能够通过this.props来获取传入的 props

// 什么是控制组件？
// 在 HTML 中，表单元素如 <input>、<textarea>和<select>通常维护自己的状态，并根据用户输入进行更新。当用户提交表单时，来自上述元素的值将随表单一起发送。
// 而 React 的工作方式则不同。包含表单的组件将跟踪其状态中的输入值，并在每次回调函数(例如onChange)触发时重新渲染组件，因为状态被更新。以这种方式由 React 控制其值的输入表单元素称为受控组件。

// 如何 React.createElement ？ createElement 第一个参数标签 第二个属性 第三个 内容

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
)

const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

// 为什么不直接更新 `state` 呢 ?
// 如果试图直接更新 state ，则不会重新渲染组件
// 需要使用setState()方法来更新 state。它调度对组件state对象的更新。当state改变时，组件通过重新渲染来响应：

// 使用 React Hooks 好处是啥？
// Hooks 通常支持提取和重用跨多个组件通用的有状态逻辑，而无需承担高阶组件或渲染 props 的负担
// Hooks 可以轻松地操作函数组件的状态，而不需要将它们转换为类组件


// 什么是 prop drilling，如何避免？

// 在构建 React 应用程序时，在多层嵌套组件来使用另一个嵌套组件提供的数据。最简单的方法是将一个 prop 从每个组件一层层的传递下去，从源组件传递到深层嵌套组件，这叫做prop drilling。

// 为了避免prop drilling，一种常用的方法是使用React Context。通过定义提供数据的Provider组件，并允许嵌套的组件通过Consumer组件或useContext Hook 使用上下文数据。


this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count
  }
})
// 可以将一个函数传递给setState，该函数接收上一个 state 的值和当前的props，并返回一个新的状态，如果咱们需要根据以前的状态重新设置状态，推荐使用这种方式。

// 什么是 React Context?
// Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。

// 什么是 React Fiber?
// Fiber 是 React 16 中新的协调引擎或重新实现核心算法。它的主要目标是支持虚拟DOM的增量渲染。
// React Fiber 的目标是提高其在动画、布局、手势、暂停、中止或重用等方面的适用性，并为不同类型的更新分配优先级，以及新的并发原语。

// 如何在 ReactJS 的 Props上应用验证？ propsType


// Hooks会取代 `render props` 和高阶组件吗？
// 通常，render props和高阶组件仅渲染一个子组件 React团队认为，Hooks 是服务此用例的更简单方法
// 这两种模式仍然有一席之地(例如，一个虚拟的 scroller 组件可能有一个 renderItem prop，或者一个可视化的容器组件可能有它自己的 DOM 结构)。但在大多数情况下，Hooks 就足够了，可以帮助减少树中的嵌套。

// 如何避免组件的重新渲染？

// React.memo():这可以防止不必要地重新渲染函数组件
// PureComponent:这可以防止不必要地重新渲染类组件

// 什么是纯函数？
// 纯函数是不依赖并且不会在其作用域之外修改变量状态的函数。本质上，纯函数始终在给定相同参数的情况下返回相同结果。

// 当调用`setState`时，React `render` 是如何工作的？