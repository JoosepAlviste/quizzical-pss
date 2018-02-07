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

export const fetchQuizzes = (): Promise<QuizListResponse> =>
  axios.get('/quizzes').then((response) => response.data);

export const storeQuiz = (quiz: Quiz): Promise<QuizCreateResponse> =>
  axios.post('/quizzes', quiz).then(response => response.data);

export const fetchQuiz = (quizId: number): Promise<AnswerQuiz> =>
  axios.get(`/quizzes/${quizId}`).then(response => response.data);
