import * as api from '../api';

export const RECEIVE_QUIZZES = 'RECEIVE_QUIZZES';

export const fetchQuizzes = () => (dispatch) => api.fetchQuizzes()
  .then(quizzes => dispatch({
    type: RECEIVE_QUIZZES,
    quizzes,
  }));
