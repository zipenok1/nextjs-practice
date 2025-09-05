
import MainContainer from '../../components/mainContainer'
import styles from './posts.module.css'

export default function PostsClient({posts}) {
  return (
    <MainContainer>
        <div>
            {posts.map(el=>
                <div className={styles.posts__cards} key={el.id}>
                    <h3>{el.title}</h3>
                    <p>{el.body}</p>
                </div>
            )}
        </div> 
    </MainContainer>
  )
}
