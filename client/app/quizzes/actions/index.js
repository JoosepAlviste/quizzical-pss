// @flow
import * as api from '../api';

export const RECEIVE_QUIZZES = 'RECEIVE_QUIZZES';
export const RECEIVE_QUIZ_FOR_ANSWERING = 'RECEIVE_QUIZ_FOR_ANSWERING';

export const fetchQuizzes = () => (dispatch) => api.fetchQuizzes()
  .then(quizzes => dispatch({
    type: RECEIVE_QUIZZES,
    quizzes,
  }));

export const fetchQuiz = (id) => (dispatch) => api.fetchQuiz(id)
  .then(quiz => dispatch({
    type: RECEIVE_QUIZ_FOR_ANSWERING,
    quiz,
  }));
