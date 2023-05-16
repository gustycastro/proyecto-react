import { useCarritoContext } from "../../context/CartContext.js"
import { Link } from "react-router-dom"
import carrito from './assets/carrito.svg'
export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
    <>
        <button type="button" class="btn btn-secondary "><img src={carrito} alt="cart-wiget"/>
            <Link to={"/cart"} className="nav-link">
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link>
        </button>
    </>
    )
}

