import React, { useRef } from 'react'

export default function RefHookDemo01() {
  const titleRef = useRef()
  const inputRef = useRef()
  function changeDOM() {
    titleRef.current.innerHTML = "你好啊铁汁"
    inputRef.current.value = "卧槽"
  }
  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input type="text" ref={inputRef} />

      <button onClick={e => changeDOM()}>修改DOM</button>
    </div>
  )
}
