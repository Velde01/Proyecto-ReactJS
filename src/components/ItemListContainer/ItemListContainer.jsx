import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ItemList from "./ItemList";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const getProducts = new Promise((resolve) => {
            setTimeout(() => {
                if (categoryId) {
                    resolve(
                        products.filter(
                            product => product.category === categoryId
                        )
                    );
                } else {
                    resolve(products);
                }
            }, 1000);
        });
        getProducts.then((response) => {
            setItems(response);
        });
    }, [categoryId]);
    return (
        <div >
            <h1 className="text-3xl font-extrabold text-center tracking-wide mt-14 mb-10">Catálogo LuModa</h1>
                <ItemList products={items} />
        </div>
    );
}

export default ItemListContainer;