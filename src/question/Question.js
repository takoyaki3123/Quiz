import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import './Question.css';
import Answer from "../answer/Answer";


// p5
const Question = (props) => {
  const handleAnswer = (answer) => {
    console.log("qid answer",props.question[props.qID].answer);
    console.log("answer",answer);
    if(answer == props.question[props.qID].answer){
      props.answerTrue();
      props.setAlreadyAnswer([...props.alreadyAnswer,props.qID]);
      setTimeout(closeQuestion,1000);
      // props.setQuestionOpen(false);
      return true;
    }
    return false;
  }
  const closeQuestion = () => {
    props.setQuestionOpen(false);
    props.setMainPageOpen(true);
  }
  useEffect(()=>{

  },[])
  return(
    <div className="questionContainer">
      <div className="question">
        {/* 上面敘述問題 */}
        {/* <div className="questionDesc">
          <span>{props.question}</span>
        </div> */}
        {/* 下面提示 */}
        <div className="hint">
          {/* 上面圖片 */}
          <div className="hint-img d-flex justify-content-center mx-auto mb-5">
            <img src={props.question[props.qID].img} className="image" alt="hint"/>
          </div>
          <hr className="questionHr" size="6" color="#CFBDA6"/>
          {/* 下面解說 */}
          <div className="hint-desc p-4"><span className="hint-word">{props.question[props.qID].question}</span></div>
        </div>
      </div>
      {/* 選項 */}
      <div className="mt-5">
        <Answer questionOpen={props.questionOpen} answer={props.question[props.qID].answer} text={"testing"} class={"answerButton"} handleClick={handleAnswer}/>
      </div>
    </div>
  )
}
Question.propTypes = {
  answerTrue: PropTypes.func,
  setQuestionOpen: PropTypes.func,
  setMainPageOpen: PropTypes.func,
  setAlreadyAnswer: PropTypes.func,
  questionOpen: PropTypes.bool,
  alreadyAnswer: PropTypes.array,
  question: PropTypes.array,
  qID: PropTypes.number,
}
export default Question;