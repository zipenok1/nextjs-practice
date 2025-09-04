'use client'

import { useParams } from "next/navigation"

export default function UserIdClient({user}) {

    const params = useParams()

    return(
        <div>
            <h1>Пользователь с id {params.id}</h1>
            <p>Имя пользователя - {user.name}</p>
        </div>
    )
}

