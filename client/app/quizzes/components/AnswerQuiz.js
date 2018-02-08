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
    this.state = {count: 0};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(param) {
    if (param.correct===true)
    this.state.count++;
      console.log(this.state.count)
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
    // Check console or Quiz type for structure
    console.log(quiz);
    
    let questionText='No Questions!!'
    let choice='No choices for this question!!!'
    
    if (this.props.quiz.questions) {
      questionText= quiz.questions.map((ques,i) =>
      
      ques.choices.map((f)=>

      <div>
          <li>{ques.text}</li>

          <label>
             
            Correct :
              <input
                name="choice"
                type="checkbox"
                // checked={false}
                // checked={f.correct}
                // onChange={() => console.log(f.correct)}
                onChange={() => this.handleChange(f)}
              />
            </label>
            <p>{f.text}</p>
       </div>

      )
    );  
   
}

    return (
      <div>
          <span >Quiz {quiz.id} </span>
          {quiz.title} 
          {questionText}
          toBe Managed as intended:) 
          <br/>
          <button onClick={()=>console.log(this.state.count)}>Result</button>
          {/* <button onClick={()=><div>{console.log(this.state.count)}Result </button> */}

          <Link to="/">Home</Link>
      </div> 
    );  
  
}
}
AnswerQuiz.defaultProps = {
  quiz: null,
};

export default AnswerQuiz;
