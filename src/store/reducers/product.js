import * as actionTypes from '../actions/productActions'

const initialState = {
    product: {},
    questions:{}
}
const popularProducts = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_PRODUCT:
            return {
                ...state,
                product: action.value,
                questions: action.value.AnswerQuestions
            }

    }

    return state
}
export default popularProducts
