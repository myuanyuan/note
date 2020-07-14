// redux
// view=>action=>store.dispatch(action)=>store=>reducer(previousState, action)=>store.getState()=>view

// import { createStore } from 'redux';
// const store = createStore(reducer);

// https://github.com/yinguangyao/simple-react-redux
// 源码
let createStore = (reducer) => {
  let state;
  //获取状态对象
  //存放所有的监听函数
  let listeners = [];
  let getState = () => state;
  //提供一个方法供外部调用派发action
  let dispath = (action) => {
    //调用管理员reducer得到新的state
    state = reducer(state, action);
    //执行所有的监听函数
    listeners.forEach((l) => l())
  }
  //订阅状态变化事件，当状态改变发生之后执行监听函数
  let subscribe = (listener) => {
    listeners.push(listener);
  }
  dispath();
  return {
    getState,
    dispath,
    subscribe
  }
}
let combineReducers = (renducers) => {
  //传入一个renducers管理组，返回的是一个renducer
  return function (state = {}, action = {}) {
    let newState = {};
    for (var attr in renducers) {
      newState[attr] = renducers[attr](state[attr], action)

    }
    return newState;
  }
}

export { createStore, combineReducers };


// reducer 是纯函数。它仅仅用于计算下一个 state
// Redux 原生提供combineReducers()辅助函数来处理多个reducer
// redux store 保存了根 reducer 返回的完整 state 树

// React-Redux 所有数据都由参数（this.props）提供 react-redux 一共提供了两个 API，分别是 connect 和 Provider
// connect mapStateToProps mapDispatchToProps
// const Component = connect(mapStateToProps, mapDispatchToProps)(Con)

// mapStateToProps是一个函数，它接受state作为参数，返回一个对象。
// const mapStateToProps = state => {
//   const { test } = state;
//   return {
//       test
//   };
// };

// mapDispatchToProps UI到dispatch的映射 定义哪些是可以作为
// const mapDispatchToProps = dispatch => {
//   return {
//     onClick: () => {
//       dispatch({
//         type: 'TEST',
//         payload: 'payload'
//       });
//     }
//   };
// };

// Provider React-Redux 提供Provider组件，可以让容器组件拿到state


// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import Reducer from './reducers'
// import App from './App.jsx'


// let store = createStore(Reducer);

// render(
//   <Provider store={store}> // 包裹整个应用 App下的左右子组件都可以使用store里的数据了
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

// Redux-Saga  是 redux 一个中间件，用于解决异步问题

// redux 三大原则

// 单一数据源 : 整个应用的 state 都存储在一颗 state tree 中，并且只存在与唯一一个 store 中
// state 是只读的 : 唯一改变 state 的方法只能通过触发 action，然后通过 action 的 type 进而分发 dispatch 。不能直接改变应用的状态
// 状态修改均由纯函数完成 : 为了描述 action 如何改变 state tree，需要编写 reducers


// 为什么要创建副本state
// redux 在redux-devtools中, 我们可以查看到redux下所有通过reducer更新state的记录,每一个记录都对应着内存中某一个具体的state,让用户可以追溯到每一次历史操作产生与执行时,当时的具体状态,这也是使用redux管理状态的重要优势之一.
// 若不创建副本,redux的所有操作都将指向内存中的同一个state,我们将无从获取每一次操作前后,state的具体状态与改变,若没有副本,redux-devtools列表里所有的state都将被最后一次操作的结果所取代.我们将无法追溯state变更的历史记录.
// 创建副本也是为了保证向下传入的this.props与nextProps能得到正确的值,以便我们能够利用前后props的改变情况以决定如何render组件


//  redux有什么好处？
// 从操作到状态更改，开发人员可以实时跟踪应用程序中发生的所有事情

// Redux有什么缺点?
// 一个组件所需要的数据，必须由父组件传过来，而不能像flux中直接从store取。
// 当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新render，可能会有效率影响，或者需要写复杂的shouldComponentUpdate进行判断。