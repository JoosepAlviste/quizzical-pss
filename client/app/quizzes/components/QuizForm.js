import React, { Component } from 'react';
import Button from '../../quizzical/elements/Button';

type Props = {
  title: string,
  onTitleChanged: (string) => void,
  onSubmitted: () => void,
};

class QuizForm extends Component<Props> {
  props: Props;

  render() {
    const {
      title,
      onTitleChanged,
      onSubmitted,
    } = this.props;

    return (
      <form onSubmit={() => onSubmitted()}>
        <div className="field">
          <label className="label" htmlFor="title">
            Title
            <div className="control">
              <input
                className="input"
                id="title"
                type="text"
                value={title}
                onChange={e => onTitleChanged(e.target.value)}
              />
            </div>
          </label>
        </div>

        <div className="field">
          <div className="control">
            <Button type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default QuizForm;
