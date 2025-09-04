import UsersClient from './usersClient'

export default async function page() {
  // Этот запрос должен кэшироваться до ручной инвалидации.
  // Аналогично `getStaticProps`.
  // `force-cache` установлен по умолчанию и может быть опущен.
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await staticData.json()
  return <UsersClient users={users}/>
}