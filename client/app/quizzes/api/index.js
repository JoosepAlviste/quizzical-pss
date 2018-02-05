import axios from 'axios';

type AnswerCreate = {
  text: string,
  correct: boolean,
};

type QuestionCreate = {
  tempId: string,
  text: string,
  answers: Array<AnswerCreate>,
};

type QuizCreateRequest = {
  title: string,
  questions: Array<QuestionCreate>,
};

type QuizCreateResponse = {
  id: number,
};

export const fetchQuizzes = () =>
  axios.get('/quizzes').then((response) => response.data);

export const storeQuiz = (quiz: QuizCreateRequest): Promise<QuizCreateResponse> =>
  axios.post('/quizzes', quiz).then(response => response.data);
