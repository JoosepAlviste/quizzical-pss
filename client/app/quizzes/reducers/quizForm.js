import { EMPTY_QUIZ_FORM, UPDATE_QUIZ_TITLE } from '../actions/quizForm';

const initialState = {
  title: '',
  questions: [],
};

const quizForm = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUIZ_TITLE:
      return { ...state, title: action.title };
    case EMPTY_QUIZ_FORM:
      return initialState;
    default:
      return state;
  }
};

export default quizForm;
