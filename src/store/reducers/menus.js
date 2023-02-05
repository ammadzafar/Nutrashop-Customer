import * as actionTypes from '../actions/menuActions'

const initialState = {
    menus: [],
}
const brands = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_MENUS:
            return {
                ...state,
                menus: action.value
            }

    }

    return state
}
export default brands
