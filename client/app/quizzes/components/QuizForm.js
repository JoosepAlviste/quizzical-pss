import React, { Component } from 'react';
import TextField from '../../quizzical/elements/TextField';
import SubmitField from '../../quizzical/elements/SubmitField';
import Button from '../../quizzical/elements/Button';
import styles from './QuizForm.scss';

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
      onChoiceAdded,
      onChoiceTextChanged,
      onChoiceCorrectToggled,
    } = this.props;

const choicesStyle={color:'black', background:'cadetblue' ,
marginBottom:'30px', height:'50px',paddingTop:'2%'
}

    return (
      <form onSubmit={this.onFormSubmitted}>
        <TextField 
          label="QUIZ TITLE"
          name="title"
          value={title}
          onChange={e => onTitleChanged(e.target.value)}
        />

        {/* <h4 style={{color:'red', background:'cadetblue'}}>Questions</h4> */}

        {questions.map(question => (
          <div key={question.tempId} style={{lineHeight:'1'}}> 
            <TextField
              label="Question text"
              name={`question-text-${question.tempId}`}
              value={question.text}
              onChange={e => onQuestionTextChanged(question.tempId, e.target.value)}
            />

            <h3 style={choicesStyle}>Choices</h3>

            {question.choices.map(choice => (
              <div key={choice.tempId} className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input"
                    name={`choice-title-${choice.tempId}`}
                    type="text"
                    value={choice.text}
                    onChange={e => onChoiceTextChanged(choice.tempId, e.target.value)}
                  />
                </p>
                <p className="control">
                  <label
                    htmlFor={`choice-correct-${choice.tempId}`}
                    className="checkbox"
                  >
                    <input
                      name={`choice-correct-${choice.tempId}`}
                      id={`choice-correct-${choice.tempId}`}
                      type="checkbox"
                      checked={choice.correct}
                      onChange={() => onChoiceCorrectToggled(choice.tempId, question.tempId)}
                    />
                    &nbsp;Correct
                  </label>
                </p>
              </div>
            ))}

            <Button type="info" onClick={() => onChoiceAdded(question.tempId)}>
              Add a Choice
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

        <hr />

        <SubmitField>
          Save
        </SubmitField>
      </form>
    );
  }
}

export default QuizForm;
