import React from 'react';
import PropTypes from 'prop-types';
import './Answer.css';

// p5的選項
const AnswerButton = (props) => {
  const handleAnswer = (answer) => {
    props.handleClick(props.setClass,answer);
  }
  return(
  <div className='px-2'>
    <button className={`w-100 btn my-2 py-2 ${props.class} ${props.clickClass}`} onClick={()=>{handleAnswer(props.answerID)}}>{props.text}</button>
  </div>
  )
}
AnswerButton.propTypes = {
  // string 
  text: PropTypes.string,
  class: PropTypes.string,
  clickClass: PropTypes.string,
  // number
  answerID: PropTypes.number,
  // func
  handleClick: PropTypes.func,
  setClass: PropTypes.func,
}
export default AnswerButton;