import {IProduct} from "../models/IProduct.ts";
import {FC} from "react";


type IProductProps = {
    item: IProduct;
}
const Product:FC<IProductProps> = ({item}) => {
    return (
        <div className= "bg-gray-900 text-white p-6 rounded-xl border border-gray-700 shadow-lg">
        <h1 className="text-3xl font-extrabold text-blue-400 mb-4">{item.title}</h1>
            <ul className="space-y-2">
                <li className="border-l-4 border-blue-400 pl-3">{item.description}</li>
                <li>{item.price}</li>
            </ul>
        </div>
    );
};

export default Product;