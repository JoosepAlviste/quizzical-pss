export type QuizType = {
  id: number,
  title: string,
};

export type QuizzesListType = Array<QuizType>;

export type QuizzesActionType = {
  type: string,
};

const testInitialState = [
  {
    id: 0,
    title: 'Test Quiz',
  },
  {
    id: 1,
    title: 'Test Quiz 2',
  },
  {
    id: 2,
    title: 'Test Quiz 3',
  },
];

const quizzes = (
  state: QuizzesListType = testInitialState,
  action: QuizzesActionType
): QuizzesListType => {
  switch (action.type) {
    default:
      return state;
  }
};

export default quizzes;
