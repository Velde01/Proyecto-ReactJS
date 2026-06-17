import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="hero min-h-[60vh]">
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-6xl font-bold">404</h1>
                    <p className="py-6">
                        La página que buscas no existe.
                    </p>
                    <Link to="/" className="btn btn-primary">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;