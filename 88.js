// 发布订阅者模式
function EventEmitter() {
  this._maxListeners = 10;
  this._events = Object.create(null);
}
// 向事件队列添加事件
// prepend为true表示向事件队列头部添加事件
EventEmitter.prototype.addListener = function (type, listener, prepend) {
  // 因为有其它子类需要继承自EventEmitter，
  // 因此要判断子类是否存在_event属性，这样做是为了保证子类必须存在此实例属性。
  if (!this._events) {
    this._events = Object.create(null);
  }
  if (this._events[type]) {
    if (prepend) {
      this._events[type].unshift(listener);
    } else {
      this._events[type].push(listener);
    }
  } else {
    this._events[type] = [listener];
  }
};

// 移除某个事件
EventEmitter.prototype.removeListener = function (type, listener) {
  if (Array.isArray(this._events[type])) {
    if (!listener) {
      delete this._events[type]
    } else {
      this._events[type] = this._events[type].filter(e => e !== listener && e.origin !== listener)
    }
  }
};

// 向事件队列添加事件，只执行一次
EventEmitter.prototype.once = function (type, listener) {
  const only = (...args) => {
    listener.apply(this, args);
    this.removeListener(type, listener);
  }
  only.origin = listener;
  this.addListener(type, only);
};

// 执行某类事件
EventEmitter.prototype.emit = function (type, ...args) {
  if (Array.isArray(this._events[type])) {
    this._events[type].forEach(fn => {
      fn.apply(this, args);
    });
  }
};

// 设置最大事件监听个数
EventEmitter.prototype.setMaxListeners = function (count) {
  this.maxListeners = count;
};