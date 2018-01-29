import axios from 'axios';

export const fetchQuizzes = () =>
  axios.get('/quizzes').then((response) => response.data);
