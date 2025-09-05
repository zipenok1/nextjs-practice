import Link from "next/link";
import './mainContainer.modulee.css'

function MainContainer({children}) {
  return (
    <div className="wrap">
        <div className="nav">
            <Link href="/">Главаня</Link>
            <Link href="/users">Пользователи</Link>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default MainContainer