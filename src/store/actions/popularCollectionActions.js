import axios from "axios";
import {React} from "react";

export const STORE_COLLECTIONS = 'STORE_COLLECTIONS'
export const saveCollections = (res) => {
    return {
        type: 'STORE_COLLECTIONS',
        value: res
    }
}
//Store Brands
export const storePopularCollections = () => {
    return dispatch => {
        axios.get('collections')
            .then(response => {
                const results = response.data.map(row => ({
                    key: row.id, // I added this line
                    name: row.name,
                    image: row.image,
                    slug: row.slug

                }))
                dispatch(saveCollections(results))

            })
    }

}

