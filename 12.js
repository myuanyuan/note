// web 安全

// 一、XSS攻击与防御
// 反射型 通常情况是攻击者找到有XSS漏洞的网站，然后构造一个连接，就像这种 http://www.hasxss.com?x=<script>alert(document.cookie)</script>
// 存储型XSS  存储型和反射型的区别就是，提交的XSS代码会存储在服务器端。这种XSS也是最危险的
// DOM XSS 如使用eval
// 如何防御： 转义
// 1.过滤转义输入输出
// 2.避免使用eval，new Function等执行字符串的方法，除非确定字符串和用户输入无关
// 3.使用innerHTML，document.write的时候，如果数据是用户输入的，那么需要对关键字符都进行过滤与转义
// 4.对于非客户端cookie，比如保存用户凭证的session，务必标识为http only，这样js就获取不到这个cookie值了，安全性得到提高

// 二、CSRF攻击 CSRF全称是跨站请求伪造 隐藏或者伪装的img或者form表单 : refer token
// CSRF的防御方式
// 1.检测http referer是否是同域名，通常来讲，用户提交的请求，referer应该是来来自站内地址，所以如果发现referer中地址异常，那么很可能是遭到了CSRF攻击
// 2. 避免登录的session长时间存储在客户端中 即设置登陆过期时间
// 3. 关键请求使用验证码或者token机制


// 三、HTTP劫持与对策

// 四、界面操作劫持

// 五、防御手段



