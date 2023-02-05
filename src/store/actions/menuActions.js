import axios from "axios";
import {React} from "react";

export const STORE_MENUS = 'STORE_MENUS'
export const saveMenus = (res) => {
    return {
        type: 'STORE_MENUS',
        value: res
    }
}
//Store Brands
export const storeMenus = () => {
    return dispatch => {
        axios.get('menus')
            .then(response => {
                dispatch(saveMenus(response.data))

            })
    }

}

