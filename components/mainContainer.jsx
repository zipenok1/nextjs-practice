import Link from "next/link";
import styles from './mainContainer.module.css'

function MainContainer({children}) {
  return (
    <div className={styles.wrap}>
        <div className={styles.nav}>
            <Link href="/">Главаня</Link>
            <Link href="/users">Пользователи</Link>
            <Link href="/posts">Сообщения</Link>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default MainContainer