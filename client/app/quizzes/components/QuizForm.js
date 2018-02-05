import React, { Component } from 'react';
import TextField from '../../quizzical/elements/TextField';
import SubmitField from '../../quizzical/elements/SubmitField';

type Props = {
  title: string,
  questions: Array,
  onTitleChanged: (string) => void,
  onSubmitted: () => void,
  onQuestionAdded: () => void,
  onQuestionTextChanged: (string, string) => void,
};

class QuizForm extends Component<Props> {
  props: Props;

  render() {
    const {
      title,
      questions,
      onTitleChanged,
      onSubmitted,
      onQuestionAdded,
      onQuestionTextChanged,
    } = this.props;

    return (
      <form onSubmit={onSubmitted}>
        <TextField
          label="Title"
          name="title"
          value={title}
          onChange={e => onTitleChanged(e.target.value)}
        />

        <h2 className="subtitle">Questions</h2>

        {questions.map(question => (
          <div key={question.tempId}>
            <TextField
              label="Question title"
              name={`question-title-${question.tempId}`}
              value={question.text}
              onChange={e => onQuestionTextChanged(question.tempId, e.target.value)}
            />
          </div>
        ))}

        <button type="button" onClick={() => onQuestionAdded()}>
          Add question
        </button>

        <SubmitField>
          Save
        </SubmitField>
      </form>
    );
  }
}

export default QuizForm;
