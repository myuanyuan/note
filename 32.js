// vue的生命周期

// beforeCreate
// crtated
// beforeMount
// monted
// beforeUpdate
// updated
// beforeDestroy
// destroyed


// 图片懒加载

// 简单的节流函数
// fun 要执行的函数
// delay 延迟

var throttle = function (fn, delay) {
  let start = +new Date();
  let timer;
  return function () {
    let now = +new Date();
    clearTimeout(timer);
    if (now - start > delay) {
      fn.apply(this, arguments);
      start = now;
    } else {
      timer = setTimeout(fn, delay);
    }
  }
}

// 实际想绑定在 scroll 事件上的 handler
function lazyload(event) {
  for (var i = n; i < imgNum; i++) {
    if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
      if (img.eq(i).attr("src") == "default.jpg") {
        var src = img.eq(i).attr("data-src");
        img.eq(i).attr("src", src);

        n = i + 1;
      }
    }
  }
}
// 采用了节流函数
window.addEventListener('scroll', throttle(lazyload, 500, 1000));

// BFC 块级格式化上下文
// BFC 规范中的一个概念 它是一个独立的渲染区域 只有块级元素参与
// 它规定了内部的元素如何布局 并且与这个区域外部毫不相干

// 1. 内部的盒子会在垂直方向，一个接一个地放置
// 2. 盒子垂直方向的距离由margin决定
// 3. 属于同一个BFC的两个相邻Box的margin会发生重叠
// 4. 每个元素的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
// 5. BFC的区域不会与float box重叠
// 6. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
// 7. 计算BFC的高度时，浮动元素也参与计算

// 哪些元素会生成BFC?
// 根元素
// float属性不为none
// position为absolute或fixed

// BFC的应用

// 自适应两栏布局
// 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
// BFC的区域不会与float box重叠。

// 高度塌陷
// 计算BFC的高度时，浮动元素也参与计算

// 防止垂直 margin 重叠
// Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠

// BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。