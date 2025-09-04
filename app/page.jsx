import Link from "next/link";

export default function index() {
  return (
    <div>
      <div className="nav">
        <Link href="/">Главаня</Link>
        <Link href="/users">Пользователи</Link>
      </div>
      <h1>Главная страница</h1>
    </div>
  )
}
