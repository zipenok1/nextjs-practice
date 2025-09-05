
import MainContainer from '../../components/mainContainer'
import styles from './home.module.css'

export default function HomeClient({comments}) {

    const arr = comments.splice(0, 3)

    return (
        <MainContainer>
        <h1>Главная страница</h1>
        <div className={styles.home__content}>
            {arr.map(el =>
                <div className={styles.home__cards} key={el.id}>
                    <h3>{el.name}</h3>
                    <p>{el.email}</p>
                    <p>{el.body}</p>
                </div>
            )}
        </div>
        </MainContainer>
    )
}
