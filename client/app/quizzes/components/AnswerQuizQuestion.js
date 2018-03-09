// @flow
import * as React from 'react';
import Radio from '../../quizzical/elements/Radio';
import { Question } from '../reducers/answerQuiz';
import style from './AnswerQuizQuestion.scss';

type Props = {
  question: Question,
  onChoiceChanged: (number, number) => null,
};

const AnswerQuizQuestion = (props: Props) => {
  const { question, onChoiceChanged } = props;

  return (
    <div className={`card ${style.question}`}>
      <h2 className="subtitle">{question.text}</h2>

      {question.choices.map(choice => (
        <Radio
          key={choice.id}
          id={`choice-${choice.id}`}
          name={`question-${question.id}`}
          value={choice.id}
          onChange={() => onChoiceChanged(question.id, choice.id)}
          className={style.choiceControl}
        >
          {choice.text}
        </Radio>
      ))}
    </div>
  );
};

export default AnswerQuizQuestion;
