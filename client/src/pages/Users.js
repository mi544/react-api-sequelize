import React, { useState, useEffect } from 'react'
import { Table, Spinner, Error } from '../styled'
import Row from '../components/Row'

function Users() {
  const [users, setUsers] = useState(null)
  const [input, setInput] = useState('')
  const [error, setError] = useState(null)

  const loadAll = () => {
    fetch('/api/user/all')
      .then((r) => r.json())
      .then((r) => setUsers(r))
  }

  const reset = () => {
    fetch('/api/user/all', { method: 'delete' })
      .then((r) => r.json())
      .then((r) => {
        setUsers(null)
        loadAll()
      })
  }

  const addUser = (u) => {
    const data = input
    setInput('')
    fetch('/api/user/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ name: data })
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.status === 'error') {
          setError(r.msg)
          setTimeout(setError.bind(null, null), 2500)
        } else {
          loadAll()
        }
      })
  }

  useEffect(loadAll, [])

  return (
    <>
      <h2>Reset!</h2>
      <button onClick={reset}>Reset</button>
      <h2>Add a user!</h2>
      <div>
        <input
          value={input}
          placeholder="Add a new user"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addUser}>Add</button>
        {error && <Error>Error: {error}</Error>}
      </div>

      <h2>All users!</h2>
      {!users && <Spinner />}
      {users && users.status === 'error' && <Table>{users.msg}</Table>}
      {users && users.status === 'success' && (
        <Table>
          {users.result.map((user) => (
            <Row key={user.nanoId} name={user.name} nanoId={user.nanoId} />
          ))}
        </Table>
      )}
    </>
  )
}

export default Users
