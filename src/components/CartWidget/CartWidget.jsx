import carrito from './assets/carrito.svg'

export const CartWidget = ({cantCarrito}) => {
    return (
    <div>
        <button type="button" class="btn btn-secondary"><img src={carrito} alt="cart-wiget"/></button>
        <span>{cantCarrito}</span>
    </div>
    )
}
