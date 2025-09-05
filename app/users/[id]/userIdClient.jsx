'use client'

import { useParams } from "next/navigation"
import MainContainer from '../../../components/mainContainer'

export default function UserIdClient({user}) {

    const params = useParams()

    return(
        <MainContainer>
            <h1>Пользователь с id {params.id}</h1>
            <p className="desc">Имя пользователя - {user.name}</p>
            <style jsx>
                {
                    `
                    .desc{
                        font-size: 18px;
                    }
                    `
                }
            </style>
        </MainContainer>
    )
}

