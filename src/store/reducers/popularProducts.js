import * as actionTypes from '../actions/popularProductActions'

const initialState = {
    popularProducts: [],
}
const popularProducts = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_POPULAR_PRODUCTS:
            return {
                ...state,
                popularProducts: action.value
            }

    }

    return state
}
export default popularProducts
