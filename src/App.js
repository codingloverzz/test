import React, { createContext, useState } from "react"
import CounterClass from "./01_体验hooks/01_counter-class"
import CounterHooks from "./01_体验hooks/02_counter-hooks"
import MultiHookState from "./02_useState的使用/01_多个状态"
import ComplexHookState from "./02_useState的使用/02_复杂状态的修改"
import ClassCounterTitle from "./03_useEffect/01_class实现title"
import MultiEffectHook from "./03_useEffect/01_多个effect一起使用"
import HookCounterTitle from "./03_useEffect/02_hook实现tite"
import UseEffectCancel from "./03_useEffect/03_useEffect订阅和取消订阅"
import ContexHook from "./04_useContext/useContext的使用"
import Home from "./05_useReducer/home"
import Profile from "./05_useReducer/profile"
import CallbackHook01 from "./06_useCallback的使用/01_useCallback不能进行的性能优化"
import MemoHookDemo01 from "./07_useMemo的使用/01_useMemo复杂计算的应用"
import RefHookDemo01 from "./08_useRef/01_useRef引入DOM"
import CustomHook from "./09_自定义hook/01_认识自定义hook"
import ContextShareHook from "./09_自定义hook/02_context共享"
export const UserContext = createContext()
export const ThemeContext = createContext()
export const TokenContext = createContext()
export default function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {/* <CounterClass></CounterClass> */}
      {/* <CounterHooks /> */}
      {/* <MultiHookState /> */}
      {/* <ComplexHookState /> */}
      {/* <ClassCounterTitle /> */}
      {/* <HookCounterTitle /> */}

      {/* {show && <UseEffectCancel />} */}
      {/* {show && <MultiEffectHook />} */}
      {/* <UserContext.Provider value={{ name: "zhuwei", age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: "30px", color: "red" }}>
          <ContexHook />
        </ThemeContext.Provider>
      </UserContext.Provider> */}
      {/* <Home />
      <Profile /> */}
      {/* <CallbackHook01 /> */}
      {/* <MemoHookDemo01 /> */}
      {/* <RefHookDemo01 /> */}
      {/* {show && <CustomHook />} */}
      <UserContext.Provider value={{ name: "zhuwei", age: 18 }}>
        <TokenContext.Provider value="xixixixixi">
          <ContextShareHook />
        </TokenContext.Provider>
      </UserContext.Provider>

      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}