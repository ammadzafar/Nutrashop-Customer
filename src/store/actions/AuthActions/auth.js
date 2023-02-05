
import {React} from "react";

export const STORE_AUTH = 'STORE_AUTH'
export const LOGOUT = 'LOGOUT'
export const STORE_GUEST_EMAIL = 'STORE_GUEST_EMAIL'
export const saveLoginData = (res) => {
    return {
        type: 'STORE_AUTH',
        value: res
    }
}
export const storeGuestEmail = (res) => {
    return {
        type: 'STORE_GUEST_EMAIL',
        value: res
    }
}
export const logout=()=>{
    return{
        type:'LOGOUT'
    }
}
