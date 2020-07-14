/* Pubsub */
function Pubsub() {
  //存放事件和对应的处理方法
  this.handles = {};
}
Pubsub.prototype = {
  //传入事件类型type和事件处理handle
  on: function (type, handle) {
    if (!this.handles[type]) {
      this.handles[type] = [];
    }
    this.handles[type].push(handle);
  },
  emit: function () {
    //通过传入参数获取事件类型
    var type = Array.prototype.shift.call(arguments);
    if (!this.handles[type]) {
      return false;
    }
    for (var i = 0; i < this.handles[type].length; i++) {
      var handle = this.handles[type][i];
      //执行事件
      handle.apply(this, arguments);
    }
  },
  off: function (type, handle) {
    handles = this.handles[type];
    if (handles) {
      if (!handle) {
        handles.length = 0;//清空数组
      } else {
        for (var i = 0; i < handles.length; i++) {
          var _handle = handles[i];
          if (_handle === handle) {
            handles.splice(i, 1);
          }
        }
      }
    }
  }
}