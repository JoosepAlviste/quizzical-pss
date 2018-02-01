import * as api from '../api';

export const UPDATE_QUIZ_TITLE = 'UPDATE_QUIZ_TITLE';
export const EMPTY_QUIZ_FORM = 'EMPTY_QUIZ_FORM';

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
