/**
 * Example of hooks wiht http request
 */

import React, { useState, useEffect } from "react";

const Requester = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        setUsers(users)
        setFetching(false)
      })
  }, [])

  return (
    <div>
      <h1>Http requester with hooks</h1>
      { isFetching && <h2>Cargando...</h2>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Requester;