// @flow
import * as api from '../api';

export const UPDATE_QUIZ_TITLE = 'UPDATE_QUIZ_TITLE';
export const EMPTY_QUIZ_FORM = 'EMPTY_QUIZ_FORM';
export const ADD_QUESTION_TO_QUIZ_FORM = 'ADD_QUESTION_TO_QUIZ_FORM';
export const UPDATE_QUESTION_TEXT = 'UPDATE_QUESTION_TEXT';
export const ADD_CHOICE_TO_QUIZ_FORM = 'ADD_CHOICE_TO_QUIZ_FORM';
export const UPDATE_CHOICE_TEXT = 'UPDATE_CHOICE_TEXT';
export const TOGGLE_CHOICE_CORRECT = 'TOGGLE_CHOICE_CORRECT';

export const updateQuizTitle = (title) => ({
  type: UPDATE_QUIZ_TITLE,
  title,
});

export const submitCreateQuizForm = () => (dispatch, getState) => {
  const quiz = getState().quizForm;

  return api.storeQuiz(quiz)
    .then(newQuiz => newQuiz)
    .then(newQuiz => console.log('Quiz created!', newQuiz))
    .then(() => dispatch(emptyForm()));
};

export const emptyForm = () => ({
  type: EMPTY_QUIZ_FORM,
});

export const addQuestion = () => (dispatch) =>
  Promise.resolve().then(() => dispatch({ type: ADD_QUESTION_TO_QUIZ_FORM }));

export const updateQuestionText = (tempId, text) => ({
  type: UPDATE_QUESTION_TEXT,
  tempId,
  text,
});

export const addChoice = (questionTempId) => ({
  type: ADD_CHOICE_TO_QUIZ_FORM,
  questionTempId,
});

export const updateChoiceText = (tempId, text) => ({
  type: UPDATE_CHOICE_TEXT,
  tempId,
  text,
});

export const toggleChoiceCorrect = (tempId, questionTempId) => ({
  type: TOGGLE_CHOICE_CORRECT,
  tempId,
  questionTempId,
});
