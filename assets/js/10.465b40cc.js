(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{489:function(t,_,v){t.exports=v.p+"assets/img/http3.4658bf94.png"},518:function(t,_,v){"use strict";v.r(_);var e=v(2),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("本篇博客主要是 介绍http协议")]),t._v(" "),e("h2",{attrs:{id:"_1-get和post的请求的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-get和post的请求的区别"}},[t._v("#")]),t._v(" 1. GET和POST的请求的区别")]),t._v(" "),e("p",[t._v("Post 和 Get 是 HTTP 请求的两种方法，其区别如下：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("应用场景：")]),t._v(" GET 请求是一个幂等的请求，一般 Get 请求用于对服务器资源不会产生影响的场景，比如说请求一个网页的资源。而 Post 不是一个幂等的请求，一般用于对服务器资源会产生影响的情景，比如注册用户这一类的操作。")]),t._v(" "),e("li",[e("strong",[t._v("是否缓存：")]),t._v(" 因为两者应用场景不同，浏览器一般会对 Get 请求缓存，但很少对 Post 请求缓存。")]),t._v(" "),e("li",[e("strong",[t._v("发送的报文格式：")]),t._v(" Get 请求的报文中实体部分为空，Post 请求的报文中实体部分一般为向服务器发送的数据。")]),t._v(" "),e("li",[e("strong",[t._v("安全性：")]),t._v(" Get 请求可以将请求的参数放入 url 中向服务器发送，这样的做法相对于 Post 请求来说是不太安全的，因为请求的 url 会被保留在历史记录中。")]),t._v(" "),e("li",[e("strong",[t._v("请求长度：")]),t._v(" 浏览器由于对 url 长度的限制，所以会影响 get 请求发送数据时的长度。这个限制是浏览器规定的，并不是 RFC 规定的。")]),t._v(" "),e("li",[e("strong",[t._v("参数类型：")]),t._v(" post 的参数传递支持更多的数据类型。")])]),t._v(" "),e("h2",{attrs:{id:"_2-post和put请求的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-post和put请求的区别"}},[t._v("#")]),t._v(" 2. POST和PUT请求的区别")]),t._v(" "),e("ul",[e("li",[t._v("PUT请求是向服务器端发送数据，从而修改数据的内容，但是不会增加数据的种类等，也就是说无论进行多少次PUT操作，其结果并没有不同。（可以理解为时"),e("strong",[t._v("更新数据")]),t._v("）")]),t._v(" "),e("li",[t._v("POST请求是向服务器端发送数据，该请求会改变数据的种类等资源，它会创建新的内容。（可以理解为是"),e("strong",[t._v("创建数据")]),t._v("）")])]),t._v(" "),e("h2",{attrs:{id:"_3-常见的http请求头和响应头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见的http请求头和响应头"}},[t._v("#")]),t._v(" 3. 常见的HTTP请求头和响应头")]),t._v(" "),e("h3",{attrs:{id:"http-request-header-常见的请求头："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-request-header-常见的请求头："}},[t._v("#")]),t._v(" "),e("strong",[t._v("HTTP Request Header 常见的请求头：")])]),t._v(" "),e("ul",[e("li",[t._v("Accept:浏览器能够处理的内容类型")]),t._v(" "),e("li",[t._v("Accept-Charset:浏览器能够显示的字符集")]),t._v(" "),e("li",[t._v("Accept-Encoding：浏览器能够处理的压缩编码")]),t._v(" "),e("li",[t._v("Accept-Language：浏览器当前设置的语言")]),t._v(" "),e("li",[t._v("Connection：浏览器与服务器之间连接的类型")]),t._v(" "),e("li",[t._v("Cookie：当前页面设置的任何Cookie")]),t._v(" "),e("li",[t._v("Host：发出请求的页面所在的域")]),t._v(" "),e("li",[t._v("Referer：发出请求的页面的URL")]),t._v(" "),e("li",[t._v("User-Agent：浏览器的用户代理字符串")])]),t._v(" "),e("h3",{attrs:{id:"http-responses-header-常见的响应头："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-responses-header-常见的响应头："}},[t._v("#")]),t._v(" "),e("strong",[t._v("HTTP Responses Header 常见的响应头：")])]),t._v(" "),e("ul",[e("li",[t._v("Date：表示消息发送的时间，时间的描述格式由rfc822定义")]),t._v(" "),e("li",[t._v("server:服务器名称")]),t._v(" "),e("li",[t._v("Connection：浏览器与服务器之间连接的类型")]),t._v(" "),e("li",[t._v("Cache-Control：控制HTTP缓存")]),t._v(" "),e("li",[t._v("content-type:表示后面的文档属于什么MIME类型")])]),t._v(" "),e("p",[t._v("常见的 Content-Type 属性值有以下四种：")]),t._v(" "),e("p",[t._v("（1）application/x-www-form-urlencoded：浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。该种方式提交的数据放在 body 里面，数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL转码。")]),t._v(" "),e("p",[t._v("（2）multipart/form-data：该种方式也是一个常见的 POST 提交方式，通常表单上传文件时使用该种方式。")]),t._v(" "),e("p",[t._v("（3）application/json：服务器消息主体是序列化后的 JSON 字符串。")]),t._v(" "),e("p",[t._v("（4）text/xml：该种方式主要用来提交 XML 格式的数据。")]),t._v(" "),e("h2",{attrs:{id:"_4-http状态码304是多好还是少好"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-http状态码304是多好还是少好"}},[t._v("#")]),t._v(" 4. HTTP状态码304是多好还是少好")]),t._v(" "),e("p",[t._v("服务器为了提高网站访问速度，对之前访问的部分页面指定缓存机制，当客户端在此对这些页面进行请求，服务器会根据缓存内容判断页面与之前是否相同，若相同便直接返回304，此时客户端调用缓存内容，不必进行二次下载。")]),t._v(" "),e("p",[t._v("状态码304不应该认为是一种错误，而是对客户端"),e("strong",[t._v("有缓存情况下")]),t._v("服务端的一种响应。")]),t._v(" "),e("p",[t._v("搜索引擎蜘蛛会更加青睐内容源更新频繁的网站。通过特定时间内对网站抓取返回的状态码来调节对该网站的抓取频次。若网站在一定时间内一直处于304的状态，那么蜘蛛可能会降低对网站的抓取次数。相反，若网站变化的频率非常之快，每次抓取都能获取新内容，那么日积月累，的回访率也会提高。")]),t._v(" "),e("p",[e("strong",[t._v("产生较多304状态码的原因：")])]),t._v(" "),e("ul",[e("li",[t._v("页面更新周期长或不更新")]),t._v(" "),e("li",[t._v("纯静态页面或强制生成静态html")])]),t._v(" "),e("p",[e("strong",[t._v("304状态码出现过多会造成以下问题：")])]),t._v(" "),e("ul",[e("li",[t._v("网站快照停止；")]),t._v(" "),e("li",[t._v("收录减少；")]),t._v(" "),e("li",[t._v("权重下降。")])]),t._v(" "),e("h2",{attrs:{id:"_5-常见的http请求方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-常见的http请求方法"}},[t._v("#")]),t._v(" 5. 常见的HTTP请求方法")]),t._v(" "),e("ul",[e("li",[t._v("GET: 向服务器获取数据；")]),t._v(" "),e("li",[t._v("POST：将实体提交到指定的资源，通常会造成服务器资源的修改；")]),t._v(" "),e("li",[t._v("PUT：上传文件，更新数据；")]),t._v(" "),e("li",[t._v("DELETE：删除服务器上的对象；")]),t._v(" "),e("li",[t._v("HEAD：获取报文首部，与GET相比，不返回报文主体部分；")]),t._v(" "),e("li",[t._v("OPTIONS：询问支持的请求方法，用来跨域请求；")]),t._v(" "),e("li",[t._v("CONNECT：要求在与代理服务器通信时建立隧道，使用隧道进行TCP通信；")]),t._v(" "),e("li",[t._v("TRACE: 回显服务器收到的请求，主要⽤于测试或诊断。")])]),t._v(" "),e("h2",{attrs:{id:"_6-options请求方法及使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-options请求方法及使用场景"}},[t._v("#")]),t._v(" 6. OPTIONS请求方法及使用场景")]),t._v(" "),e("p",[t._v("OPTIONS是除了GET和POST之外的其中一种 HTTP请求方法。")]),t._v(" "),e("p",[t._v("OPTIONS方法是用于请求获得由"),e("code",[t._v("Request-URI")]),t._v("标识的资源在请求/响应的通信过程中可以使用的功能选项。通过这个方法，客户端可以"),e("strong",[t._v("在采取具体资源请求之前，决定对该资源采取何种必要措施，或者了解服务器的性能")]),t._v("。该请求方法的响应不能缓存。")]),t._v(" "),e("p",[t._v("OPTIONS请求方法的"),e("strong",[t._v("主要用途")]),t._v("有两个：")]),t._v(" "),e("ul",[e("li",[t._v("获取服务器支持的所有HTTP请求方法；")]),t._v(" "),e("li",[t._v("用来检查访问权限。例如：在进行 CORS 跨域资源共享时，对于复杂请求，就是使用 OPTIONS 方法发送嗅探请求，以判断是否有对指定资源的访问权限。")])]),t._v(" "),e("h2",{attrs:{id:"_7-http-1-0-和-http-1-1-之间有哪些区别？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-http-1-0-和-http-1-1-之间有哪些区别？"}},[t._v("#")]),t._v(" 7. HTTP 1.0 和 HTTP 1.1 之间有哪些区别？")]),t._v(" "),e("p",[e("strong",[t._v("HTTP 1.0和 HTTP 1.1 有以下区别")]),t._v("：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("连接方面")]),t._v("，http1.0 默认使用非持久连接，而 http1.1 默认使用持久连接。http1.1 通过使用持久连接来使多个 http 请求复用同一个 TCP 连接，以此来避免使用非持久连接时每次需要建立连接的时延。")]),t._v(" "),e("li",[e("strong",[t._v("资源请求方面")]),t._v("，在 http1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，http1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。")]),t._v(" "),e("li",[e("strong",[t._v("缓存方面")]),t._v("，在 http1.0 中主要使用 header 里的 If-Modified-Since、Expires 来做为缓存判断的标准，http1.1 则引入了更多的缓存控制策略，例如 Etag、If-Unmodified-Since、If-Match、If-None-Match 等更多可供选择的缓存头来控制缓存策略。")]),t._v(" "),e("li",[t._v("http1.1 中"),e("strong",[t._v("新增了 host 字段")]),t._v("，用来指定服务器的域名。http1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个IP地址。因此有了 host 字段，这样就可以将请求发往到同一台服务器上的不同网站。")]),t._v(" "),e("li",[t._v("http1.1 相对于 http1.0 还新增了很多"),e("strong",[t._v("请求方法")]),t._v("，如 PUT、HEAD、OPTIONS 等。")])]),t._v(" "),e("h2",{attrs:{id:"_8-http-1-1-和-http-2-0-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-http-1-1-和-http-2-0-的区别"}},[t._v("#")]),t._v(" 8. HTTP 1.1 和 HTTP 2.0 的区别")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("二进制协议")]),t._v('：HTTP/2 是一个二进制协议。在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为"帧"，可以分为头信息帧和数据帧。 帧的概念是它实现多路复用的基础。')]),t._v(" "),e("li",[e("strong",[t._v("多路复用：")]),t._v(' HTTP/2 实现了多路复用，HTTP/2 仍然复用 TCP 连接，但是在一个连接里，客户端和服务器都可以同时发送多个请求或回应，而且不用按照顺序一一发送，这样就避免了"队头堵塞"【1】的问题。')]),t._v(" "),e("li",[e("strong",[t._v("数据流：")]),t._v(" HTTP/2 使用了数据流的概念，因为 HTTP/2 的数据包是不按顺序发送的，同一个连接里面连续的数据包，可能属于不同的请求。因此，必须要对数据包做标记，指出它属于哪个请求。HTTP/2 将每个请求或回应的所有数据包，称为一个数据流。每个数据流都有一个独一无二的编号。数据包发送时，都必须标记数据流 ID ，用来区分它属于哪个数据流。")]),t._v(" "),e("li",[e("strong",[t._v("头信息压缩：")]),t._v(" HTTP/2 实现了头信息压缩，由于 HTTP 1.1 协议不带状态，每次请求都必须附上所有信息。所以，请求的很多字段都是重复的，比如 Cookie 和 User Agent ，一模一样的内容，每次请求都必须附带，这会浪费很多带宽，也影响速度。HTTP/2 对这一点做了优化，引入了头信息压缩机制。一方面，头信息使用 gzip 或 compress 压缩后再发送；另一方面，客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就能提高速度了。")]),t._v(" "),e("li",[e("strong",[t._v("服务器推送：")]),t._v(" HTTP/2 允许服务器未经请求，主动向客户端发送资源，这叫做服务器推送。使用服务器推送提前给客户端推送必要的资源，这样就可以相对减少一些延迟时间。这里需要注意的是 http2 下服务器主动推送的是"),e("strong",[t._v("静态资源")]),t._v("，"),e("strong",[t._v("和 WebSocket 以及使用 SSE 等方式向客户端发送即时数据的推送是不同的。")])])]),t._v(" "),e("p",[e("strong",[t._v("【1】队头堵塞：")])]),t._v(" "),e("blockquote",[e("p",[t._v("队头阻塞是由 HTTP 基本的“请求 - 应答”模型所导致的。HTTP 规定报文必须是“一发一收”，这就形成了一个先进先出的“串行”队列。队列里的请求是没有优先级的，只有入队的先后顺序，排在最前面的请求会被最优先处理。如果队首的请求因为处理的太慢耽误了时间，那么队列里后面的所有请求也不得不跟着一起等待，结果就是其他的请求承担了不应有的时间成本，造成了队头堵塞的现象。")])]),t._v(" "),e("h2",{attrs:{id:"_9-http和https协议的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-http和https协议的区别"}},[t._v("#")]),t._v(" 9. HTTP和HTTPS协议的区别")]),t._v(" "),e("p",[t._v("HTTP和HTTPS协议的主要区别如下：")]),t._v(" "),e("ul",[e("li",[t._v("HTTPS协议需要CA证书，费用较高；而HTTP协议不需要；")]),t._v(" "),e("li",[t._v("HTTP协议是超文本传输协议，信息是明文传输的，HTTPS则是具有安全性的SSL加密传输协议；")]),t._v(" "),e("li",[t._v("使用不同的连接方式，端口也不同，HTTP协议端口是80，HTTPS协议端口是443；")]),t._v(" "),e("li",[t._v("HTTP协议连接很简单，是无状态的；HTTPS协议是有SSL和HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP更加安全。")])]),t._v(" "),e("h2",{attrs:{id:"_10-get方法url长度限制的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-get方法url长度限制的原因"}},[t._v("#")]),t._v(" 10. GET方法URL长度限制的原因")]),t._v(" "),e("p",[t._v("实际上HTTP协议规范并没有对get方法请求的url长度进行限制，这个限制是特定的浏览器及服务器对它的限制。 IE对URL长度的限制是2083字节(2K+35)。由于IE浏览器对URL长度的允许值是最小的，所以开发过程中，只要URL不超过2083字节，那么在所有浏览器中工作都不会有问题。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v("的长度值 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v("（"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2083")]),t._v("）"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" （你的Domain"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("Path）"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("（"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("是"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v("请求中"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("两个字符的长度）\n")])])]),e("p",[t._v("下面看一下主流浏览器对get方法中url的长度限制范围：")]),t._v(" "),e("ul",[e("li",[t._v("Microsoft Internet Explorer (Browser)：IE浏览器对URL的最大限制为2083个字符，如果超过这个数字，提交按钮没有任何反应。")]),t._v(" "),e("li",[t._v("Firefox (Browser)：对于Firefox浏览器URL的长度限制为 65,536 个字符。")]),t._v(" "),e("li",[t._v("Safari (Browser)：URL最大长度限制为 80,000 个字符。")]),t._v(" "),e("li",[t._v("Opera (Browser)：URL最大长度限制为 190,000 个字符。")]),t._v(" "),e("li",[t._v("Google (chrome)：URL最大长度限制为 8182 个字符。")])]),t._v(" "),e("p",[t._v("主流的服务器对get方法中url的长度限制范围：")]),t._v(" "),e("ul",[e("li",[t._v("Apache (Server)：能接受最大url长度为8192个字符。")]),t._v(" "),e("li",[t._v("Microsoft Internet Information Server(IIS)：能接受最大url的长度为16384个字符。")])]),t._v(" "),e("p",[t._v("根据上面的数据，可以知道，get方法中的URL长度最长不超过2083个字符，这样所有的浏览器和服务器都可能正常工作。")]),t._v(" "),e("h2",{attrs:{id:"_11-当在浏览器中输入-google-com-并且按下回车之后发生了什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-当在浏览器中输入-google-com-并且按下回车之后发生了什么？"}},[t._v("#")]),t._v(" 11. 当在浏览器中输入 Google.com 并且按下回车之后发生了什么？")]),t._v(" "),e("p",[t._v("（1）"),e("strong",[t._v("解析URL：")]),t._v(" 首先会对 URL 进行解析，分析所需要使用的传输协议和请求的资源的路径。如果输入的 URL 中的协议或者主机名不合法，将会把地址栏中输入的内容传递给搜索引擎。如果没有问题，浏览器会检查 URL 中是否出现了非法字符，如果存在非法字符，则对非法字符进行转义后再进行下一过程。")]),t._v(" "),e("p",[t._v("（2）"),e("strong",[t._v("缓存判断：")]),t._v(" 浏览器会判断所请求的资源是否在缓存里，如果请求的资源在缓存里并且没有失效，那么就直接使用，否则向服务器发起新的请求。")]),t._v(" "),e("p",[t._v("（3）"),e("strong",[t._v("DNS解析：")]),t._v(" 下一步首先需要获取的是输入的 URL 中的域名的 IP 地址，首先会判断本地是否有该域名的 IP 地址的缓存，如果有则使用，如果没有则向本地 DNS 服务器发起请求。本地 DNS 服务器也会先检查是否存在缓存，如果没有就会先向根域名服务器发起请求，获得负责的顶级域名服务器的地址后，再向顶级域名服务器请求，然后获得负责的权威域名服务器的地址后，再向权威域名服务器发起请求，最终获得域名的 IP 地址后，本地 DNS 服务器再将这个 IP 地址返回给请求的用户。用户向本地 DNS 服务器发起请求属于递归请求，本地 DNS 服务器向各级域名服务器发起请求属于迭代请求。")]),t._v(" "),e("p",[t._v("（4）"),e("strong",[t._v("获取MAC地址：")]),t._v(" 当浏览器得到 IP 地址后，数据传输还需要知道目的主机 MAC 地址，因为应用层下发数据给传输层，TCP 协议会指定源端口号和目的端口号，然后下发给网络层。网络层会将本机地址作为源地址，获取的 IP 地址作为目的地址。然后将下发给数据链路层，数据链路层的发送需要加入通信双方的 MAC 地址，本机的 MAC 地址作为源 MAC 地址，目的 MAC 地址需要分情况处理。通过将 IP 地址与本机的子网掩码相与，可以判断是否与请求主机在同一个子网里，如果在同一个子网里，可以使用 APR 协议获取到目的主机的 MAC 地址，如果不在一个子网里，那么请求应该转发给网关，由它代为转发，此时同样可以通过 ARP 协议来获取网关的 MAC 地址，此时目的主机的 MAC 地址应该为网关的地址。")]),t._v(" "),e("p",[t._v("（5）"),e("strong",[t._v("TCP三次握手：")]),t._v(" 下面是 TCP 建立连接的三次握手的过程，首先客户端向服务器发送一个 SYN 连接请求报文段和一个随机序号，服务端接收到请求后向服务器端发送一个 SYN ACK报文段，确认连接请求，并且也向客户端发送一个随机序号。客户端接收服务器的确认应答后，进入连接建立的状态，同时向服务器也发送一个ACK 确认报文段，服务器端接收到确认后，也进入连接建立状态，此时双方的连接就建立起来了。")]),t._v(" "),e("p",[t._v("（6）"),e("strong",[t._v("HTTPS握手：")]),t._v(" 如果使用的是 HTTPS 协议，在通信前还存在 TLS 的一个四次握手的过程。首先由客户端向服务器端发送使用的协议的版本号、一个随机数和可以使用的加密方法。服务器端收到后，确认加密的方法，也向客户端发送一个随机数和自己的数字证书。客户端收到后，首先检查数字证书是否有效，如果有效，则再生成一个随机数，并使用证书中的公钥对随机数加密，然后发送给服务器端，并且还会提供一个前面所有内容的 hash 值供服务器端检验。服务器端接收后，使用自己的私钥对数据解密，同时向客户端发送一个前面所有内容的 hash 值供客户端检验。这个时候双方都有了三个随机数，按照之前所约定的加密方法，使用这三个随机数生成一把秘钥，以后双方通信前，就使用这个秘钥对数据进行加密后再传输。")]),t._v(" "),e("p",[t._v("（7）"),e("strong",[t._v("返回数据：")]),t._v(" 当页面请求发送到服务器端后，服务器端会返回一个 html 文件作为响应，浏览器接收到响应后，开始对 html 文件进行解析，开始页面的渲染过程。")]),t._v(" "),e("p",[t._v("（8）"),e("strong",[t._v("页面渲染：")]),t._v(" 浏览器首先会根据 html 文件构建 DOM 树，根据解析到的 css 文件构建 CSSOM 树，如果遇到 script 标签，则判端是否含有 defer 或者 async 属性，要不然 script 的加载和执行会造成页面的渲染的阻塞。当 DOM 树和 CSSOM 树建立好后，根据它们来构建渲染树。渲染树构建好后，会根据渲染树来进行布局。布局完成后，最后使用浏览器的 UI 接口对页面进行绘制。这个时候整个页面就显示出来了。")]),t._v(" "),e("p",[t._v("（9）"),e("strong",[t._v("TCP四次挥手：")]),t._v(" 最后一步是 TCP 断开连接的四次挥手过程。若客户端认为数据发送完成，则它需要向服务端发送连接释放请求。服务端收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明客户端到服务端的连接已经释放，不再接收客户端发的数据了。但是因为 TCP 连接是双向的，所以服务端仍旧可以发送数据给客户端。服务端如果此时还有没发完的数据会继续发送，完毕后会向客户端发送连接释放请求，然后服务端便进入 LAST-ACK 状态。客户端收到释放请求后，向服务端发送确认应答，此时客户端进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有服务端的重发请求的话，就进入 CLOSED 状态。当服务端收到确认应答后，也便进入 CLOSED 状态。")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.dailichun.com/2018/03/12/whenyouenteraurl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！ | Dailc的个人主页 (dailichun.com)"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_12-对keep-alive的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-对keep-alive的理解"}},[t._v("#")]),t._v(" 12. 对keep-alive的理解")]),t._v(" "),e("p",[t._v("HTTP1.0 中默认是在每次请求/应答，客户端和服务器都要新建一个连接，完成之后立即断开连接，这就是"),e("strong",[t._v("短连接")]),t._v("。当使用Keep-Alive模式时，Keep-Alive功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接，这就是"),e("strong",[t._v("长连接")]),t._v("。其使用方法如下：")]),t._v(" "),e("ul",[e("li",[t._v("HTTP1.0版本是默认没有Keep-alive的（也就是默认会发送keep-alive），所以要想连接得到保持，必须手动配置发送"),e("code",[t._v("Connection: keep-alive")]),t._v("字段。若想断开keep-alive连接，需发送"),e("code",[t._v("Connection:close")]),t._v("字段；")]),t._v(" "),e("li",[t._v("HTTP1.1规定了默认保持长连接，数据传输完成了保持TCP连接不断开，等待在同域名下继续用这个通道传输数据。如果需要关闭，需要客户端发送"),e("code",[t._v("Connection：close")]),t._v("首部字段。")])]),t._v(" "),e("p",[t._v("Keep-Alive的"),e("strong",[t._v("建立过程")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("客户端向服务器在发送请求报文同时在首部添加发送Connection字段")]),t._v(" "),e("li",[t._v("服务器收到请求并处理 Connection字段")]),t._v(" "),e("li",[t._v("服务器回送Connection:Keep-Alive字段给客户端")]),t._v(" "),e("li",[t._v("客户端接收到Connection字段")]),t._v(" "),e("li",[t._v("Keep-Alive连接建立成功")])]),t._v(" "),e("p",[e("strong",[t._v("服务端自动断开过程（也就是没有keep-alive）")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("客户端向服务器只是发送内容报文（不包含Connection字段）")]),t._v(" "),e("li",[t._v("服务器收到请求并处理")]),t._v(" "),e("li",[t._v("服务器返回客户端请求的资源并关闭连接")]),t._v(" "),e("li",[t._v("客户端接收资源，发现没有Connection字段，断开连接")])]),t._v(" "),e("p",[e("strong",[t._v("客户端请求断开连接过程")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("客户端向服务器发送Connection:close字段")]),t._v(" "),e("li",[t._v("服务器收到请求并处理connection字段")]),t._v(" "),e("li",[t._v("服务器回送响应资源并断开连接")]),t._v(" "),e("li",[t._v("客户端接收资源并断开连接")])]),t._v(" "),e("p",[t._v("开启Keep-Alive的"),e("strong",[t._v("优点：")])]),t._v(" "),e("ul",[e("li",[t._v("较少的CPU和内存的使用（由于同时打开的连接的减少了）；")]),t._v(" "),e("li",[t._v("允许请求和应答的HTTP管线化；")]),t._v(" "),e("li",[t._v("降低拥塞控制 （TCP连接减少了）；")]),t._v(" "),e("li",[t._v("减少了后续请求的延迟（⽆需再进⾏握⼿）；")]),t._v(" "),e("li",[t._v("报告错误⽆需关闭TCP连；")])]),t._v(" "),e("p",[t._v("开启Keep-Alive的"),e("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("长时间的Tcp连接容易导致系统资源无效占用，浪费系统资源。")])]),t._v(" "),e("h3",{attrs:{id:"_13-页面有多张图片，http是怎样的加载表现？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-页面有多张图片，http是怎样的加载表现？"}},[t._v("#")]),t._v(" 13. 页面有多张图片，HTTP是怎样的加载表现？")]),t._v(" "),e("ul",[e("li",[t._v("在"),e("code",[t._v("HTTP 1")]),t._v("下，浏览器对一个域名下最大TCP连接数为6，所以会请求多次。可以用"),e("strong",[t._v("多域名部署")]),t._v("解决。这样可以提高同时请求的数目，加快页面图片的获取速度。")]),t._v(" "),e("li",[t._v("在"),e("code",[t._v("HTTP 2")]),t._v("下，可以一瞬间加载出来很多资源，因为，HTTP2支持多路复用，可以在一个TCP连接中发送多个HTTP请求。")])]),t._v(" "),e("h3",{attrs:{id:"_14-http2的头部压缩算法是怎样的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-http2的头部压缩算法是怎样的？"}},[t._v("#")]),t._v(" 14. HTTP2的头部压缩算法是怎样的？")]),t._v(" "),e("p",[t._v("HTTP2的头部压缩是HPACK算法。在客户端和服务器两端建立“字典”，用索引号表示重复的字符串，采用哈夫曼编码来压缩整数和字符串，可以达到50%~90%的高压缩率。")]),t._v(" "),e("p",[t._v("具体来说:")]),t._v(" "),e("ul",[e("li",[t._v("在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送；")]),t._v(" "),e("li",[t._v("首部表在HTTP/2的连接存续期内始终存在，由客户端和服务器共同渐进地更新；")]),t._v(" "),e("li",[t._v("每个新的首部键值对要么被追加到当前表的末尾，要么替换表中之前的值。")])]),t._v(" "),e("p",[t._v("两个请求， 请求一发送了所有的头部字段，第二个请求则只需要发送差异数据，这样可以减少冗余数据，降低开销。")]),t._v(" "),e("h3",{attrs:{id:"_15-http请求报文的是什么样的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-http请求报文的是什么样的？"}},[t._v("#")]),t._v(" 15. HTTP请求报文的是什么样的？")]),t._v(" "),e("p",[t._v("请求报⽂有4部分组成:")]),t._v(" "),e("ul",[e("li",[t._v("请求⾏")]),t._v(" "),e("li",[t._v("请求头部")]),t._v(" "),e("li",[t._v("空⾏")]),t._v(" "),e("li",[t._v("请求体")])]),t._v(" "),e("p",[e("strong",[t._v("其中：")]),t._v(" （1）请求⾏包括：请求⽅法字段、URL字段、HTTP协议版本字段。它们⽤空格分隔。例如，GET /index.html HTTP/1.1。 （2）请求头部:请求头部由关键字/值对组成，每⾏⼀对，关键字和值⽤英⽂冒号“:”分隔")]),t._v(" "),e("ul",[e("li",[t._v("User-Agent：产⽣请求的浏览器类型。")]),t._v(" "),e("li",[t._v("Accept：客户端可识别的内容类型列表。")]),t._v(" "),e("li",[t._v("Host：请求的主机名，允许多个域名同处⼀个IP地址，即虚拟主机。")])]),t._v(" "),e("p",[t._v("（3）请求体: post put等请求携带的数据")]),t._v(" "),e("p",[e("strong",[t._v("get请求")])]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("---- 请求行 ----\nGET / HTTP/1.1  # GET请求方式 请求资源路径 HTTP协议版本\n---- 请求头 -----\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" www.itcast.cn  # 服务器的主机地址和端口号,默认是80\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection:")]),t._v(" keep-alive # 和服务端保持长连接\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Upgrade-Insecure-Requests:")]),t._v(" 1 # 让浏览器升级不安全请求，使用https请求\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("User-Agent:")]),t._v(" Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36  # 用户代理，也就是客户端的名称\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept:")]),t._v("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8 # 可接受的数据类型\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept-Encoding:")]),t._v(" gzip, deflate # 可接受的压缩格式\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept-Language:")]),t._v(" zh-CN,zh;q=0.9 #可接受的语言\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Cookie:")]),t._v(" pgv_pvi=1246921728; # 登录用户的身份标识\n \n---- 空行 ----\n")])])]),e("p",[e("strong",[t._v("post请求")])]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("---- 请求行 ----\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("POST")]),t._v(" /xmweb?host=mail.itcast.cn&_t=1542884567319 HTTP/1.1")]),t._v(" # POST请求方式 请求资源路径 HTTP协议版本\n---- 请求头 ----\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" mail.itcast.cn # 服务器的主机地址和端口号,默认是80\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection:")]),t._v(" keep-alive # 和服务端保持长连接\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/x-www-form-urlencoded  # 告诉服务端请求的数据类型\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("User-Agent:")]),t._v(" Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36 # 客户端的名称\n---- 空行 ----\n---- 请求体 ----\nusername=hello&pass=hello # 请求参数\n")])])]),e("h2",{attrs:{id:"_16-http响应报文的是什么样的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-http响应报文的是什么样的？"}},[t._v("#")]),t._v(" 16. HTTP响应报文的是什么样的？")]),t._v(" "),e("p",[t._v("请求报⽂有4部分组成:")]),t._v(" "),e("ul",[e("li",[t._v("响应⾏")]),t._v(" "),e("li",[t._v("响应头")]),t._v(" "),e("li",[t._v("空⾏")]),t._v(" "),e("li",[t._v("响应体")])]),t._v(" "),e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("— 响应行/状态行 —\n"),e("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("200 OK # HTTP协议版本 状态码 状态描述")])]),t._v("\n— 响应头 —\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Server:")]),t._v(" Tengine # 服务器名称\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" text/html; charset=UTF-8 # 内容类型\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Transfer-Encoding:")]),t._v(" chunked # 发送给客户端内容不确定内容长度，发送结束的标记是0\\r\\n, Content-Length表示服务端确定发送给客户端的内容大小，但是二者只能用其一。\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection:")]),t._v(" keep-alive # 和客户端保持长连接\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Date:")]),t._v(" Fri, 23 Nov 2018 02:01:05 GMT # 服务端的响应时间\n— 空行 —\n— 响应体 —\n")])])]),e("ul",[e("li",[t._v("响应⾏：由网络协议版本，状态码和状态码的原因短语组成，例如 HTTP/1.1 200 OK 。")]),t._v(" "),e("li",[t._v("响应头：响应⾸部组成")]),t._v(" "),e("li",[t._v("响应体：服务器响应的数据")])]),t._v(" "),e("h2",{attrs:{id:"_17-http协议的优点和缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17-http协议的优点和缺点"}},[t._v("#")]),t._v(" 17. HTTP协议的优点和缺点")]),t._v(" "),e("p",[t._v("HTTP 是超文本传输协议，它定义了客户端和服务器之间交换报文的格式和方式，默认使用 80 端口。它使用 TCP 作为传输层协议，保证了数据传输的可靠性。")]),t._v(" "),e("p",[t._v("HTTP协议具有以下"),e("strong",[t._v("优点")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("支持客户端/服务器模式")]),t._v(" "),e("li",[e("strong",[t._v("简单快速")]),t._v("：客户向服务器请求服务时，只需传送请求方法和路径。由于 HTTP 协议简单，使得 HTTP 服务器的程序规模小，因而通信速度很快。")]),t._v(" "),e("li",[e("strong",[t._v("无连接")]),t._v("：无连接就是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接，采用这种方式可以节省传输时间。")]),t._v(" "),e("li",[e("strong",[t._v("无状态")]),t._v("：HTTP 协议是无状态协议，这里的状态是指通信过程的上下文信息。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能会导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就比较快。")]),t._v(" "),e("li",[e("strong",[t._v("灵活")]),t._v("：HTTP 允许传输任意类型的数据对象。正在传输的类型由 Content-Type 加以标记。")])]),t._v(" "),e("p",[t._v("HTTP协议具有以下"),e("strong",[t._v("缺点")]),t._v("：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("无状态：")]),t._v(" HTTP 是一个无状态的协议，HTTP 服务器不会保存关于客户的任何信息。")]),t._v(" "),e("li",[e("strong",[t._v("明文传输：")]),t._v(" 协议中的报文使用的是文本形式，这就直接暴露给外界，不安全。")]),t._v(" "),e("li",[e("strong",[t._v("不安全")])])]),t._v(" "),e("p",[t._v("（1）通信使用明文（不加密），内容可能会被窃听； （2）不验证通信方的身份，因此有可能遭遇伪装； （3）无法证明报文的完整性，所以有可能已遭篡改；")]),t._v(" "),e("h2",{attrs:{id:"_18-说一下http-3-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-说一下http-3-0"}},[t._v("#")]),t._v(" 18. 说一下HTTP 3.0")]),t._v(" "),e("p",[t._v("HTTP/3基于UDP协议实现了类似于TCP的多路复用数据流、传输可靠性等功能，这套功能被称为QUIC协议。 "),e("img",{attrs:{src:v(489),alt:"http3"}})]),t._v(" "),e("ol",[e("li",[e("p",[t._v("流量控制、传输可靠性功能：QUIC在UDP的基础上增加了一层来保证数据传输可靠性，它提供了数据包重传、拥塞控制、以及其他一些TCP中的特性。")])]),t._v(" "),e("li",[e("p",[t._v("集成TLS加密功能：目前QUIC使用TLS1.3，减少了握手所花费的RTT数。")])]),t._v(" "),e("li",[e("p",[t._v("多路复用：同一物理连接上可以有多个独立的逻辑数据流，实现了数据流的单独传输，解决了TCP的队头阻塞问题。")])]),t._v(" "),e("li",[e("p",[t._v("快速握手：由于基于UDP，可以实现使用0 ~ 1个RTT来建立连接。")])])]),t._v(" "),e("h2",{attrs:{id:"_19-队头阻塞的解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_19-队头阻塞的解决方案"}},[t._v("#")]),t._v(" 19. 队头阻塞的解决方案")]),t._v(" "),e("p",[t._v("（1）并发连接：对于一个域名允许分配多个长连接，那么相当于增加了任务队列，不至于一个队伍的任务阻塞其它所有任务。")]),t._v(" "),e("p",[t._v("（2）域名分片：将域名分出很多二级域名，它们都指向同样的一台服务器，能够并发的长连接数变多，解决了队头阻塞的问题。")]),t._v(" "),e("h2",{attrs:{id:"_20-url有哪些组成部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-url有哪些组成部分"}},[t._v("#")]),t._v(" 20. URL有哪些组成部分")]),t._v(" "),e("p",[t._v("以下面的URL为例"),e("code",[t._v("http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name")])]),t._v(" "),e("p",[t._v("从上面的URL可以看出，一个完整的URL包括以下几部分：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("协议部分")]),t._v('：该URL的协议部分为“http：”，这代表网页使用的是HTTP协议。在Internet中可以使用多种协议，如HTTP，FTP等等本例中使用的是HTTP协议。在"HTTP"后面的“//”为分隔符；')]),t._v(" "),e("li",[e("strong",[t._v("域名部分")]),t._v("：该URL的域名部分为“"),e("a",{attrs:{href:"https://link.juejin.cn?target=http%3A%2F%2Fwww.aspxfans.com%E2%80%9D%E3%80%82%E4%B8%80%E4%B8%AAURL%E4%B8%AD%EF%BC%8C%E4%B9%9F%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8IP%E5%9C%B0%E5%9D%80%E4%BD%9C%E4%B8%BA%E5%9F%9F%E5%90%8D%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.aspxfans.com”。一个URL中，也可以使用IP地址作为域名使用"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("端口部分")]),t._v("：跟在域名后面的是端口，域名和端口之间使用“:”作为分隔符。端口不是一个URL必须的部分，如果省略端口部分，将采用默认端口（HTTP协议默认端口是80，HTTPS协议默认端口是443）；")]),t._v(" "),e("li",[e("strong",[t._v("虚拟目录部分")]),t._v("：从域名后的第一个“/”开始到最后一个“/”为止，是虚拟目录部分。虚拟目录也不是一个URL必须的部分。本例中的虚拟目录是“/news/”；")]),t._v(" "),e("li",[e("strong",[t._v("文件名部分")]),t._v("：从域名后的最后一个“/”开始到“？”为止，是文件名部分，如果没有“?”,则是从域名后的最后一个“/”开始到“#”为止，是文件部分，如果没有“？”和“#”，那么从域名后的最后一个“/”开始到结束，都是文件名部分。本例中的文件名是“index.asp”。文件名部分也不是一个URL必须的部分，如果省略该部分，则使用默认的文件名；")]),t._v(" "),e("li",[e("strong",[t._v("锚部分")]),t._v("：从“#”开始到最后，都是锚部分。本例中的锚部分是“name”。锚部分也不是一个URL必须的部分；")]),t._v(" "),e("li",[e("strong",[t._v("参数部分")]),t._v("：从“？”开始到“#”为止之间的部分为参数部分，又称搜索部分、查询部分。本例中的参数部分为“boardID=5&ID=24618&page=1”。参数可以允许有多个参数，参数与参数之间用“&”作为分隔符。")])]),t._v(" "),e("h2",{attrs:{id:"_21-与缓存相关的http请求头有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21-与缓存相关的http请求头有哪些"}},[t._v("#")]),t._v(" 21. 与缓存相关的HTTP请求头有哪些")]),t._v(" "),e("p",[t._v("强缓存：")]),t._v(" "),e("ul",[e("li",[t._v("Expires")]),t._v(" "),e("li",[t._v("Cache-Control")])]),t._v(" "),e("p",[t._v("协商缓存：")]),t._v(" "),e("ul",[e("li",[t._v("Etag、If-None-Match")]),t._v(" "),e("li",[t._v("Last-Modified、If-Modified-Since")])])])}),[],!1,null,null,null);_.default=a.exports}}]);