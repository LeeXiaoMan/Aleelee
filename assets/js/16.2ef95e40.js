(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{506:function(t,n,a){"use strict";a.r(n);var e=a(2),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本篇博客主要是对 Javcscript 原型和原型链的学习理解\n")]),t._v(" "),a("h2",{attrs:{id:"理解原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解原型"}},[t._v("#")]),t._v(" 理解原型")]),t._v(" "),a("p",[t._v("JavaScript 常被描述为一种基于原型的语言——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链。")]),t._v(" "),a("h2",{attrs:{id:"构造函数创建对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数创建对象"}},[t._v("#")]),t._v(" 构造函数创建对象")]),t._v(" "),a("p",[t._v("JavaScript 中使用 new 操作符，通过构造函数初始化新对象。我们先使用构造函数创建一个对象。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function Ninja() { \n    this.swung = true;\n}\n\nconst ninja = new Ninja()\nconsole.log(ninja.swung) // true\n")])])]),a("p",[t._v("在上面例子中，简单的通过 Ninja 构造器实例一个对象。接下来我们通过这个例子详细展开。")]),t._v(" "),a("h2",{attrs:{id:"prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" prototype")]),t._v(" "),a("p",[t._v("在 JavaScript 中，函数可以有属性。每个函数都有一个特殊的属性叫作原型（prototype）。例如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function Ninja() { \n  \n}\n\nNinja.prototype.swung = true\nconst ninja = new Ninja()\nconsole.log(ninja.swung) // true\n")])])]),a("p",[t._v("上面例子中 Ninja 函数的 prototype 属性指向的是一个对象，被构建的实例对象 ninja 的原型也指向这个对象。关于 ninja 原型则在下面详细展开：")]),t._v(" "),a("h2",{attrs:{id:"proto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proto"}},[t._v("#")]),t._v(" __ proto__")]),t._v(" "),a("p",[t._v("在 JavaScript 中，实例对象的原型属性是内置属性（使用标记 [[prototype]]）。ES6之前 ECMAScript 标准没有提供接口访问这个属性的，但是许多浏览器都实现了 JavaScript 非标准的内置属性__proto__来访问对象属性。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function Ninja() { \n    this.swung = true;\n}\n\nconst ninja = new Ninja()\nconsole.log(ninja.__proto__ === Ninja.prototype) // true\n")])])]),a("p",[t._v("每一个JavaScript对象(除了null)都具有__proto__属性，这个属性会指向该对象的原型。")]),t._v(" "),a("p",[t._v("接着在看下面这个例子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function Ninja() { \n    this.swung = true;\n}\n\nconst ninja = new Ninja()\nconsole.log(Object.getPrototypeOf(ninja) === Ninja.prototype) // true\n")])])]),a("p",[t._v("ES6开始，ECMAScript 标准提供了 Object.getPrototypeOf() 和 Object.setPrototypeOf() 访问器来访问和设置原型。__proto__它本质上是一个内部属性，而不是一个正式的对外的 API，只是由于浏览器广泛支持，才被加入了 ES6，所以建议不要使用。")]),t._v(" "),a("p",[t._v("上面例子中构造函数原型和实例对象原型是相同的，它们的原型中还包含一个特殊的属性 constructor 用于指向构造函数。")]),t._v(" "),a("h2",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),a("p",[t._v("每个原型都有一个 constructor 属性指向关联的构造函数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function Ninja() { \n  \n}\n\nconsole.log(Ninja.prototype.constructor === Ninja) // true\n")])])]),a("h2",{attrs:{id:"构造函数、实例对象和-constructor-关系图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数、实例对象和-constructor-关系图"}},[t._v("#")]),t._v(" 构造函数、实例对象和 constructor 关系图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/12/172093ef6ae12661?w=978&h=964&f=png&s=248312",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("p",[t._v("当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。")]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function Ninja() { \n  \n}\n\nNinja.prototype.swung = true\nconst ninja = new Ninja()\nninja.swung = false\nconsole.log(ninja.swung) // false\n\ndelete ninja.swung\nconsole.log(ninja.swung) // true\n")])])]),a("p",[t._v("原型链的最顶层即原型链的终点"),a("code",[t._v("Object.prototype")]),t._v("为null,我们可以打印：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("console.log(Object.prototype.__proto__) // null\n")])])]),a("blockquote",[a("p",[t._v("null 表示“没有对象”，即该处不应该有值。")])]),t._v(" "),a("p",[t._v("所以 Object.prototype.__ proto__ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。")]),t._v(" "),a("p",[t._v("所以查找属性的时候查到 Object.prototype 就停止查找了。")])])}),[],!1,null,null,null);n.default=s.exports}}]);