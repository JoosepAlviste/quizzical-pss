import axios from 'axios';
import { Quiz } from '../reducers/quizForm';
import { Quiz as AnswerQuiz } from '../reducers/answerQuiz';

type QuizListResponse = Array<{
  id: number,
  title: string,
}>;

type QuizCreateResponse = {
  id: number,
};
/*
==================================================
This link is for mock data :
https://2eacf2d7-bcd6-4ca9-bb15-0933307fac6e.mock.pstmn.io/quizzes
==================================================
*/

export const fetchQuizzes = (): Promise<QuizListResponse> =>
axios.get('https://2eacf2d7-bcd6-4ca9-bb15-0933307fac6e.mock.pstmn.io/quizzes').then((response) => response.data);
export const storeQuiz = (quiz: Quiz): Promise<QuizCreateResponse> =>
  axios.post('/quizzes', quiz).then(response => response.data);
// Get the quiz using with based on the specific ID
export const fetchQuiz = (quizId: number): Promise<AnswerQuiz> =>
  axios.get(`https://2eacf2d7-bcd6-4ca9-bb15-0933307fac6e.mock.pstmn.io/quizzes/${quizId}`).then(response => response.data);


/*
==================================================
This link should be replaced wit a server expose link  :
https://2eacf2d7-bcd6-4ca9-bb15-0933307fac6e.mock.pstmn.io/user
==================================================
*/