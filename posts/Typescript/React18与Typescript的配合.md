---
title: 'React18与Typescript的配合'
date: '2022-9-29'
excerpt: 在React中，组件的声明方式有两种：**函数组件**和**类组件，** 来看看这两种类型的组件声明时是如何定义TS类型的。
isFeatured: true
classify: 'Typescript'
image:
codeDemo:
---

# React18与Typescript的配合
## 一、组件声明

> 在React中，组件的声明方式有两种：**函数组件**和**类组件，** 来看看这两种类型的组件声明时是如何定义TS类型的。

### 1. 类组件

> 类组件的定义形式有两种：`React.Component<P, S={}>` 和 `React.PureComponent<P, S={} SS={}>`，它们都是泛型接口，接收两个参数，第一个是props类型的定义，第二个是state类型的定义，这两个参数都不是必须的，没有时可以省略：

```js
interface IProps {
  name: string;
}
 
interface IState {
  count: number;
}
 
class App extends React.Component<IProps, IState> {
  state = {
    count: 0
  };
 
  render() {
    return (
      <div>
        {this.state.count}
        {this.props.name}
      </div>
    );
  }
}
 
export default App;
```

### 2. 函数组件

> 通常情况下，函数组件我是这样写的：

```jsx
interface IProps {
  name: string
}
 
const App = (props: IProps) => {
  const {name} = props;
 
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{name}</h2>
    </div>
  );
}
 
export default App;
```

除此之外，函数类型还可以使用`React.FunctionComponent<P={}>`来定义，也可以使用其简写`React.FC<P={}>`，两者效果是一样的。它是一个泛型接口，可以接收一个参数，参数表示props的类型，这个参数不是必须的。它们就相当于这样：

```jsx
type React.FC<P = {}> = React.FunctionComponent<P>
```

完整代码

```jsx
interface IProps {
  name: string
}
 
const App: React.FC<IProps> = (props) => {
  const {name} = props;
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{name}</h2>
    </div>
  );
}
 
export default App;
```

当使用这种形式来定义函数组件时，props中默认会带有children属性，它表示该组件在调用时，其内部的元素，来看一个例子，首先定义一个组件，组件中引入了Child1和Child2组件：

```jsx
import Child1 from "./child1";
import Child2 from "./child2";
 
interface IProps {
  name: string;
}
const App: React.FC<IProps> = (props) => {
  const { name } = props;
  return (
    <Child1 name={name}>
      <Child2 name={name} />
      TypeScript
    </Child1>
  );
};
 
export default App;
```

Child1组件结构如下：

```jsx
interface IProps {
  name: string;
}
const Child1: React.FC<IProps> = (props) => {
  const { name, children } = props;
  console.log(children);
  return (
    <div className="App">
      <h1>hello child1</h1>
      <h2>{name}</h2>
    </div>
  );
};
 
export default Child1;	
```

我们在Child1组件中打印了children属性，它的值是一个数组，包含Child2对象和后面的文本：

使用 React.FC 声明函数组件和普通声明的区别如下：

- React.FC 显式地定义了返回类型，其他方式是隐式推导的；
- React.FC 对静态属性：displayName、propTypes、defaultProps 提供了类型检查和自动补全；
- React.FC 为 children 提供了隐式的类型（ReactElement | null）。

那如果我们在定义组件时不知道props的类型，只有调用时才知道，那就还是用泛型来定义props的类型。对于使用function定义的函数组件：

```jsx
// 定义组件
function MyComponent<P>(props: P) {
  return (
   <span>
     {props}
    </span>
  );
}
 
// 使用组件
type IProps = { name: string; age: number; };
 
<MyComponent<IProps> name="React" age={18} />;          // Success
<MyComponent<IProps> name="TypeScript" age="hello" />;  // Error
```

## 二、React内置类型

### 1. JSX.Element

先来看看JSX.Element类型的声明：

```jsx
declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> { }
  }
}
```

可以看到，JSX.Element是ReactElement的子类型，它没有增加属性，两者是等价的。也就是说两种类型的变量可以相互赋值。

