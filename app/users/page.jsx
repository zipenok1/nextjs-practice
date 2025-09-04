'use client'

import Link from "next/link"
import { useState } from "react"
import styles from './users.module.css'

export default function users() {

  const [users, setUsers] = useState([
    {id: 1, name: 'Дима'},
    {id: 2, name: 'Петя'}
  ])

  return (
    <div>
        <h1 className={styles.text}>Страница пользователей</h1>
        <ul>
          {users.map(user =>
          <li>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link> 
          </li> 
          )}
        </ul>
    </div>
  )
}
