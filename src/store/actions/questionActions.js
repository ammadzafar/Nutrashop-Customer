import axios from "axios";

export const STORE_QUESTIONS = "STORE_QUESTIONS";
export const SAVE_NEW_QUESTION = "SAVE_NEW_QUESTION";
export const saveQuestions = (res) => {
  return {
    type: "STORE_QUESTIONS",
    value: res,
  };
};
//Store Questions
export const storeQuestions = (productId) => {
  return (dispatch) => {
    axios.get("question/" + productId).then((response) => {
      const results = response.data
      dispatch(saveQuestions(results));
    });
  };
};
export const saveNewQuestion = (data) => {
  return {
    type: 'SAVE_NEW_QUESTION',
    value: data
  }
}