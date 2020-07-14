// redux redux-hooks  react-hooks

// 1. react hooks 能不能取代redux
// 不一定，需要结合业务，首先react hooks和usereducer和usecontex结合确实可以做到状态管理，但是usecontext本身被设计出来的初衷并不是用来做状态管理的，而是解决全局状态多处共享时避免props层层传递的，也就是说用来放一些需要全局共享，并且不会频繁该懂的东西，而且react官网也提醒了不要滥用 context，因为可能会带来一些不必要的重新渲染。

// 其次 redux本来就不是必须的，所以如果项目简单的话没有必要使用redux；
// 再者React Hooks 和 Redux 并没有试图解决同样的问题，Redux是一个状态管理库
// 而react hooks是为了解决以下几种情况：
// 难以复用类组件之间的逻辑
// 生命周期中经常包含一些莫名其妙的不相关逻辑
// 类组件难以被机器和人理解

// React-Redux也有自己的hooks 为了解决redux的高阶组件地狱嵌套的问题，redux也提供了hooks，useSelector和useDispatch

// 原先使用redux需要创建两个函数 一个mapstatetoprops 一个 mapdispachtoprops,然后使用connect包括成高阶组件，有了hooks之后，就解决了这些痛点。

// react和vue的优势劣质

// vue比react上手更容易 mvvm模式 react的语法更加符合js原生语法，vue则有更多的定制化的语法  todo

// React 和 Vue 的 diff 时间复杂度从 O(n ^ 3) 优化到 O(n) ，那么 O(n ^ 3) 和 O(n) 是如何计算出来的？

// 至于说为什么传统的树节点比较算法的时间复杂度是O(n ^ 3) ，而react的diff算法只需要O(n) ，这是因为react对树节点的比较做了很大的前提假设，限定死了很多东西，不做过于复杂的计算操作，所以降低了复杂度。而传统的树节点要做非常完整的检查，比如说比较不同级别的树状结构，在传统算法里是需要考虑的，而react假定所有的比较都在同级进行，这样当然就会使得计算复杂度大大降低。

// 策略/假设
// Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。  tree diff
// 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。 component diff
// 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。 element diff

// 既然 DOM 节点跨层级的移动操作少到可以忽略不计，针对这一现象，React 通过 updateDepth 对 Virtual DOM 树进行层级控制，只会对同一个父节点下的所有子节点进行比较。当发现节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。这样只需要对树进行一次遍历，便能完成整个 DOM 树的比较。

// 如果出现了 DOM 节点跨层级的移动操作，React diff 会有怎样的表现呢
// 当出现节点跨层级移动时，并不会出现想象中的移动操作，而是以 移动节点 为根节点的树被整个重新创建，这是一种影响 React 性能的操作，因此 React 官方建议不要进行 DOM 节点跨层级的操作。

// React 是基于组件构建应用的，对于组件间的比较所采取的策略也是简洁高效。

// 如果是同一类型的组件，按照原策略继续比较 virtual DOM tree。 如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。
// 对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点那可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff。

// 当节点处于同一层级时，React diff 提供了三种节点操作，分别为：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）。

// 首先对新集合的节点进行循环遍历，for (name in nextChildren) ，通过唯一 key 可以判断新老集合中是否存在相同的节点，if (prevChild === nextChild) ，如果存在相同节点，则进行移动操作，但在移动前需要将当前节点在老集合中的位置与 lastIndex 进行比较，if (child._mountIndex < lastIndex) ，则进行节点移动操作，否则不执行该操作。这是一种顺序优化手段，lastIndex 一直在更新，表示访问过的节点在老集合中最右的位置（即最大的位置），如果新集合中当前访问的节点比 lastIndex 大，说明当前访问节点在老集合中就比上一个节点位置靠后，则该节点不会影响其他节点的位置，因此不用添加到差异队列中，即不执行移动操作，只有当访问的节点比 lastIndex 小时，才需要进行移动操作。

