import HomeClient from './homeClient'

export default async function page() {
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const comments = await staticData.json()
  return <HomeClient comments={comments}/>
}