// react

// 1.
// 高阶组件（HOC）
// 高阶组件是参数为组件，返回值为新组件的函数

// react hooks 和 render props的区别

// 没有 Hooks 之前，高阶组件和 Render Props 本质上都是将复用逻辑提升到父组件中。而 Hooks 出现之后，我们将复用逻辑提取到组件顶层，而不是强行提升到父组件中。这样就能够避免 HOC 和 Render Props 带来的「嵌套地狱」。但是，像 Context 的 < Provider /> 和 < Consumer /> 这样有父子层级关系（树状结构关系）的，还是只能使用 Render Props 或者 HOC。

// 对于 Hooks、Render Props 和高阶组件来说，它们都有各自的使用场景：
// Hooks：替代 Class 的大部分用例，除了 getSnapshotBeforeUpdate 和 componentDidCatch 还不支持。提取复用逻辑。除了有明确父子关系的，其他场景都可以使用 Hooks。
// Render Props：在组件渲染上拥有更高的自由度，可以根据父组件提供的数据进行动态渲染。适合有明确父子关系的场景。  高阶组件：适合用来做注入，并且生成一个新的可复用组件。适合用来写插件。 不过，能使用 Hooks 的场景还是应该优先使用 Hooks，其次才是 Render Props 和 HOC。当然，Hooks、Render Props 和 HOC 不是对立的关系。我们既可以用 Hook 来写 Render Props 和 HOC，也可以在 HOC 中使用 Render Props 和 Hooks。

// react-router 里的 <Link> 标签和 <a> 标签有什么区别
// 从渲染来看两者都是a标签
// <Link> 的“跳转”行为只会触发相匹配的 <Route> 对应的页面内容更新，而不会刷新整个页面
// Link做了3件事情：
// 有onclick那就执行onclick
// click的时候阻止a标签默认事件
// 再取得跳转href（即是to），用history（前端路由两种方式之一，history & hash）跳转，此时只是链接变了，并没有刷新页面


//  Hooks 解决的问题

// 1. 在函数组件中使用state （在hooks之前函数组件只能是无状态组件）
// 2. 原来的class组件存在 逻辑状态难以复用的问题 hoc（高阶组件）和render props  都需要在原来的组件外边包括一层父容器，导致层级冗余
// 3. 逻辑散乱 难以维护 在class的各个生命周期中 存在这相关逻辑 在willmont中监听 要在 willunmont中移除监听 十分散乱 也是由于逻辑散乱 难以拆分成更小的组件
// 4. this 指向问题：父组件给子组件传递函数时，必须绑定 this 绑定的方式不同可能会影响性能 比如说用箭头函数/直接在render中绑定

// Hooks的优势
// 1. 能解决class组件的三大问题 （层级冗余 逻辑散乱 绑定this）
// 能不用改变组件结构复用逻辑状态（自定义hooks）
// 能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）
// 副作用的关注点分离 副作用指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。以往这些副作用都是写在类组件生命周期函数中的。而 useEffect 在全部渲染完毕后才会执行，useLayoutEffect 会在浏览器 layout 之后，painting 之前执行。



// Hooks 使用注意事项
// 只能在函数内部的最外层调用 Hook，不要在循环、条件判断或者子函数中调用
// 只能在 React 的函数组件中调用 Hook，不要在其他 JavaScript 函数中调用


// useState & useMemo & useCallback
// React 假设当你多次调用 useState 的时候，你能保证每次渲染时它们的调用顺序是不变的。
// 通过在函数组件里调用它来给组件添加一些内部 state，React会 在重复渲染时保留这个 state
// useState 唯一的参数就是初始 state
// useState 会返回一个数组：一个 state，一个更新 state 的函数
// 在初始化渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同
// 你可以在事件处理函数中或其他一些地方调用这个更新 state 的函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并，而是直接替换

// 每次渲染都是独立的闭包
// 每一次渲染都有它自己的事件处理函数
// 当点击更新状态的时候，函数组件都会重新被调用，那么每次渲染都是独立的，取到的值不会受后面操作的影响

// 函数式更新 state
// 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将回调函数当做参数传递给 setState。该回调函数将接收先前的 state，并返回一个更新后的值。
// setNumber(number => number + 1);

//  惰性初始化 state
// initialState 参数只会在组件的初始化渲染中起作用，后续渲染时会被忽略
// 如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用
// let [counter, setCounter] = useState(()=>1);


// 性能优化

//  Object.is （浅比较）
// Hook 内部使用 Object.is 来比较新/旧 state 是否相等
// 与 class 组件中的 setState 方法不同，如果你修改状态的时候，传的状态值没有变化，则不重新渲染
// 与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果

// 减少渲染次数
// 默认情况，只要父组件状态变了（不管子组件依不依赖该状态），子组件也会重新渲染
// 类组件：可以使用 pureComponent；
// 函数组件：使用 React.memo
// 将函数组件传递给 memo 之后，就会返回一个新的组件，新组件的功能：如果接受到的属性不变，则不重新渲染函数；
// 但是怎么保证属性不会变呢？这里使用 useState，每次更新都是独立的，const [number,setNumber] = useState(0) 也就是说每次都会生成一个新的值（哪怕这个值没有变化），即使使用了 React.memo ，也还是会重新渲染

