import {IBaseModel} from "../models/IBaseModel.ts";

const getProducts = async ():Promise<IBaseModel> => {
    return await fetch(import.meta.env.VITE_API_URL)
    .then(response => response.json());

}
export { getProducts };