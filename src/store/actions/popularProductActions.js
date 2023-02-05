import axios from "axios";
import {React} from "react";

export const STORE_POPULAR_PRODUCTS = 'STORE_POPULAR_PRODUCTS'
export const savePopularProducts = (res) => {
    return {
        type: 'STORE_POPULAR_PRODUCTS',
        value: res
    }
}
//Store Brands
export const storePopularProducts = () => {
    return dispatch => {
        axios.get('popularProducts')
            .then(response => {
                dispatch(savePopularProducts(response.data))

            })
    }

}

