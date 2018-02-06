import axios from 'axios';
import { Quiz } from '../reducers/quizForm';

type QuizListResponse = Array<{
  id: string,
  title: string,
}>;

type QuizCreateResponse = {
  id: number,
};

export const fetchQuizzes = (): Promise<QuizListResponse> =>
  axios.get('/quizzes').then((response) => response.data);

export const storeQuiz = (quiz: Quiz): Promise<QuizCreateResponse> =>
  axios.post('/quizzes', quiz).then(response => response.data);
