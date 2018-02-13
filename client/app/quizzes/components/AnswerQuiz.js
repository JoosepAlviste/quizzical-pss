import React, { Component } from 'react';
import { Quiz } from '../reducers/answerQuiz';
import { Link } from 'react-router-dom';

type Props = {
  quiz?: Quiz,
  match: { params: { quizId: string } },
  fetchQuiz: (number) => void,
};

class AnswerQuiz extends Component<Props> {


  props: Props;
  constructor(props) {
    super(props);
    this.state = {count: 0,
                  showResults: true
                };
    this.handleChange = this.handleChange.bind(this);
  }
  
  onClickHandler = ()=>{
    this.setState(prev => ({showResults: !prev.showResults}));
  };
  
handleChange(param,e) {
  this.onClickHandler();
  if (param.correct===true&&e.target.checked){

    this.state.count++;
  }
  if (param.correct===true&&!e.target.checked){
    
    this.state.count--;
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

    //If the request not successful: 
    let questionText='No Questions!!'
    let choice='No choices for this question!!!'
    //===========================================
    
    if (this.props.quiz.questions) {
      questionText= quiz.questions.map((ques,i) =>

    <div key={i}>

      <h1> Question: {ques.text}</h1>

    {
      ques.choices.map((f,x)=>

      <div key={x}>
          <label>             
            Choice text:  {f.text}
              <input
                name="choice"
                type="checkbox"
                onChange={(e) => this.handleChange(f,e)}
              />
            </label>
       </div>

      )
    }
    </div>

    );  
}

    return (
      <div> 
          <span >Quiz {quiz.id} </span>
          {questionText}
          <h1> Results: {this.state.count}</h1>
          <Link to="/">Home</Link>
      </div> 
    );  
  
}
}
AnswerQuiz.defaultProps = {
  quiz: null,
};

export default AnswerQuiz;
