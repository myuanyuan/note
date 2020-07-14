// flex布局
// flex属性 flex属性是flex-grow(放大比例), flex-shrink(缩小比例) 和 flex-basis(分配多余空间之前，项目占据的主轴空间)的简写；默认值为0 1 auto

// < !DOCTYPE html >
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>flex</title>
//       <style>
//         * {
//           margin: 0;
//         padding: 0;
//       }
//       .container {
//           width: 600px;
//         height: 300px;
//         display: flex;
//       }
//       .left {
//         flex: 1 2 500px;
//         background: red;
//       }
//       .right {
//           flex: 2 1 400px;
//         background: blue;
//       }
//     </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="left"></div>
//         <div class="right"></div>
//       </div>
//     </body>
//   </html>


// flex-grow flex-shrink flex-basis

// 子项收缩宽度 = 子项收缩比例*溢出宽度

// 子项溢出空间的宽度为 $500 + 400 - 600 = 300$
// 总权重为 2 * 500 + 1 * 400 = 1400$
// left 收缩比例：$(500 × 2) ÷ 1400 ≈ 0.7143$
// right 收缩比例：$(400 × 1) ÷ 1400 ≈ 0.2857$
// 对应的：

// left 收缩宽度：$0.7143 × 300 = 214.29$
// right 收缩宽度：$0.2857 × 300 = 85.71$
// 所以：

// left 最终宽度：$500 - 214.29 = 285.71$
// right 最终宽度：$400 - 85.71 = 314.29$


// 剩余的空间：600 - (300 + 200) = 100
// 子元素的 flex-grow 的值分别为 1，2， 剩余空间用3等分来分
// 100 / 3 = 33.3333333
// 所以 left = 300 + 1 * 33.33 = 333.33
// right = 200 + 2 * 33.33 = 266.67

// 弹性盒子中 flex: 0 1 auto 表示什么意思

// 三个参数分别对应的是 flex - grow, flex - shrink 和 flex - basis，默认值为0 1 auto。
// 1.flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
// 2.flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
// 3.flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。