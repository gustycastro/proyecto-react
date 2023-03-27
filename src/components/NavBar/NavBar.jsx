import { CartWidget } from "../CartWidget/CartWidget"
export const NavBar = () => {
    return (
        <nav>
            <h3>PC Express</h3>
            <div>
                <ul>
                    <li><button>Mouse</button></li>
                    <li><button>Monitor</button></li>
                    <li><button>Teclado</button></li>
                    <li><button>PC</button></li>
                    <li><button>Accesorios</button></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )   
}
