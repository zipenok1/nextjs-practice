'use client'

import Link from "next/link"
import styles from './users.module.css'
import MainContainer from "../../components/mainContainer"

export default function UsersClient({users}) {

  return (
    <MainContainer>
        <h1 className={styles.text}>Страница пользователей</h1>
        <ul>
          {users.map(el =>
          <li key={el.id}>
            <Link href={`/users/${el.id}`}>
              {el.name}
            </Link> 
          </li> 
          )}
        </ul>
    </MainContainer>
  )
}