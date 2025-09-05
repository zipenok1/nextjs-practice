import PostsClient from './postsClient'

export default async function page() {
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await staticData.json()
  return <PostsClient posts={posts}/>
}