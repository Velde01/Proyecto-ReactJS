import buzo from "../assets/img/1.jpg";
import cargo from "../assets/img/2.jpg";
import campera from "../assets/img/3.jpg";
import bolso from "../assets/img/4.jpg";

const products = [
    {
        id: 1,
        title: "Oversize Hoodie",
        price: 3500,
        category: "hombre",
        image: buzo,
        description: "Buzo oversize premium de algodón, ideal para un estilo urbano y cómodo."
    },

    {
        id: 2,
        title: "Cargo Pants",
        price: 4200,
        category: "hombre",
        image: cargo,
        description: "Pantalón cargo con múltiples bolsillos y corte moderno para uso diario."
    },

    {
        id: 3,
        title: "Leather Jacket",
        price: 6500,
        category: "mujer",
        image: campera,
        description: "Campera de cuero ecológico con diseño elegante y detalles modernos."
    },

    {
        id: 4,
        title: "Mini Bag",
        price: 2800,
        category: "accesorios",
        image: bolso,
        description: "Bolso compacto y versátil, perfecto para complementar cualquier outfit."
    }
];

export default products;