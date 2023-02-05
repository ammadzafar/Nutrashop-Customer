import * as actionTypes from "../actions/questionActions";

const initialState = {
  questions: [],
};
const questions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_QUESTIONS:
      return {
        ...state,
        questions: action.value,
      };
      case actionTypes.SAVE_NEW_QUESTION:
      return {
        ...state,
        questions: state.questions.concat(action.value),
      };
  }

  return state;
};
export default questions;
