// React 中 render() 的目的
// render() 函数必须返回某些值，无论值是否为空



// react16 vs react15
//  支持返回数字数组字符串Fragment（片段） Portals（插槽）等等 Boolean和null，不会渲染任何东西
// 错误边界处理

// 前官方所提过的将会在未来v17.0 版本中
// 移除 componentWillMount，componentWillReceiveProps，componentWillUpdate
// 引入的两个生命周期函数 getDerivedStateFromProps，getSnapshotBeforeUpdate
// https://juejin.im/post/5b6f1800f265da282d45a79a
// getDerivedStateFromProps  getSnapshotBeforeUpdate

// componentWillMount
// componentWillMount 之前可以用来做状态赋值 和 异步数据请求，但是实际上状态赋值在constructor里做就可以了，异步请求由于执行完componentWillMount 后会立即执行render，所以第一次的render是拿不到请求到的状态的；

// 使用getDerivedStateFromProps配合componentDidUpdate可以替代componentWillReceiveProps的所有功能，this.setState并不会触发这个函数，每次得到了新的props后会触发这个生命周期，用于更新state。
// 值得注意的是getDerivedStateFromProps是一个static方法，因此我们在其内部并不能使用this.setState方法去更新状态。 如果需要对比 prevProps 需要单独在 state 中维护

// componentWillReceiveProps(nextProps) {
//   if (nextProps.cards !== this.props.cards) {
//     this.setState({
//       filterTableData: this.GetAllCard(nextProps.cards),
//     })
//   }
// }
//   static getDerivedStateFromProps(nextProps, prevState){
//   if (nextProps.cards !== prevState.filterTableData) {
//     return {
//       filterTableData: nextProps.cards
//     }
//   }
//   return null
// }

// 为什么需要新的生命周期
// 是因为新的react引入了异步渲染机制，主要的功能是，在渲染完成前，可以中断任务，中断之后不会继续执行生命周期，而是重头开始执行生命周期。这导致上述的componentWillMount，componentWillReceiveProps，componentWillUpdate可能会被中断，导致执行多次，带来意想不到的情况。

// 为什么需要异步渲染
// 我们都知道在react16之前，react对virtual dom 的渲染是同步的，即每次将所有操作累加起来，统计对比出所有的变化后，统一更新一次DOM树，随着组件层级的深入，由于渲染更新一旦开始就无法停止，导致主线程长时间被占用，这也是react在动画，布局和手势等区域会有造成掉帧、延迟响应（甚至无响应）等不佳体验。

// React Fiber
// 为了解决这个问题，react推出了Fiber，它能够将渲染工作分割成块并将其分散到多个帧中。同时加入了在新更新进入时暂停，中止或重复工作的能力和为不同类型的更新分配优先级的能力

// 分割什么
// react渲染大抵可以分为 reconciler（调度阶段）和 commit（渲染阶段），前者用于对比，后者用于操作dom，reconciler阶段可以算是一个从顶向下的递归算法，主要工作是对current tree 和 new tree做计算，找出变化部分。commit阶段是对在reconciler阶段获取到的变化部分应用到真实的DOM树中,在绝大部分运用场景中，reconciler阶段的时间远远超过commit，因此fiber选择将reconciler阶段进行分割。

// 分割成什么
// Fiber的拆分单位是fiber（fiber tree上的一个节点），这里引入了fiber tree的概念，fiber tree实际上是个单链表树结构，由fiber构成，fiber tree 是根据和之前的 virtual dom tree的树结构一模一样，只是节点携带的信息有差异。

// 任务的优先级由什么决定
// 浏览器提供的requestIdleCallback API中的Cooperative Scheduling可以让浏览器在空闲时间执行回调（开发者传入的方法），在回调参数中可以获取到当前帧剩余的时间。利用这个信息可以合理的安排当前帧需要做的事情，如果时间足够，那继续做下一个任务，如果时间不够就歇一歇，调用requestIdleCallback来获知主线程不忙的时候，再继续做任务。

// 更新队列（UpdateQueue）

// 我们知道如果需要实现组件的异步更新，肯定需要在更新前将更新任务进行存储，然后异步任务开始的时候读取更新并实现组件更新，存储更新任务就需要一个数据结构，最常见的就是栈和队列，Fiber的实现方式就是队列。
