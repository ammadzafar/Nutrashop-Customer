import axios from "axios";
import {React} from "react";

export const STORE_BRANDS = 'STORE_BRANDS'
export const saveBrands = (res) => {
    return {
        type: 'STORE_BRANDS',
        value: res
    }
}
//Store Brands
export const storeBrands = () => {
    return dispatch => {
        axios.get('brands')
            .then(response => {
                const results = response.data.map(row => ({
                    key: row.id, // I added this line
                    name: row.name,
                    image: row.image,
                    slug:row.slug

                }))
                dispatch(saveBrands(results))

            })
    }

}

