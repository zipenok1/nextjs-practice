'use client'
import { useParams } from "next/navigation"

export default function() {

    const params = useParams()

    return(
        <div>
            Пользователь с id {params.id}
        </div>
    )
}