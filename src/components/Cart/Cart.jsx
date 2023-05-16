import { useCarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h1>Carrito Vacio</h1>
                        <button className="btn btn-success"><Link to={"/"} className="nav-link">Continuar comprando</Link></button>
                    </>
                    :
                    <div className="container">
                        {<ItemList productos={carrito} plantilla={"ItemCart"} />}
                        <div className="cartButtons">
                            <p>Total de la compra: ${totalPrice()}</p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-success">Continuar Comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-primary">Finalizar Compra</button></Link>
                        </div>
                    </div>
            }
        </>
    )
}