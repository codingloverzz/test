import React, { useEffect, useState } from 'react'

export default function UseEffectCancel() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log("订阅了一些事件");
    return () => {
      console.log("取消了订阅");
    }
  }, [])
  return (
    <div>
      哈哈哈哈
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
