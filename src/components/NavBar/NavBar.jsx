import { CartWidget } from "../CartWidget/CartWidget"
export const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">CompuFast</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">PC</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Monitores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Teclados</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mouse</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Otros</a>
                    </li>
                </ul>
            </div>
        </div>
        <CartWidget cantCarrito={99}/>
    </nav>
    )   
}
