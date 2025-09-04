import UserIdClient from './userIdClient'

export default async function page({params}) {
    console.log(params);
  // Этот запрос должен перезапрашиваться при каждом запросе.
  // Аналогично `getServerSideProps`.
  const dynamicData = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await dynamicData.json()
  return <UserIdClient user={user}/>
}