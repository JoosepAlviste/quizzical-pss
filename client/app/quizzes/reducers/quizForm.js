import uuid from 'uuid/v1';
import {
  ADD_QUESTION_TO_QUIZ_FORM, EMPTY_QUIZ_FORM, UPDATE_QUESTION_TEXT,
  UPDATE_QUIZ_TITLE,
} from '../actions/quizForm';

const initialState = {
  title: '',
  questions: [],
};

const getInitialQuestion = () => ({
  tempId: uuid(),
  text: '',
  answers: [],
});

const question = (state, action) => {
  if (!state) {
    return getInitialQuestion();
  }

  switch (action.type) {
    case UPDATE_QUESTION_TEXT:
      if (state.tempId !== action.tempId) {
        return state;
      }

      return { ...state, text: action.text };
    default:
      return state;
  }
};

const questions = (state = [], action) => {
  switch (action.type) {
    case ADD_QUESTION_TO_QUIZ_FORM:
      return [
        ...state,
        question(undefined, action),
      ];
    case UPDATE_QUESTION_TEXT:
      return state.map(q => question(q, action));
    default:
      return state;
  }
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
        questions: questions(state.questions, action),
      };
    case UPDATE_QUESTION_TEXT:
      return {
        ...state,
        questions: questions(state.questions, action),
      };
    default:
      return state;
  }
};

export default quizForm;
