import uuid from 'uuid/v1';
import {
  ADD_ANSWER_TO_QUIZ_FORM, ADD_QUESTION_TO_QUIZ_FORM, EMPTY_QUIZ_FORM, TOGGLE_ANSWER_CORRECT,
  UPDATE_ANSWER_TEXT, UPDATE_QUESTION_TEXT, UPDATE_QUIZ_TITLE,
} from '../actions/quizForm';

export type Answer = {
  tempId: string,
  text: string,
  correct: boolean,
};

export type Question = {
  tempId: string,
  text: string,
  answers: Array<Answer>,
};

export type Quiz = {
  title: string,
  questions: Array<Question>,
};

const initialState = {
  title: '',
  questions: [],
};

const getInitialQuestion = () => ({
  tempId: uuid(),
  text: '',
  answers: [],
});

const getInitialAnswer = () => ({
  tempId: uuid(),
  text: '',
  correct: false,
});

const answer = (state: ?Answer, action) => {
  if (!state) {
    return getInitialAnswer();
  }

  switch (action.type) {
    case UPDATE_ANSWER_TEXT:
      if (state.tempId !== action.tempId) {
        return state;
      }

      return { ...state, text: action.text };
    case TOGGLE_ANSWER_CORRECT:
      if (state.tempId !== action.tempId) {
        return { ...state, correct: false };
      }

      return { ...state, correct: !state.correct };
    default:
      return state;
  }
};

const answers = (state: ?Array<Answer> = [], action) => {
  switch (action.type) {
    case ADD_ANSWER_TO_QUIZ_FORM:
      return [
        ...state,
        answer(undefined, action),
      ];
    case UPDATE_ANSWER_TEXT:
      return state.map(a => answer(a, action));
    case TOGGLE_ANSWER_CORRECT:
      return state.map(a => answer(a, action));
    default:
      return state;
  }
};

const question = (state: ?Question, action) => {
  if (!state) {
    return getInitialQuestion();
  }

  switch (action.type) {
    case UPDATE_QUESTION_TEXT:
      if (state.tempId !== action.tempId) {
        return state;
      }

      return { ...state, text: action.text };
    case ADD_ANSWER_TO_QUIZ_FORM:
      if (state.tempId !== action.questionTempId) {
        return state;
      }

      return {
        ...state,
        answers: answers(state.answers, action),
      };
    case UPDATE_ANSWER_TEXT:
      return {
        ...state,
        answers: answers(state.answers, action),
      };
    case TOGGLE_ANSWER_CORRECT:
      if (state.tempId !== action.questionTempId) {
        return { ...state };
      }

      return {
        ...state,
        answers: answers(state.answers, action),
      };
    default:
      return state;
  }
};

const questions = (state: ?Array<Question> = [], action) => {
  switch (action.type) {
    case ADD_QUESTION_TO_QUIZ_FORM:
      return [
        ...state,
        question(undefined, action),
      ];
    case UPDATE_QUESTION_TEXT:
      return state.map(q => question(q, action));
    case ADD_ANSWER_TO_QUIZ_FORM:
      return state.map(q => question(q, action));
    case UPDATE_ANSWER_TEXT:
      return state.map(q => question(q, action));
    case TOGGLE_ANSWER_CORRECT:
      return state.map(q => question(q, action));
    default:
      return state;
  }
};

const quizForm = (state: ?Quiz = initialState, action) => {
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
    case ADD_ANSWER_TO_QUIZ_FORM:
      return {
        ...state,
        questions: questions(state.questions, action),
      };
    case UPDATE_ANSWER_TEXT:
      return {
        ...state,
        questions: questions(state.questions, action),
      };
    case TOGGLE_ANSWER_CORRECT:
      return {
        ...state,
        questions: questions(state.questions, action),
      };
    default:
      return state;
  }
};

export default quizForm;
