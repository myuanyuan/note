// http1.0 2.0区别 https怎么握手的

// HTTPS和HTTP的区别主要如下：
// 1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。
// 2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
// 3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。



// tcp怎么保证数据可靠传输的

// 1、确认和重传：接收方收到报文就会确认，发送方发送一段时间后没有收到确认就会重传。
// 2、数据校验：TCP报文头有校验，用于校验报文是否损坏
// 3、数据合理分片和排序：
// tcp会按最大传输单元(MTU)合理分片，接收方会缓存未按序到达的数据，重新排序后交给应用层。
// 而UDP：IP数据报大于1500字节，大于MTU。这个时候发送方的IP层就需要分片，把数据报分成若干片，是的每一片都小于MTU。而接收方IP层则需要进行数据报的重组。由于UDP的特性，某一片数据丢失时，接收方便无法重组数据报，导致丢弃整个UDP数据报。
// 4、流量控制：当接收方来不及处理发送方的数据，能通过滑动窗口，提示发送方降低发送的速率，防止包丢失。
// 5、拥塞控制：当网络拥塞时，通过拥塞窗口，减少数据的发送，防止包丢失。


// https  http+ssl/tsl 加密方式

// 使用非对称加密传输一个对称密钥K，让服务器和客户端都得知。然后两边都使用这个对称密钥K来加密解密收发数据。因为传输密钥K是用非对称加密方式，很难破解比较安全。而具体传输数据则是用对称加密方式，加快传输速度。两全其美。


// 二进制分帧
// HTTP/2 数据通信的最小单位消息
// 存在于连接中的一个虚拟通道
// HTTP/2 采用二进制格式传输数据，而非 HTTP 1.x 的文本格式，二进制协议解析起来更高效。
// HTTP / 1 的请求和响应报文，都是由起始行，首部和实体正文（可选）组成，各部分之间以文本换行符分隔。HTTP/2 将请求和响应数据分割为更小的帧，并且它们采用二进制编码。
// HTTP/2 中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流

// 多路复用
// 代替原来的序列和阻塞机制，所有就是请求的都是通过一个 TCP连接并发完成
//  HTTP 1.x 中，如果想并发多个请求，必须使用多个 TCP 链接，且浏览器为了控制资源，还会对单个域名有 6-8个的TCP链接请求限制

// 在 HTTP/2 中，有了二进制分帧之后，HTTP /2 不再依赖 TCP 链接去实现多流并行了
// 同域名下所有通信都在单个连接上完成。
// 单个连接可以承载任意数量的双向数据流。
// 数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装。

// 同个域名只需要占用一个 TCP 连接，消除了因多个 TCP 连接而带来的延时和内存消耗。
// 单个连接上可以并行交错的请求和响应，之间互不干扰

// 服务器推送

// 头部压缩
// HTTP/2对消息头采用HPACK（专为http/2头部设计的压缩格式）进行压缩传输，能够节省消息头占用的网络的流量。

