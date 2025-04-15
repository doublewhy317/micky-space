---
title: React 笔记
createTime: 2024/12/10 21:25:37 
permalink: /frontend/fundamental/7fG9hR2q/
---

## Render Props

**定义：**
[Render Props](https://zh-hans.legacy.reactjs.org/docs/render-props.html) 是一种在 React 组件之间共享代码的技术，通过将一个函数作为 prop 传递给组件，该函数返回要渲染的内容。

**核心思想：**
组件不直接渲染内容，而是通过调用传入的 render prop 函数来决定渲染什么。

**使用场景：**

- **共享逻辑**：多个组件需要相同的逻辑时，可以将逻辑封装在一个组件中，通过 render props 共享。
- **动态渲染**：根据不同的条件或数据动态渲染内容。

**基本用法：**

```jsx
<Component render={(data) => (
  <ChildComponent data={data} />
)} />
```

- `Component` 组件接收一个 `render` prop，它是一个函数。
- `Component` 内部调用 `render` 函数，并传递数据作为参数。
- `render` 函数返回要渲染的内容。

**优点：**

- **灵活性高**：可以根据需要动态渲染内容。
- **代码复用**：逻辑封装在组件中，多个组件可以复用。

**缺点：**

- **嵌套过深**：多个 render props 可能导致组件嵌套过深，降低可读性。
- **性能问题**：每次渲染都会调用 render 函数，影响性能。

**示例：**

```jsx
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

const App = () => (
  <MouseTracker render={({ x, y }) => (
    <h1>鼠标位置: ({x}, {y})</h1>
  )} />
);
```

- `MouseTracker` 组件通过 render props 共享鼠标位置逻辑。
- `App` 组件使用 `MouseTracker` 并定义如何渲染鼠标位置。

**替代方案：**

- **Hooks**：React 16.8 引入的 Hooks 可以替代 render props，简化代码结构。

## PorTal 传送门

`createPortal` 将 JSX 作为 children 渲染至指定 DOM，[文档](https://zh-hans.react.dev/reference/react-dom/createPortal)

**语法：**  createPortal(children, domNode, key?)

- `children`：React 可以渲染的任何内容，JSX
- `domNode`：某个已经存在的 DOM 节点，如由 `document.getElementById()` 返回的节点。
- **可选参数** `key`：用作 portal 的 key。

```jsx
import { createPortal } from 'react-dom';

// ...
<div>
  <p>这个子节点被放置在父节点 div 中。</p>
  {createPortal(
    <p>这个子节点被放置在 document body 中。</p>,
    document.body
  )}
</div>
```

**事件冒泡**  

> portal 事件传播 **遵循 React 树而不是 DOM 树**
