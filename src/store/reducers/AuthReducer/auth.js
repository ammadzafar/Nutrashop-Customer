import * as actionTypes from '../../actions/AuthActions/auth'
import {addWishlist} from "../../slices/wishlistSlice"

const initialState = {
    auth: {},
    isAuthenticated: false,
    guestEmail:'',
    wishlist: [],
}
const auth = (state = initialState, action,dispatch) => {
    switch (action.type) {
        case actionTypes.STORE_AUTH:
            var prdouctIds = action.value.user.wishlist.map(function(w) {
                return w.id;
            });
            return {
                ...state,
                auth: action.value,
                isAuthenticated: true,
                wishlist: prdouctIds
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                auth: {},
                isAuthenticated: false
            }
        case actionTypes.STORE_GUEST_EMAIL:
            return {
                ...state,
                auth: {},
                guestEmail: action.value
            }
    }
    return state
}
export default auth
