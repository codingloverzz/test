import React from 'react'

export default function CallbackHook01() {
  const increment = () => {
    console.log("执行了increment");
  }
  return (
    <div>
      <h2>CallbackHook01</h2>
      <button onClick={increment}>+1</button>
    </div>
  )
}