// 更深入的优化：
// useCallback：接收一个内联回调函数参数和一个依赖项数组（子组件依赖父组件的状态，即子组件会使用到父组件的值） ，useCallback 会返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
// useMemo：把创建函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算



// effect（副作用）指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。
// 副作用操作可以分两类：需要清除的和不需要清除的。
// useEffect 接收一个函数，该函数会在组件渲染到屏幕之后才执行，该函数有要求：要么返回一个能清除副作用的函数，要么就不返回任何内容
// 与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。大多数情况下，effect 不需要同步地执行。在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同。

// 清除副作用
// 副作用函数还可以通过返回一个函数来指定如何清除副作用，为防止内存泄漏，清除函数会在组件卸载前执行。如果组件多次渲染，则在执行下一个 effect 之前，上一个 effect 就已被清除。
// 使用多个 Effect 实现关注点分离
// 使用 Hook 其中一个目的就是要解决 class 中生命周期函数经常包含不相关的逻辑，但又把相关逻辑分离到了几个不同方法中的问题

// useLayoutEffect
// useEffect 在全部渲染完毕后才会执行
// useLayoutEffect 会在 浏览器 layout 之后，painting 之前执行 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect
// 可以使用它来读取 DOM 布局并同步触发重渲染
// 在浏览器执行绘制之前 useLayoutEffect 内部的更新计划将被同步刷新
// 尽可能使用标准的 useEffect 以避免阻塞视图更新


// useRef & useImperativeHandle
// useRef
// 类组件、React 元素用 React.createRef，函数组件使用 useRef
// useRef 返回一个可变的 ref 对象，其 current 属性被初始化为传入的参数（initialValue）
// const refContainer = useRef(initialValue);
// useRef 返回的 ref 对象在组件的整个生命周期内保持不变，也就是说每次重新渲染函数组件时，返回的ref 对象都是同一个（使用 React.createRef ，每次重新渲染组件都会重新创建 ref）
//  forwardRef
// ref = useRef()直接赋值给某个元素是可以的，但是组件不行 需要用forwardRef接一下组件
// Child = React.forwardRef(Child);
// <Child ref={inputRef}/>

// useImperativeHandle
// 自组件中使用 useImperativeHandle(parentRef,()=>{return {childRef1,childRef2,click}})

// 自定义 Hook
// 自定义 Hook 更像是一种约定，而不是一种功能。如果函数的名字以 use 开头，并且调用了其他的 Hook，则就称其为一个自定义 Hook
// 有时候我们会想要在组件之间重用一些状态逻辑，之前要么用 render props ，要么用高阶组件,（层级嵌套），要么使用 redux（引入外库）
// 自定义 Hook 可以让你在不增加组件的情况下达到同样的目的
// Hook 是一种复用状态逻辑的方式，它不复用 state 本身
// 事实上 Hook 的每次调用都有一个完全独立的 state

// 使用 eslint-plugin-react-hooks 来检查代码错误，给出提示
// {
//   "plugins": ["react-hooks"],
//     // ...
//     "rules": {
//     "react-hooks/rules-of-hooks": 'error',// 检查 Hook 的规则
//       "react-hooks/exhaustive-deps": 'warn' // 检查 effect 的依赖
//   }
// }

// 为什么每次更新的时候都要运行 Effect（清除副作用）
// useEffect 除了didmond 还有 didupdate的用处

// 为什么必须在组件的顶层使用 Hook & 在单个组件中使用多个 State Hook 或 Effect Hook，那么 React 怎么知道哪个 state 对应哪个 useState？
// React 依赖于 Hook 的调用顺序，如果能确保 Hook 在每一次渲染中都按照同样的顺序被调用。那么React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确性
// 如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的_内部

// 自定义 Hook 必须以 use 开头吗
// 必须如此。这个约定非常重要。不遵循的话，由于无法判断某个函数是否包含对其内部 Hook 的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则

// 在两个组件中使用相同的 Hook 会共享 state 吗？
// 不会。自定义 Hook 是一种重用_状态逻辑_的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的

// 当组件拥有多个 state 时，应该把多个 state 合并成一个 state ，还是把 state 切分成多个 state 变量？
// 要么把所有 state 都放在同一个 useState 调用中，要么每一个字段都对应一个 useState 调用，这两方式都能跑通。
// 当你在这两个极端之间找到平衡，然后把相关 state 组合到几个独立的 state 变量时，组件就会更加的可读。
// 如果 state 的逻辑开始变得复杂，我们推荐用 useReducer 来管理它，或使用自定义 Hook。

//  可以只在更新时运行 effect 吗？
// 这是个比较罕见的使用场景。如果你需要的话，你可以 使用一个可变的 ref 手动存储一个布尔值来表示是首次渲染还是后续渲染，然后在你的 effect 中检查这个标识。（如果你发现自己经常在这么做，你可以为之创建一个自定义 Hook。）

