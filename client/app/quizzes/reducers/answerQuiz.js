// @flow
import { RECEIVE_QUIZ_FOR_ANSWERING } from '../actions';

export type Choice = {
  id: number,
  correct: boolean,
  text: string,
};

export type Question = {
  id: number,
  text: string,
  choices: Array<Choice>,
};

export type Quiz = {
  id?: number,
  title?: string,
  questions?: Array<Question>,
};

const answerQuiz = (state?: Quiz = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUIZ_FOR_ANSWERING:
      return action.quiz;
    case '@@router/LOCATION_CHANGE':
      if (action.payload.pathname === '/') {
        // Reset the quiz
        return {};
      }

      return state;
    default:
      return state;
  }
};

export default answerQuiz;
