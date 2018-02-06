import * as api from '../api';

export const UPDATE_QUIZ_TITLE = 'UPDATE_QUIZ_TITLE';
export const EMPTY_QUIZ_FORM = 'EMPTY_QUIZ_FORM';
export const ADD_QUESTION_TO_QUIZ_FORM = 'ADD_QUESTION_TO_QUIZ_FORM';
export const UPDATE_QUESTION_TEXT = 'UPDATE_QUESTION_TEXT';
export const ADD_ANSWER_TO_QUIZ_FORM = 'ADD_ANSWER_TO_QUIZ_FORM';
export const UPDATE_ANSWER_TEXT = 'UPDATE_ANSWER_TEXT';
export const TOGGLE_ANSWER_CORRECT = 'TOGGLE_ANSWER_CORRECT';

export const updateQuizTitle = (title) => ({
  type: UPDATE_QUIZ_TITLE,
  title,
});

export const submitCreateQuizForm = () => (dispatch, getState) => {
  const quiz = getState().quizForm;

  console.log('Creating quiz!', quiz);

  return api.storeQuiz(quiz)
    .then(newQuiz => newQuiz)
    .then(newQuiz => console.log('Quiz created!', newQuiz))
    .then(() => dispatch(emptyForm()));
};

export const emptyForm = () => ({
  type: EMPTY_QUIZ_FORM,
});

export const addQuestion = () => ({
  type: ADD_QUESTION_TO_QUIZ_FORM,
});

export const updateQuestionText = (tempId, text) => ({
  type: UPDATE_QUESTION_TEXT,
  tempId,
  text,
});

export const addAnswer = (questionTempId) => ({
  type: ADD_ANSWER_TO_QUIZ_FORM,
  questionTempId,
});

export const updateAnswerText = (tempId, text) => ({
  type: UPDATE_ANSWER_TEXT,
  tempId,
  text,
});

export const toggleAnswerCorrect = (tempId, questionTempId) => ({
  type: TOGGLE_ANSWER_CORRECT,
  tempId,
  questionTempId,
});
