import { Link } from "react-router-dom";
import Card from "../Card/Card";

function Item({ product }) {
    return (
        <Card product={product}>
            <Link
                to={`/item/${product.id}`}
                className="btn btn-primary btn-sm"
            >
                Ver detalle
            </Link>
        </Card>
    );
}

export default Item;