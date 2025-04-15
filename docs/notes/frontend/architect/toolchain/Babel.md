---
title: Babel
createTime: 2025/02/07 14:46:39
icon: mdi-light:console
permalink: /frontend/architect/qDiyjcfT/
---

## Babel

[Babel](https://babeljs.io/) 功能：

- 语法转化：新语法 -> 旧语法

- 源码映射：编译后源码映射，方便调试

- Polyfills（垫片）：添加缺失特性，Promise、Symbol等（旧版浏览器不支持），能自动引入所需的 *Polyfill*，基于 core-js 实现

  > *Polyfill* 就是一段 js，其内部提供了一些 API 的实现
  >
  > ````js
  > if(!Array.prototype.includes){
  > 	Array.prototype.includes = function() {...}
  > }
  > ````

- 插件与预设：如 ES6 相关[插件](https://babeljs.io/docs/plugins-list#es2015) 

## Babel核心功能

````bash
pnpm add --save-dev @babel/core @babel/cli @babel/preset-env
````

- @babel/core：核心包，提供了核心 API
- @babel/cli：提供 CLI 命令行工具
- @babel/preset-env：预设环境，Babel 做代码转换时，按需引入依赖插件

例：

源代码

```js
// src/index.js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("World"));
```

配置文件

```js
// .babelrc
{
  "presets": ["@babel/preset-env"]
}
```

