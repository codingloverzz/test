import React, { useContext } from 'react'
import { UserContext, ThemeContext } from "../App"
export default function ContexHook() {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  return (
    <div>
      {user.name}
    </div>
  )
}
