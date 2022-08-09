(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{508:function(_,v,a){"use strict";a.r(v);var t=a(2),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("p",[_._v("本篇博客主要是对 Http 缓存的学习理解\n")]),_._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),a("p",[_._v("讲到前端性能优化，就绕不开浏览器缓存。缓存是计算机领域里的一个重要概念，是优化系统性能的利器。缓存是必知必会的知识点，如果现在你还是不懂或一知半解就来一起学习掌握它吧。")]),_._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[_._v("#")]),_._v(" 基本概念")]),_._v(" "),a("p",[a("strong",[_._v("Web 缓存分类")])]),_._v(" "),a("ul",[a("li",[_._v("数据库缓存")]),_._v(" "),a("li",[_._v("（代理）服务器缓存")]),_._v(" "),a("li",[_._v("CDN 缓存")]),_._v(" "),a("li",[_._v("浏览器缓存")])]),_._v(" "),a("p",[_._v("浏览器缓存也包含很多内容： HTTP 缓存、indexDB、cookie、localstorage 等等。这里我们只讨论 HTTP 缓存相关内容。")]),_._v(" "),a("p",[a("strong",[_._v("HTTP 缓存官方概念")])]),_._v(" "),a("blockquote",[a("p",[_._v("HTTP 缓存（或 Web 缓存）是用于临时存储（缓存）Web文档（如 HTML 页面和图像），以减少服务器延迟的一种信息技术。HTTP 缓存系统会保存下通过这套系统的文档的副本；如果满足某些条件，则可以由缓存满足后续请求。HTTP 缓存系统既可以指设备，也可以指计算机程序。")])]),_._v(" "),a("p",[a("strong",[_._v("缓存的好处：")])]),_._v(" "),a("ul",[a("li",[_._v("使得网页加载和呈现速度更快")]),_._v(" "),a("li",[_._v("减少了不必要的的数据传输，因而节省网络流量和带宽")]),_._v(" "),a("li",[_._v("在上一步的基础上，服务器的负担因此减少")])]),_._v(" "),a("h2",{attrs:{id:"服务器缓存控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器缓存控制"}},[_._v("#")]),_._v(" 服务器缓存控制")]),_._v(" "),a("p",[_._v("HTTP 1.0 版本规定响应头字段 Expires，它对应一个未来的时间戳。客户端第一次请求之后，服务端下发 Expires 响应头字段，当客户端再次需要请求时，先会对比当前时间和 Expires 头中设置的时间。如果当前时间早于 Expires 时间，那么直接使用缓存数据；反之，需要再次发送请求，更新数据。")]),_._v(" "),a("p",[a("strong",[_._v("但是使用 Expires 响应头存在一些小的瑕疵，比如：")])]),_._v(" "),a("ul",[a("li",[_._v("可能会因为服务器和客户端的 GMT 时间不同，出现偏差")]),_._v(" "),a("li",[_._v("如果修改了本地时间，那么客户端端日期可能不准确")]),_._v(" "),a("li",[_._v("写法太复杂，字符串多个空格，少个字母，都会导致非法属性从而设置失效")])]),_._v(" "),a("p",[a("strong",[_._v("为了解决上述问题，    在 HTTP 1.1 版本中，服务端使用 Cache-control 这个响应头，这个头部更加强大，它具有多个不同值：")])]),_._v(" "),a("ul",[a("li",[_._v("private：表示私有缓存，不能被共有缓存代理服务器缓存，不能在用户间共享，可被用户的浏览器缓存。")]),_._v(" "),a("li",[_._v("public：表示共有缓存，可被代理服务器缓存，比如 CDN，允许多用户间共享")]),_._v(" "),a("li",[_._v("max-age：值以秒为单位，表示缓存的内容会在该值后过期")]),_._v(" "),a("li",[_._v("no-cache：需要使用协商缓存，协商缓存的内容我们后面介绍。注意这个字段并不表示不使用缓存")]),_._v(" "),a("li",[_._v("no-store：所有内容都不会被缓存")]),_._v(" "),a("li",[_._v("must-revalidate：告诉浏览器，你这必须再次验证检查信息是否过期, 返回的代号就不是 200 而是 304 了")])]),_._v(" "),a("p",[a("strong",[_._v("HTTP 规定，如果 Cache-control 的 max-age 和 Expires 同时出现，那么 max-age 的优先级更高，他会默认覆盖掉 expires。")])]),_._v(" "),a("h2",{attrs:{id:"客户端缓存控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端缓存控制"}},[_._v("#")]),_._v(" 客户端缓存控制")]),_._v(" "),a("p",[_._v("其实不止服务器可以发 Cache-Control 头，浏览器也可以发 Cache-Control ，也就是说请求 - 响应的双方都可以用这个字段进行缓存控制，互相协商缓存的使用策略。")]),_._v(" "),a("p",[a("strong",[_._v("客户端使用 Cache-control 对应的多个值：")])]),_._v(" "),a("ul",[a("li",[_._v("no-cache：强制向源服务器再次验证")]),_._v(" "),a("li",[_._v("no-store：不缓存请求或者响应的任何内容")]),_._v(" "),a("li",[_._v("max-age = '秒'：响应的最大Age值（缓存过期时间）")])]),_._v(" "),a("p",[_._v("当你点“刷新 F5”按钮的时候，浏览器会在请求头里加一个“Cache-Control: max-age=0”。因为 max-age 是“生存时间”，max-age=0 的意思就是“我要一个最最新的文件”，而本地缓存里的数据至少保存了几秒钟，所以浏览器就不会使用缓存，而是向服务器发请求。服务器看到 max-age=0，也就会用一个最新生成的报文回应浏览器。")]),_._v(" "),a("p",[_._v("但你使用 Ctrl+F5 的“强制刷新”时，它其实是发了一个“Cache-Control: no-cache”，含义和“max-age=0”基本一样。")]),_._v(" "),a("p",[a("strong",[_._v("条件请求")])]),_._v(" "),a("p",[_._v("浏览器用 Cache-Control 做缓存控制只能是刷新数据，不能很好地利用缓存数据，又因为缓存会失效，使用前还必须要去服务器验证是否是最新版。")]),_._v(" "),a("p",[_._v("HTTP 协议就定义了一系列“If”开头的“条件请求”字段，专门用来检查验证资源是否过期，把两个请求才能完成的工作合并在一个请求里做。而且，验证的责任也交给服务器。")]),_._v(" "),a("p",[_._v("条件请求一共有 5 个头字段，我们最常用的是“if-Modified-Since”和“If-None-Match”这两个。需要第一次的响应报文预先提供“Last-modified”和“ETag”，然后第二次请求时就可以带上缓存里的原值，验证资源是否是最新的。如果资源没有变，服务器就回应一个“304 Not Modified”，表示缓存依然有效，浏览器就可以更新一下有效期，然后放心大胆地使用缓存了。")]),_._v(" "),a("p",[a("strong",[_._v("ETag 是“实体标签”（Entity Tag）的缩写，是资源的一个唯一标识，主要是用来解决修改时间无法准确区分文件变化的问题")]),_._v("。")]),_._v(" "),a("h2",{attrs:{id:"http-缓存分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存分类"}},[_._v("#")]),_._v(" HTTP 缓存分类")]),_._v(" "),a("h3",{attrs:{id:"_1、按缓存位置分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、按缓存位置分类"}},[_._v("#")]),_._v(" 1、按缓存位置分类")]),_._v(" "),a("p",[_._v("对于浏览器缓存的分类，分类方式有很多，按缓存位置分类，我们有：")]),_._v(" "),a("ul",[a("li",[_._v("memory cache")]),_._v(" "),a("li",[_._v("disk cache")]),_._v(" "),a("li",[_._v("Service Worker 等")])]),_._v(" "),a("p",[_._v("浏览器的资源缓存分为 from disk cache 和 from memory cache 两类。当首次访问网页时，资源文件被缓存在内存中，同时也会在本地磁盘中保留一份副本。当用户刷新页面，如果缓存的资源没有过期，那么直接从内存中读取并加载。当用户关闭页面后，当前页面缓存在内存中的资源被清空。当用户再一次访问页面时，如果资源文件的缓存没有过期，那么将从本地磁盘进行加载并再次缓存到内存之中。")]),_._v(" "),a("p",[_._v("关于 from disk cache 和 from memory cache 的区别：")]),_._v(" "),a("blockquote",[a("p",[_._v("当您访问chrome中的URL时，页面上的HTML和其他资产（如图像）将本地存储在内存和磁盘缓存中。Chrome将首先使用内存缓存，因为它的速度快得多，但它也会将页面存储在磁盘缓存中，以防您退出浏览器或它崩溃，因为磁盘缓存是持久的。")])]),_._v(" "),a("h3",{attrs:{id:"_2、按失效策略分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、按失效策略分类"}},[_._v("#")]),_._v(" 2、按失效策略分类")]),_._v(" "),a("ul",[a("li",[_._v("强缓存")]),_._v(" "),a("li",[_._v("协商缓存")])]),_._v(" "),a("p",[a("strong",[_._v("强缓存")])]),_._v(" "),a("p",[_._v("强缓存是指客户端在第一次请求后，有效时间内不会再去请求服务器，而是直接使用缓存数据。")]),_._v(" "),a("p",[a("strong",[_._v("协商缓存")])]),_._v(" "),a("p",[_._v("强缓存判断的实质上是缓存资源是否超出某个时间或者某个时间段。很多情况是超出了这个时间或时间段，但是资源并没有更新。从优化的角度来说，我们真正应该关心的是服务器端文件是否已经发生了变化。此时我们需要用到协商缓存策略。")]),_._v(" "),a("p",[_._v("强制缓存优先级最高，并且资源的改动在缓存有效期内浏览器都不会发送请求，因此强制缓存的使用适用于大型且不易修改的的资源文件，例如第三方 CSS、JS 文件或图片资源。如果更加灵活的话，我们也可以为文件名加上 hash 进行版本的区分。")]),_._v(" "),a("p",[_._v("协商缓存灵活性高，适用于数据的缓存，根据上述知识的介绍，采用 Etag 标识进行对比灵活度最高，也最为可靠。对于数据的缓存，我们可以重点考虑存入内存中，因为内存加载速最快，并且数据体积小。")]),_._v(" "),a("p",[a("strong",[_._v("优先级上：Cache-Control > Expires > ETag > Last-Modified")])])])}),[],!1,null,null,null);v.default=e.exports}}]);