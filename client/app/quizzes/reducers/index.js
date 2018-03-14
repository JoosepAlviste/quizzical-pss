// @flow
import { RECEIVE_QUIZZES } from '../actions';

export type QuizType = {
  id: number,
  title: string,
};

export type QuizzesListType = Array<QuizType>;

const quizzes = (
  state: QuizzesListType = [],
  action
): QuizzesListType => {
  switch (action.type) {
    case RECEIVE_QUIZZES:
      return action.quizzes;
    default:
      return state;
  }
};

export default quizzes;
