import * as actionTypes from '../actions/popularCollectionActions'

const initialState = {
    popularCollections: [],
}
const brands = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_COLLECTIONS:
            return {
                ...state,
                popularCollections: action.value
            }

    }

    return state
}
export default brands
