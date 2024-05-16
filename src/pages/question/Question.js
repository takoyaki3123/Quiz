import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './Question.css';
import Answer from "../../component/answer/Answer";
import sideRaccoon from '../../images/sideRaccoon.png';
import bottomRaccoon from '../../images/bottomRaccoon.png';
import footprint from '../../images/footprint.png';
import magnifier from '../../images/magnifier.png';

// p5
const Question = (props) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const handleAnswer = (answer) => {
    if(answer == props.question[props.qID].answer){
      if(!isAnswer){
        setIsAnswer(true);
        props.answerTrue();
        props.setAlreadyAnswer([...props.alreadyAnswer,props.qID]);
        setTimeout(closeQuestion,1000);
        // props.setQuestionOpen(false);
      }
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
          <div className="hint-img-container d-flex flex-row justify-content-center">
            <img src={sideRaccoon} className="sideRaccoon"/>
            <div className="hint-img d-flex justify-content-center">
              <img src={props.question[props.qID].qImg} className="image" alt="hint"/>
            </div>
            <img src={magnifier} className="magnifier"/>
          </div>
          
          <img src={footprint} className="footprint"/>
          <hr className="questionHr" size="6" color="#CFBDA6"/>
          <hr className="questionHr mt-1" size="4" color="#CFBDA6"/>
          {/* 下面解說 */}
          <div className="hint-desc p-4">      
            <p className="hint-word">{props.question[props.qID].question}</p>
            <img src={bottomRaccoon} className="bottomRaccoon"/>
          </div>
        </div>
      </div>
      {/* 選項 */}
      <div className="mt-1 answer-container d-flex align-items-center flex-row">
        <Answer questionOpen={props.questionOpen} answer={props.question[props.qID].answer} option={props.question[props.qID].option} class={"answerButton"} handleClick={handleAnswer}/>
      </div>
    </div>
  )
}
Question.propTypes = {
  // func
  answerTrue: PropTypes.func,
  setQuestionOpen: PropTypes.func,
  setMainPageOpen: PropTypes.func,
  setAlreadyAnswer: PropTypes.func,
  // bool
  questionOpen: PropTypes.bool,
  // array
  alreadyAnswer: PropTypes.array,
  question: PropTypes.array,
  // number
  qID: PropTypes.number,
}
export default Question;