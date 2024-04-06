import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import './Card.css';
import cardBackground from '../images/cardBackground.png';
const CardFocus = (props) => {
  const handleBack = () => {
    props.setAnimationClass("focusOut");
  }
  const handleNext = () => {
    handleBack();
    props.setNextOpen(true,props.selectId);
  }
  return(
    <div className={`cardFocus ${props.animationClass}`}>
      <div className="cardFocus-container">
        <div className="backBtn">
          <button className="btn btn-primary" onClick={()=>handleBack()}>O</button>
        </div>
        <div className={`focus px-4 d-flex align-items-center ${props.animationClass}`} style={{ backgroundImage:`url(${cardBackground})` ,backgroundSize:"cover"}}>
          <img src={props.imgSrc} className="cardimage" alt="hint"/>
        </div>
        <div className="focus-question">
          <span className="focus-text">在這神秘的工廠內 過去似乎隱藏著不為人知的祕密實驗...</span>
        </div>
        {!props.alreadyAnswer.includes(props.selectId)?
        <div className="focus-next">
          <button className="focus-btn" onClick={() => handleNext()}>確認</button>
        </div>
        :
        <Fragment/>
        }
      </div>
    </div>
  )
}
CardFocus.propTypes = {
  imgSrc: PropTypes.string,
  animationClass: PropTypes.string,
  selectId:PropTypes.number,
  alreadyAnswer: PropTypes.array,
  //function
  setAnimationClass: PropTypes.func,
  setNextOpen: PropTypes.func,
}
export default CardFocus;