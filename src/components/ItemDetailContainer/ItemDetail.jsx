import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
    return (
        <div>
            <img
                src={product.image}
                alt={product.title}
                width="300"
            />
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>Categoría: {product.category}</p>
            <p>{product.description}</p>
            <ItemCount />
        </div>
    );
}

export default ItemDetail;