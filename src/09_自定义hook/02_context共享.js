import React, { useContext } from 'react'
import useUserContext from '../hooks/user-hook';
export default function ContextShareHook() {

  const [user, token] = useUserContext()
  console.log(user);
  console.log(token);
  return (
    <div>
      <h2>ContextShareHook</h2>
    </div>
  )
}
