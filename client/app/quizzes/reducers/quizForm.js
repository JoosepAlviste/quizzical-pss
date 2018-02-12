import uuid from 'uuid/v1';
import {
  ADD_CHOICE_TO_QUIZ_FORM, ADD_QUESTION_TO_QUIZ_FORM, EMPTY_QUIZ_FORM, TOGGLE_CHOICE_CORRECT,
  UPDATE_CHOICE_TEXT, UPDATE_QUESTION_TEXT, UPDATE_QUIZ_TITLE,
} from '../actions/quizForm';

export type Choice = {
  tempId: string,
  text: string,
  correct: boolean,
};

export type Question = {
  tempId: string,
  text: string,
  choices: Array<Choice>,
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
  choices: [],
});

const getInitialChoice = () => ({
  tempId: uuid(),
  text: '',
  correct: false,
});

const choice = (state: ?Choice, action) => {
  if (!state) {
    return getInitialChoice();
  }

  switch (action.type) {
    case UPDATE_CHOICE_TEXT:
      if (state.tempId !== action.tempId) {
        return state;
      }

      return { ...state, text: action.text };
    case TOGGLE_CHOICE_CORRECT:
      if (state.tempId !== action.tempId) {
        return { ...state, correct: false };
      }

      return { ...state, correct: !state.correct };
    default:
      return state;
  }
};

const choices = (state: ?Array<Choice> = [], action) => {
  switch (action.type) {
    case ADD_CHOICE_TO_QUIZ_FORM:
      return [
        ...state,
        choice(undefined, action),
      ];
    case UPDATE_CHOICE_TEXT:
      return state.map(a => choice(a, action));
    case TOGGLE_CHOICE_CORRECT:
      return state.map(a => choice(a, action));
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
    case ADD_CHOICE_TO_QUIZ_FORM:
      if (state.tempId !== action.questionTempId) {
        return state;
      }

      return {
        ...state,
        choices: choices(state.choices, action),
      };
    case UPDATE_CHOICE_TEXT:
      return {
        ...state,
        choices: choices(state.choices, action),
      };
    case TOGGLE_CHOICE_CORRECT:
      if (state.tempId !== action.questionTempId) {
        return { ...state };
      }

      return {
        ...state,
        choices: choices(state.choices, action),
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
    case ADD_CHOICE_TO_QUIZ_FORM:
      return state.map(q => question(q, action));
    case UPDATE_CHOICE_TEXT:
      return state.map(q => question(q, action));
    case TOGGLE_CHOICE_CORRECT:
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
    case ADD_CHOICE_TO_QUIZ_FORM:
      return {
        ...state,
        questions: questions(state.questions, action),
      };
    case UPDATE_CHOICE_TEXT:
      return {
        ...state,
        questions: questions(state.questions, action),
      };
    case TOGGLE_CHOICE_CORRECT:
      return {
        ...state,
        questions: questions(state.questions, action),
      };
    default:
      return state;
  }
};

export default quizForm;
