import { Link } from "react-router-dom";
import { memo } from "react";
export const Categorias = memo(() => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <a className="navbar-brand" href="#">Compu-Gaming</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/pc"}>
                    <a className="nav-link" href="#">PC</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/monitores"}>
                    <a className="nav-link" href="#">Monitor</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/mouse"}>
                    <a className="nav-link" href="#">Mouse</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/accesorios"}>
                    <a className="nav-link" href="#">Accesorios</a>
                </Link>
            </li>
        </ul>
    );
})



