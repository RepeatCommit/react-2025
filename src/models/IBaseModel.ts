import {IProduct} from "./IProduct.ts";

export interface IBaseModel {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}