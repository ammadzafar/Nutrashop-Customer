import * as actionTypes from '../actions/addressActions'

const initialState = {
    addresses: [],
}
const addresses = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_ADDRESSES:
            return {
                ...state,
                addresses: action.value
            }

    }

    return state
}
export default addresses
