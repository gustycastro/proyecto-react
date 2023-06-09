import { Categorias } from "./Categorias/Categorias";
import { CartWidget } from "../CartWidget/CartWidget";
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode";
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Categorias />
                </div>
                <CartWidget cantCarrito={0} />
                <BotonDarkMode />
            </div>
        </nav>
    )   
}