// 在 useEffect 中调用用函数时，要把该函数在 useEffect 中申明，不能放到外部申明，然后再在 useEffect 中调用
// 这样就能容易的看出那个 effect 依赖了组件作用域中的哪些值
// 只有 当函数（以及它所调用的函数）不引用 props、state 以及由它们衍生而来的值时，你才能放心地把它们从依赖列表中省略。

// 如何在 Hooks 中优雅的 Fetch Data

// 不要过度依赖 useMemo
// useMemo 本身也有开销。
// useMemo 会「记住」一些值，同时在后续 render 时，将依赖数组中的值取出来和上一次记录的值进行比较，如果不相等才会重新执行回调函数，否则直接返回「记住」的值。这个过程本身就会消耗一定的内存和计算资源。因此，过度使用 useMemo 可能会影响程序的性能。

// useEffect 不能接收 async 作为回调函数
// useEffect 接收的函数，要么返回一个能清除副作用的函数，要么就不返回任何内容。而 async 返回的是 promise



// react 生命周期

// 旧的 洋葱模型 父组件先更新=》子组件

// 新的
// getDerivedStateFromProps(nextProps,prevState)
// 接收父组件传递过来的 props 和组件之前的状态，返回一个对象来更新 state 或者返回 null 来表示接收到的 props 没有变化，不需要更新 state
// 该生命周期钩子的作用： 将父组件传递过来的 props 映射 到子组件的 state 上面，这样组件内部就不用再通过 this.props.xxx 获取属性值了，统一通过 this.state.xxx 获取。映射就相当于拷贝了一份父组件传过来的 props ，作为子组件自己的状态。
// 注意：子组件通过 setState 更新自身状态时，不会改变父组件的 props
// 配合 componentDidUpdate，可以覆盖 componentWillReceiveProps 的所有用法
// 该生命周期钩子触发的时机：
// 在 React 16.3.0 版本中：在组件实例化、接收到新的 props 时会被调用
// 在 React 16.4.0 版本中：在组件实例化、接收到新的 props 、组件状态更新时会被调用
// getDerivedStateFromProps 是一个静态方法，而组件实例无法继承静态方法，所以该生命周期钩子内部无法通过使用 this 获取组件实例的属性/方法。

// getSnapshotBeforeUpdate(prevProps, prevState)
// 接收父组件传递过来的 props 和组件之前的状态，此生命周期钩子必须有返回值，返回值将作为第三个参数传递给componentDidUpdate
// 必须和 componentDidUpdate 一起使用，否则会报错
// 该生命周期钩子触发的时机 ：被调用于 render 之后、更新 DOM 和 refs 之前
// 该生命周期钩子的作用： 它能让你在组件更新 DOM 和 refs 之前，从 DOM 中捕获一些信息（例如滚动位置）
// 配合 componentDidUpdate, 可以覆盖 componentWillUpdate 的所有用法


// React 16.3 版本：为不安全的生命周期引入别名 UNSAFE_componentWillMount，UNSAFE_componentWillReceiveProps 和 UNSAFE_componentWillUpdate。
// React 16.3 之后的版本：为 componentWillMount，componentWillReceiveProps 和 componentWillUpdate 启用弃用警告。
// React 17.0 版本： 推出新的渲染方式——异步渲染（ Async Rendering），提出一种可被打断的生命周期，而可以被打断的阶段正是实际 dom 挂载之前的虚拟 dom 构建阶段，也就是要被去掉的三个生命周期 componentWillMount，componentWillReceiveProps 和 componentWillUpdate。


// 由于 React 未来的版本中推出了异步渲染，在 dom 被挂载之前的阶段都可以被打断重来，导致 componentWillMount、componentWillUpdate、componentWillReceiveProps 在一次更新中可能会被触发多次，因此那些只希望触发一次的副作用应该放在 componentDidMount 中

// 最常见的误解就是 getDerivedStateFromProps 和 componentWillReceiveProps 只会在 props “改变”时才会调用。实际上只要父组件重新渲染时，这两个生命周期函数就会重新调用，不管 props 有没有“变化”

// 切记永远都不要离开场景去评判一个技术的好坏

// JQuery VS React
// 两个可比性不大，从性能上看, 框架再怎么牛逼它也是需要操作原生 DOM 的，而且它未必有你使用 JQuery 手动操作 DOM 来得'精细'. 框架不合理使用也可能出现修改一个小状态，导致渲染雪崩(大范围重新渲染)的情况; 同理 JQuery 虽然可以精细化操作 DOM, 但是不合理的 DOM 更新策略可能也会成为应用的性能瓶颈. 所以关键还得看你怎么用.

// Virtual-DOM 更大的意义在于开发方式的改变: 声明式、 数据驱动, 让开发者不需要关心 DOM 的操作细节(属性操作、事件绑定、DOM 节点变更)，也就是说应用的开发方式变成了view=f(state), 这对生产力的解放是有很大推动作用的

// render 函数实际是调用了 createElement(type, props, children)


// React Fiber(时间分片)

