import {
  ADD_QUESTION_TO_QUIZ_FORM, EMPTY_QUIZ_FORM, UPDATE_QUESTION_TEXT,
  UPDATE_QUIZ_TITLE,
} from '../actions/quizForm';

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
    case ADD_QUESTION_TO_QUIZ_FORM:
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            text: '',
            answers: [],
          }
        ],
      };
    case UPDATE_QUESTION_TEXT:
      const newQuestion = { ...state.questions[action.index], text: action.text };
      const questions = [...state.questions];
      questions[action.index] = newQuestion;

      return { ...state, questions };
    default:
      return state;
  }
};

export default quizForm;
