import {useEffect, useState} from "react";
import {getProducts} from "../service/api.service.ts";
import Product from "./Product.tsx";
import {IProduct} from "../models/IProduct.ts";

const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
     getProducts().then(value => setProducts(value.products));

    }, []);


    return (
        <div>
            {
                products.map(product => (
                    <div key={product.id}>
                       <Product item={product} />
                    </div>)
                )
            }

        </div>
    );
};

export default Products;