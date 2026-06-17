import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();
    useEffect(() => {
        const getProduct = new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    products.find(
                        product => product.id === Number(itemId)
                    )
                );
            }, 1000);
        });
        getProduct.then(response => {
            setItem(response);
        });
    }, [itemId]);
    return (
        <>
            {item && <ItemDetail product={item} />}
        </>
    );
}

export default ItemDetailContainer;