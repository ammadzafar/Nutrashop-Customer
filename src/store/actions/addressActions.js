import axios from "axios";
import React from "react";

export const STORE_ADDRESSES = 'STORE_ADDRESSES'
export const saveAddresses = (res) => {
    return {
        type: 'STORE_ADDRESSES',
        value: res
    }
}
export const storeAddresses = (id) => {
    return dispatch => {
        axios.get(`/customer/addresses/${id}`)
            .then(response => {
                const results = response.data.addresses.map(row => ({
                    id: row.id, // I added this line
                    label: row.label,
                    state: row.state,
                    city:row.city,
                    postal_code:row.postal_code,
                    address:row.address,

                }))
                dispatch(saveAddresses(results))

            })
    }

}

