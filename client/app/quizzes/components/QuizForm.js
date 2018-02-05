import React, { Component } from 'react';
import TextField from '../../quizzical/elements/TextField';
import SubmitField from '../../quizzical/elements/SubmitField';
import Button from '../../quizzical/elements/Button';

type Props = {
  title: string,
  questions: Array,
  onTitleChanged: (string) => void,
  onSubmitted: () => void,
  onQuestionAdded: () => void,
  onQuestionTextChanged: (string, string) => void,
  onAnswerAdded: (string) => void,
  onAnswerTextChanged: (string, string) => void,
};

class QuizForm extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.onFormSubmitted = this.onFormSubmitted.bind(this);
  }

  onFormSubmitted(event) {
    this.props.onSubmitted();
    event.preventDefault();
  }

  render() {
    // TODO: Refactor to components!
    const {
      title,
      questions,
      onTitleChanged,
      onQuestionAdded,
      onQuestionTextChanged,
      onAnswerAdded,
      onAnswerTextChanged,
    } = this.props;

    return (
      <form onSubmit={this.onFormSubmitted}>
        <TextField
          label="Title"
          name="title"
          value={title}
          onChange={e => onTitleChanged(e.target.value)}
        />

        <h2 className="subtitle is-2">Questions</h2>

        {questions.map(question => (
          <div key={question.tempId}>
            <TextField
              label="Question title"
              name={`question-title-${question.tempId}`}
              value={question.text}
              onChange={e => onQuestionTextChanged(question.tempId, e.target.value)}
            />

            <h3 className="subtitle is-3">Answers</h3>

            {question.answers.map(answer => (
              <div key={answer.tempId}>
                <TextField
                  label="Answer title"
                  name={`answer-title-${answer.tempId}`}
                  value={answer.text}
                  onChange={e => onAnswerTextChanged(answer.tempId, e.target.value)}
                />
              </div>
            ))}

            <Button
              type="info"
              onClick={() => onAnswerAdded(question.tempId)}
            >
              Add an answer
            </Button>

            <hr />
          </div>
        ))}

        <Button
          type="info"
          onClick={() => onQuestionAdded()}
        >
          Add a question
        </Button>

        <SubmitField>
          Save
        </SubmitField>
      </form>
    );
  }
}

export default QuizForm;
