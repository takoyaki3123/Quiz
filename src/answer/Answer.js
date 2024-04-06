import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AnswerButton from './AnswerButton';

// p5的選項
const Answer = (props) => {
  const [a1Class,setA1Class] = useState("");
  const [a2Class,setA2Class] = useState("");
  const [a3Class,setA3Class] = useState("");
  const [a4Class,setA4Class] = useState("");
  const handleClick = (setClass,answer) => {
    const result = props.handleClick(answer);
    if(result){
      setClass("trueAns");
    }
    else{
      setClass("wrong");
    }
  }
  useEffect(()=>{
    setA1Class("");
    setA2Class("");
    setA3Class("");
    setA4Class("");

  },[props.questionOpen])
  return(
  <div className='px-2'>
    <AnswerButton text={props.text} class={props.class} handleClick={handleClick} answerID={0} setClass={setA1Class} clickClass={a1Class}/>
    <AnswerButton text={props.text} class={props.class} handleClick={handleClick} answerID={1} setClass={setA2Class} clickClass={a2Class}/>
    <AnswerButton text={props.text} class={props.class} handleClick={handleClick} answerID={2} setClass={setA3Class} clickClass={a3Class}/>
    <AnswerButton text={props.text} class={props.class} handleClick={handleClick} answerID={3} setClass={setA4Class} clickClass={a4Class}/>
  </div>
  )
}
Answer.propTypes = {
  // string 
  text: PropTypes.string,
  class: PropTypes.string,
  answer:PropTypes.string,
  // bool
  questionOpen: PropTypes.bool,
  // func
  handleClick: PropTypes.func,
}
export default Answer;