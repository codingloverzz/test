import React, { useState } from 'react'

export default function ComplexHookState() {
  const [friends, setFriends] = useState([
    { id: 1, name: "唧唧", age: 18 },
    { id: 2, name: "牛牛", age: 30 },
    { id: 3, name: "猪猪", age: 25 }
  ])
  function ageAdd(index) {
    const newFriends = [...friends]
    newFriends[index].age += 1
    setFriends(newFriends)
  }
  return (
    <div>
      <ul>
        {
          friends.map((item, index) => {
            return (
              <li key={index}>{item.name},{item.age},<button onClick={e => ageAdd(index)}>age+1</button></li>
            )
          })
        }
      </ul>
    </div>
  )
}