JSX.Element 可以通过执行 React.createElement 或是转译 JSX 获得：

```jsx
const jsx = <div>hello</div>
const ele = React.createElement("div", null, "hello");
```

### 2. React.ReactElement

React 的类型声明文件中提供了 React.ReactElement＜T＞，它可以让我们通过传入＜T/＞来注解类组件的实例化，它在声明文件中的定义如下：

```jsx
interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
   type: T;
   props: P;
   key: Key | null;
}
```

ReactElement是一个接口，包含type,props,key三个属性值。该类型的变量值只能是两种：null 和 ReactElement实例。

通常情况下，函数组件返回ReactElement（JXS.Element）的值。

### 3. React.ReactNode

ReactNode类型的声明如下：

```jsx
type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
 
interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
```

可以看到，ReactNode是一个联合类型，它可以是string、number、ReactElement、null、boolean、ReactNodeArray。由此可知。ReactElement类型的变量可以直接赋值给ReactNode类型的变量，但反过来是不行的。

类组件的 render 成员函数会返回 ReactNode 类型的值：

```jsx
class MyComponent extends React.Component {
 render() {
     return <div>hello world</div>
    }
}
// 正确
const component: React.ReactNode<MyComponent> = <MyComponent />;
// 错误
const component: React.ReactNode<MyComponent> = <OtherComponent />;
```

上面的代码中，给component变量设置了类型是Mycomponent类型的react实例，这时只能给其赋值其为MyComponent的实例组件。

通常情况下，类组件通过 render() 返回 ReactNode的值。

### 4. CSSProperties

先来看看React的声明文件中对CSSProperties 的定义：

```jsx
export interface CSSProperties extends CSS.Properties<string | number> {
  /**
   * The index signature was removed to enable closed typing for style
   * using CSSType. You're able to use type assertion or module augmentation
   * to add properties or an index signature of your own.
   *
   * For examples and more information, visit:
   * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
   */
}
```

