import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">LuModa</a>
            </div>
            <ul className="menu menu-horizontal px-1">
                <li><a>Inicio</a></li>
                <li><a>Mujer</a></li>
                <li><a>Hombre</a></li>
                <li><a>Accesorios</a></li>
            </ul>
            <div className="flex-none">
                <CartWidget />
            </div>
        </div>
    );
}

export default Navbar
