import * as actionTypes from '../actions/brandActions'

const initialState = {
    brands: [],
}
const brands = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_BRANDS:
            return {
                ...state,
                brands: action.value
            }

    }

    return state
}
export default brands
