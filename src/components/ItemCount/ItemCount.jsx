import { useCount } from "../../hooks/useCount.js"

export const ItemCount = ({ ValInicial, min, max, onAdd }) => {
    
    const { count, minus, sum, reset } = useCount(ValInicial, min, max)

    return (
    <>
        <button className="btn btn-danger" onClick={minus}>-</button>
        {count}
        <button className="btn btn-success" onClick={sum}>+</button>
        <button className="btn btn-dark" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </>
    )
}