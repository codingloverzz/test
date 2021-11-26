import React, { useEffect } from 'react'
function Home() {
  usePrint("home")
  return <h2>Home</h2>
}
function Profile() {
  usePrint("profile")
  return <h2>Profile</h2>
}
export default function CustomHook() {
  usePrint("CustomHook")
  return (
    <div>
      <h2>CustomHook</h2>
      <Home />
      <Profile />
    </div>
  )
}
function usePrint(name) {
  useEffect(() => {
    console.log(`${name}被创建`);
    return () => {
      console.log(`${name}被销毁`);
    }
  }, [])
}