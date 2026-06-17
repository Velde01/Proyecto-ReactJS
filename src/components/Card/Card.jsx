function Card({ product, children }) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={product.image}
                    alt={product.title}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary">
                        ${product.price}
                    </div>
                </h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                        {product.category}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;