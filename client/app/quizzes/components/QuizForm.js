import React, { Component } from 'react';
import Button from '../../quizzical/elements/Button';
import TextArea from '../../quizzical/elements/TextArea';
import answerQuizStyles from './AnswerQuizQuestion.scss';
import styles from './QuizForm.scss';
import Radio from '../../quizzical/elements/Radio';

type Props = {
  title: string,
  questions: Array,
  onTitleChanged: (string) => void,
  onSubmitted: () => void,
  onQuestionAdded: () => void,
  onQuestionTextChanged: (string, string) => void,
  onChoiceAdded: (string) => void,
  onChoiceTextChanged: (string, string) => void,
  onChoiceCorrectToggled: (string) => void,
};

class QuizForm extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.onFormSubmitted = this.onFormSubmitted.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  componentDidMount() {
    if (!this.props.questions.length) {
      this.addQuestion();
    }
  }

  onFormSubmitted(event) {
    this.props.onSubmitted();
    event.preventDefault();
  }

  addQuestion() {
    this.props.onQuestionAdded().then(() => {
      const newQuestion = this.props.questions[this.props.questions.length - 1];

      this.props.onChoiceAdded(newQuestion.tempId);
      this.props.onChoiceAdded(newQuestion.tempId);
    });
  }

  render() {
    // TODO: Refactor to components!
    const {
      title,
      questions,
      onTitleChanged,
      onQuestionTextChanged,
      onChoiceAdded,
      onChoiceTextChanged,
      onChoiceCorrectToggled,
    } = this.props;

    return (
      <form onSubmit={this.onFormSubmitted}>
        <div className={`is-size-3 ${styles.quizTitle}`}>
          <TextArea
            value={title}
            name="title"
            placeholder="Title of the quiz"
            onChange={onTitleChanged}
          />
        </div>

        {questions.map(question => (
          <div
            key={question.tempId}
            className={`card ${answerQuizStyles.question}`}
          >
            <div className={`is-size-4 ${styles.questionElement}`}>
              <TextArea
                value={question.text}
                name={`question-text-${question.tempId}`}
                placeholder="Question text"
                onChange={val => onQuestionTextChanged(question.tempId, val)}
              />
            </div>

            <div>
              {question.choices.map(choice => (
                <Radio
                  key={choice.tempId}
                  id={`choice-${choice.tempId}`}
                  name={`question-${question.tempId}`}
                  value={choice.tempId}
                  onChange={() => onChoiceCorrectToggled(choice.tempId, question.tempId)}
                  className={styles.questionElement}
                >
                  <TextArea
                    value={choice.text}
                    name={`choice-text-${choice.tempId}`}
                    placeholder="Choice text"
                    onChange={val => onChoiceTextChanged(choice.tempId, val)}
                  />
                </Radio>
              ))}

              <div>
                <a
                  className="is-primary"
                  onClick={() => onChoiceAdded(question.tempId)}
                >
                  + add a choice
                </a>
              </div>

            </div>
          </div>
        ))}

        <svg
          className="add-card"
          onClick={this.addQuestion}
        >
          <g className="add-card__border" transform="translate(1, 1)" strokeWidth="2" strokeDasharray="15" fill="none" >
            <rect x="0" y="0" width="calc(100% - 4px)" height="140" rx="15" />
          </g>

          <text className="add-card__text">
            <tspan x="50%" y="76">+ add a question</tspan>
          </text>
        </svg>

        <div className="has-text-centered">
          <Button
            buttonType="submit"
            type="primary"
            className="button--main-action"
          >
            Create
          </Button>
        </div>

      </form>
    );
  }
}

export default QuizForm;
