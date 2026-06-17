import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <NavLink to="/" className="btn btn-ghost text-xl">
                    LuModa
                </NavLink>
            </div>
            <ul className="menu menu-horizontal px-1">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/category/mujer">Mujer</NavLink></li>
                <li><NavLink to="/category/hombre">Hombre</NavLink></li>
                <li><NavLink to="/category/accesorios">Accesorios</NavLink></li>
            </ul>
            <div className="flex-none">
                <CartWidget />
            </div>
        </div>
    );
}

export default Navbar
