import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProduct } from "../../firebase/firebase.js"

export const ItemDetailConteiner = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProduct(id)
            .then(prod => { setItem(prod) })
    }, [])

    return (
        <div className="card mb-3 conteiner itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}