React.CSSProperties是React基于[TypeScript](https://so.csdn.net/so/search?q=TypeScript&spm=1001.2101.3001.7020)定义的CSS属性类型，可以将一个方法的返回值设置为该类型

```jsx
import * as React from "react";
 
const classNames = require("./sidebar.css");
 
interface Props {
  isVisible: boolean;
}
 
const divStyle = (props: Props): React.CSSProperties => ({
  width: props.isVisible ? "23rem" : "0rem"
});
 
export const SidebarComponent: React.StatelessComponent<Props> = props => (
  <div id="mySidenav" className={classNames.sidenav} style={divStyle(props)}>
    {props.children}
  </div>
);
```

这里divStyle组件的返回值就是React.CSSProperties类型。

我们还可以定义一个CSSProperties类型的变量

```jsx
const divStyle: React.CSSProperties = {
    width: "11rem",
    height: "7rem",
    backgroundColor: `rgb(${props.color.red},${props.color.green}, ${props.color.blue})`
};
```

这个变量可以在HTML标签的style属性上使用：

```jsx
<div style={divStyle} />
```

在React的类型声明文件中，style属性的类型如下：

```jsx
style?: CSSProperties | undefined;
```

## 三、React Hooks

### 1. useState

默认情况下，React会为根据设置的state的初始值来自动推导state以及更新函数的类型：

如果已知state 的类型，可以通过以下形式来自定义state的类型：

```jsx
const [count, setCount] = useState<number>(1)
```

如果初始值为null，需要显式地声明 state 的类型：

```jsx
const [count, setCount] = useState<number | null>(null);
```

如果state是一个对象，想要初始化一个空对象，可以使用断言来处理：

```jsx
const [user, setUser] = React.useState<IUser>({} as IUser);
```

实际上，这里将空对象{}断言为IUser接口就是欺骗了TypeScript的编译器，由于后面的代码可能会依赖这个对象，所以应该在使用前及时初始化 user 的值，否则就会报错。

### 2. useEffect

useEffect的主要作用就是处理副作用，它的第一个参数是一个函数，表示要清除副作用的操作，第二个参数是一组值，当这组值改变时，第一个参数的函数才会执行，这让我们可以控制何时运行函数来处理副作用：

```jsx
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source]
);
```

当函数的返回值不是函数或者effect函数中未定义的内容时，如下：

```jsx
useEffect(
    () => {
      subscribe();
      return null; 
    }
);
```

TypeScript就会报错：

### 3. useRef

当使用 useRef 时，我们可以访问一个可变的引用对象。可以将初始值传递给 useRef，它用于初始化可变 ref 对象公开的当前属性。当我们使用useRef时，需要给其指定类型：

```jsx
const nameInput = React.useRef<HTMLInputElement>(null)
```

这里给实例的类型指定为了input输入框类型。

当useRef的初始值为null时，有两种创建的形式，第一种：

```jsx
const nameInput = React.useRef<HTMLInputElement>(null)
nameInput.current.innerText = "hello world";
```

这种形式下，ref1.current是只读的（read-only），所以当我们将它的innerText属性重新赋值时会报以下错误：

```jsx
Cannot assign to 'current' because it is a read-only property.
```

那该怎么将current属性变为动态可变的，先来看看类型声明文件中 useRef 是如何定义的：

```jsx
function useRef<T>(initialValue: T): MutableRefObject<T>;
 // convenience overload for refs given as a ref prop as they typically start with a null value
 /**
   * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
   * (`initialValue`). The returned object will persist for the full lifetime of the component.
   *
   * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
   * value around similar to how you’d use instance fields in classes.
   *
   * Usage note: if you need the result of useRef to be directly mutable, include `| null` in the type
   * of the generic argument.
   *
   * @version 16.8.0
   * @see https://reactjs.org/docs/hooks-reference.html#useref
   */
```

这段代码的第十行的告诉我们，如果需要useRef的直接可变，就需要在泛型参数中包含'| null'，所以这就是当初始值为null的第二种定义形式：

```jsx
const nameInput = React.useRef<HTMLInputElement | null>(null);
```

这种形式下，nameInput.current就是可写的。不过两种类型在使用时都需要做类型检查：

```jsx
nameInput.current?.innerText = "hello world";
```

那么问题来了，为什么第一种写法在没有操作current时没有报错呢？因为useRef在类型定义时具有多个重载声明，第一种方式就是执行的以下函数重载：

```jsx
function useRef<T>(initialValue: T|null): RefObject<T>;
// convenience overload for potentially undefined initialValue / call with 0 arguments
// has a default to stop it from defaulting to {} instead
/**
  * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
  * (`initialValue`). The returned object will persist for the full lifetime of the component.
  *
  * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
  * value around similar to how you’d use instance fields in classes.
  *
  * @version 16.8.0
  * @see https://reactjs.org/docs/hooks-reference.html#useref
  */
```

从上useRef的声明中可以看到，function useRef的返回值类型化是MutableRefObject，这里面的T就是参数的类型T，所以最终nameInput 的类型就是React.MutableRefObject。

注意，上面用到了HTMLInputElement类型，这是一个标签类型，这个操作就是用来访问DOM元素的。

### 4. useCallback

先来看看类型声明文件中对useCallback的定义：

```jsx
function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
 /**
  * `useMemo` will only recompute the memoized value when one of the `deps` has changed.
  *
  * Usage note: if calling `useMemo` with a referentially stable function, also give it as the input in
  * the second argument.
  *
  * ```ts
  * function expensive () { ... }
  *
  * function Component () {
  *   const expensiveResult = useMemo(expensive, [expensive])
  *   return ...
  * }
  * ```
  *
  * @version 16.8.0
  * @see https://reactjs.org/docs/hooks-reference.html#usememo
  */
```

useCallback接收一个回调函数和一个依赖数组，只有当依赖数组中的值发生变化时才会重新执行回调函数。来看一个例子：

```jsx
const add = (a: number, b: number) => a + b;
 
const memoizedCallback = useCallback(
  (a) => {
    add(a, b);
  },
  [b]
);
```

这里我们没有给回调函数中的参数a定义类型，所以下面的调用方式都不会报错：

```jsx
memoizedCallback("hello");
memoizedCallback(5)
```

尽管add方法的两个参数都是number类型，但是上述调用都能够用执行。所以为了更加严谨，我们需要给回调函数定义具体的类型：

```jsx
const memoizedCallback = useCallback(
  (a: number) => {
    add(a, b);
  },
  [b]
);
```

这时候如果再给回调函数传入字符串就会报错了：

所有，需要注意，在使用useCallback时需要给回调函数的参数指定类型。

### 5. useMemo

先来看看类型声明文件中对useMemo的定义：

```jsx
function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
   /**
    * `useDebugValue` can be used to display a label for custom hooks in React DevTools.
    *
    * NOTE: We don’t recommend adding debug values to every custom hook.
    * It’s most valuable for custom hooks that are part of shared libraries.
    *
    * @version 16.8.0
    * @see https://reactjs.org/docs/hooks-reference.html#usedebugvalue
    */
```

useMemo和useCallback是非常类似的，但是它返回的是一个值，而不是函数。所以在定义useMemo时需要定义返回值的类型：

```jsx
let a = 1;
setTimeout(() => {
  a += 1;
}, 1000);
 
const calculatedValue = useMemo<number>(() => a ** 2, [a]);
```

如果返回值不一致，就会报错：

### 6. useContext

useContext需要提供一个上下文对象，并返回所提供的上下文的值，当提供者更新上下文对象时，引用这些上下文对象的组件就会重新渲染：

```jsx
const ColorContext = React.createContext({ color: "green" });
 
const Welcome = () => {
  const { color } = useContext(ColorContext);
  return <div style={{ color }}>hello world</div>;
};
```

在使用useContext时，会自动推断出提供的上下文对象的类型，所以并不需要我们手动设置context的类型。当前，我们也可以使用泛型来设置context的类型：

```jsx
interface IColor {
 color: string;
}
 
const ColorContext = React.createContext<IColor>({ color: "green" });
```

### 7. useReducer

有时我们需要处理一些复杂的状态，并且可能取决于之前的状态。这时候就可以使用useReducer，它接收一个函数，这个函数会根据之前的状态来计算一个新的state。其语法如下：

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
 
const Counter = () => {
  const initialState = {count: 0}
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

当前的状态是无法推断出来的，可以给reducer函数添加类型，通过给reducer函数定义state和action来推断 useReducer 的类型，下面来修改上面的例子：

```jsx
type ActionType = {
  type: 'increment' | 'decrement';
};
 
type State = { count: number };
 
const initialState: State = {count: 0}
const reducer = (state: State, action: ActionType) => {
  // ...
}
```

这样，在Counter函数中就可以推断出类型。当我们试图使用一个不存在的类型时，就会报错：

```jsx
dispatch({type: 'reset'});
// Error! type '"reset"' is not assignable to type '"increment" | "decrement"'
```

除此之外，还可以使用泛型的形式来实现reducer函数的类型定义：

```jsx
type ActionType = {
  type: 'increment' | 'decrement';
};
 
type State = { count: number };
 
const reducer: React.Reducer<State, ActionType> = (state, action) => {
  // ...
}
```

## 四、事件处理

### 1. Event 事件类型

在开发中我们会经常在事件处理函数中使用event事件对象，比如在input框输入时实时获取输入的值；使用鼠标事件时，通过 clientX、clientY 获取当前指针的坐标等等。

我们知道，Event是一个对象，并且有很多属性，这时很多人就会把 event 类型定义为any，这样的话TypeScript就失去了它的意义，并不会对event事件进行静态检查，如果一个键盘事件触发了下面的方法，也不会报错：

```jsx
const handleEvent = (e: any) => {
    console.log(e.clientX, e.clientY)
}
```

由于Event事件对象中有很多的属性，所以我们也不方便把所有属性及其类型定义在一个interface中，所以React在声明文件中给我们提供了Event事件对象的类型声明。

常见的Event 事件对象如下：

- **剪切板事件对象**：ClipboardEvent<T = Element>
- **拖拽事件对象**：DragEvent<T = Element>
- **焦点事件对象**：FocusEvent<T = Element>
- **表单事件对象**：FormEvent<T = Element>
- **Change事件对象**：ChangeEvent<T = Element>
- **键盘事件对象**：KeyboardEvent<T = Element>
- **鼠标事件对象**：MouseEvent<T = Element, E = NativeMouseEvent>
- **触摸事件对象**：TouchEvent<T = Element>
- **滚轮事件对象**：WheelEvent<T = Element>
- **动画事件对象**：AnimationEvent<T = Element>
- **过渡事件对象**：TransitionEvent<T = Element>

可以看到，这些Event事件对象的泛型中都会接收一个Element元素的类型，这个类型就是我们绑定这个事件的标签元素的类型，标签元素类型将在下面的第五部分介绍。

来看一个简单的例子：

```jsx
type State = {
  text: string;
};
 
const App: React.FC = () => {  
  const [text, setText] = useState<string>("")
 
  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };
  
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
    </div>
  );
}
```

里就给onChange方法的事件对象定义为了FormEvent类型，并且作用的对象是一个HTMLInputElement类型的标签（input标签）

可以来看下MouseEvent事件对象和ChangeEvent事件对象的类型声明，其他事件对象的声明形似也类似：

```jsx
interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
  altKey: boolean;
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  /**
    * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
    */
  getModifierState(key: string): boolean;
  metaKey: boolean;
  movementX: number;
  movementY: number;
  pageX: number;
  pageY: number;
  relatedTarget: EventTarget | null;
  screenX: number;
  screenY: number;
  shiftKey: boolean;
}
 
interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}
```

## 五、HTML标签类型

### 1. 常见标签类型

在项目的依赖文件中可以找到HTML标签相关的类型声明文件：

```jsx
a: HTMLAnchorElement;
body: HTMLBodyElement;
br: HTMLBRElement;
button: HTMLButtonElement;
div: HTMLDivElement;
h1: HTMLHeadingElement;
h2: HTMLHeadingElement;
h3: HTMLHeadingElement;
html: HTMLHtmlElement;
img: HTMLImageElement;
input: HTMLInputElement;
ul: HTMLUListElement;
li: HTMLLIElement;
link: HTMLLinkElement;
p: HTMLParagraphElement;
span: HTMLSpanElement;
style: HTMLStyleElement;
table: HTMLTableElement;
tbody: HTMLTableSectionElement;
video: HTMLVideoElement;
audio: HTMLAudioElement;
meta: HTMLMetaElement;
form: HTMLFormElement;
```

那什么时候会使用到标签类型呢，上面第四部分的Event事件类型和事件处理函数类型中都使用到了标签的类型。上面的很多的类型都需要传入一个ELement类型的泛型参数，这个泛型参数就是对应的标签类型值，可以根据标签来选择对应的标签类型。这些类型都继承自HTMLElement类型，如果使用时对类型类型要求不高，可以直接写HTMLELement。比如下面的例子：

```jsx
<Button
 type="text"
 onClick={(e: React.MouseEvent<HTMLElement>) => {
  handleOperate();
  e.stopPropagation();
}}
  >
    <img
 src={cancelChangeIcon}
 alt=""
    />
    取消修改
</Button>
```

其实，在直接操作DOM时也会用到标签类型，虽然我们现在通常会使用框架来开发，但是有时候也避免不了直接操作DOM。比如我在工作中，项目中的某一部分组件是通过npm来引入的其他组的组件，而在很多时候，我有需要动态的去个性化这个组件的样式，最直接的办法就是通过原生JavaScript获取到DOM元素，来进行样式的修改，这时候就会用到标签类型。

来看下面的例子：

```jsx
document.querySelectorAll('.paper').forEach(item => {
  const firstPageHasAddEle = (item.firstChild as HTMLDivElement).classList.contains('add-ele');
  
  if (firstPageHasAddEle) {
    item.removeChild(item.firstChild as ChildNode);
  }
})
```

这是我最近写的一段代码（略微删改），在第一页有个add-ele元素的时候就删除它。这里我们将item.firstChild断言成了HTMLDivElement类型，如果不断言，item.firstChild的类型就是ChildNode，而ChildNode类型中是不存在classList属性的，所以就就会报错，当我们把他断言成HTMLDivElement类型时，就不会报错了。很多时候，标签类型可以和断言（as）一起使用。

后面在removeChild时又使用了as断言，为什么呢？item.firstChild不是已经自动识别为ChildNode类型了吗？因为TS会认为，我们可能不能获取到类名为paper的元素，所以item.firstChild的类型就被推断为ChildNode | null，我们有时候比TS更懂我们定义的元素，知道页面一定存在paper 元素，所以可以直接将item.firstChild断言成ChildNode类型。

### 2. 标签属性类型

众所周知，每个HTML标签都有自己的属性，比如Input框就有value、width、placeholder、max-length等属性，下面是Input框的属性类型定义：

```jsx
interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
  accept?: string | undefined;
  alt?: string | undefined;
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  capture?: boolean | string | undefined;
  checked?: boolean | undefined;
  crossOrigin?: string | undefined;
  disabled?: boolean | undefined;
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  height?: number | string | undefined;
  list?: string | undefined;
  max?: number | string | undefined;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  minLength?: number | undefined;
  multiple?: boolean | undefined;
  name?: string | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  src?: string | undefined;
  step?: number | string | undefined;
  type?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  width?: number | string | undefined;
 
  onChange?: ChangeEventHandler<T> | undefined;
}
```

如果我们需要直接操作DOM，就可能会用到元素属性类型，常见的元素属性类型如下：

- HTML属性类型：HTMLAttributes
- 按钮属性类型：ButtonHTMLAttributes
- 表单属性类型：FormHTMLAttributes
- 图片属性类型：ImgHTMLAttributes
- 输入框属性类型：InputHTMLAttributes
- 链接属性类型：LinkHTMLAttributes
- meta属性类型：MetaHTMLAttributes
- 选择框属性类型：SelectHTMLAttributes
- 表格属性类型：TableHTMLAttributes
- 输入区属性类型：TextareaHTMLAttributes
- 视频属性类型：VideoHTMLAttributes
- SVG属性类型：SVGAttributes
- WebView属性类型：WebViewHTMLAttributes

一般情况下，我们是很少需要在项目中显式的去定义标签属性的类型。如果子级去封装组件库的话，这些属性就能发挥它们的作用了。来看例子（来源于网络，仅供学习）：

```jsx
import React from 'react';
import classNames from 'classnames'
 
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}
 
export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}
 
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;    
}
 
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> // 使用 交叉类型（&） 获得我们自己定义的属性和原生 button 的属性
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> // 使用 交叉类型（&） 获得我们自己定义的属性和原生 a标签 的属性
 
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> //使用 Partial<> 使两种属性可选
 
const Button: React.FC<ButtonProps> = (props) => {
    const { 
        disabled,
        className, 
        size,
        btnType,
        children,
        href,
        ...restProps  
    } = props;
 
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled  // 只有 a 标签才有 disabled 类名，button没有
    })
 
    if(btnType === ButtonType.Link && href) {
        return (
            <a 
             className={classes}
             href={href}
             {...restProps}
            >
                {children}
            </a>
        )
 
    } else {
        return (
            <button 
             className={classes}
             disabled={disabled} // button元素默认有disabled属性，所以即便没给他设置样式也会和普通button有一定区别
 
             {...restProps}
            >
                {children}
            </button>
        )
    }
}
 
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}
 
export default Button;
```

这段代码就是用来封装一个buttom按钮，在button的基础上添加了一些自定义属性，比如上面将button的类型使用交叉类型（&）获得自定义属性和原生 button 属性 ：

```jsx
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
```

可以看到，标签属性类型在封装组件库时还是很有用的，更多用途可以自己探索~
