import React, { Component } from 'react';
import { Quiz } from '../reducers/answerQuiz';
import { Link } from 'react-router-dom';
import styles from './QuizzesList.scss';
import styles1 from '../../quizzical/quizzical-shared/shared-style.css';
import Popup from 'react-popup';

type Props = {
  quiz?: Quiz,
  match: { params: { quizId: string } },
  fetchQuiz: (number) => void,
};

class Popups extends React.Component {
  render() {
    return (
      <div  className={styles1.popup}>
        <div className={styles1.popup_inner}>
        <h1>{this.props.text}</h1>
        <h1>Correct Select {this.props.score}</h1>
        <h1>Wrong Select {this.props.wrong}</h1>
        <button  onClick={this.props.closePopup}>Close</button>
        </div>
      </div>
    );
  }
}


class AnswerQuiz extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      wrong:0,
      showResults: true,
      showPopup: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  onClickHandler = () => {
    this.setState(prev => ({ showResults: !prev.showResults }));
  };

  handleChange(param, e) {
    this.onClickHandler();
    if (param.correct === true && e.target.checked) {
      this.state.count++;
    }
    if (param.correct === true && !e.target.checked) {
      this.state.count--;
    }
    if (!param.correct === true && e.target.checked) {
      this.state.wrong++;
    }
    if (!param.correct === true &&!e.target.checked) {
      this.state.wrong--;
    }

  }

  componentDidMount() {
    this.fetchQuiz();
  }

  fetchQuiz() {
    const { fetchQuiz, match } = this.props;

    fetchQuiz(parseInt(match.params.quizId, 10));
  }

 
  render() {
    const { quiz } = this.props;

    // If the request not successful:
    let questionText = 'No Questions!!';
    const choice = 'No choices for this question!!!';
    //= ==========================================

    if (this.props.quiz.questions) {
      questionText = quiz.questions.map((ques, i) =>

        (<div key={i} className={styles.quizzesListItem}>

          <h1> Question: {ques.text}</h1>

          {
      ques.choices.map((f, x) =>

        (<div key={x} className="test">
          <input
            name="choice"
            type="checkbox"
            onChange={(e) => this.handleChange(f, e)}
          />
          <label>
            {f.text}
          </label>
        </div>
))
    }
         </div>));
    }

    return (
      <div className={styles1.container}>
        <Link className="back-button" to="/">
          <i className="fa fa-angle-left  fa-3x" />
        </Link>
        <h1 className="title has-text-centered">Questions</h1>

        {questionText}

        <button className="button is-info"  onClick={this.togglePopup.bind(this)}> Show Score </button>
    
        <div>
        {this.state.showPopup ? 
          <Popups
            // text={`Total:${this.state.count}`}
            text="Final Score"
            score={this.state.count}
            wrong={this.state.wrong}
            closePopup={this.togglePopup.bind(this)}

          />
          : null
        }
      </div>
     

      </div>
    );
  }
}
AnswerQuiz.defaultProps = {
  quiz: null,
};

export default AnswerQuiz;
