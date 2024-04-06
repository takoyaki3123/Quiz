import React, { useState } from "react";
import PropTypes from "prop-types";
import './Card.css';

import girl from '../images/girl.jpg';
import raccoon from '../images/raccoon.png';
import CardFocus from "./CardFocus";
import WantedWarrant from "../wantedWarrant/WantedWarrant";
import cardBackground from '../images/cardBackground.png';
// p3下面的卡片
const Card = (props) => {
  const [animationClass,setAnimation] = useState("focusOut");
  const [selectCard, setSelectCard] = useState("");
  const [selectId,setSelectId] = useState(-1);
  const mouseDown = (e) => {
    e.target.className = "image pressing";
  }
  const mouseUp = (e) => {
    e.target.className = "image down";
  }
  const cardClick = (img,id) => {
    setAnimation(animationClass==="focusOut"?"focusIn":"focusOut");
    setSelectCard(img);
    setSelectId(id);
  }
  return(
    <div className="cards flex-row pt-3  d-flex ">
      <div className="col-4 card px-2">
        <div className={`card-content px-3 d-flex align-items-center ${props.curtainUp?"cardDisplay":""}`} style={{ backgroundImage:`url(${cardBackground})` ,backgroundSize:"cover"}}>
          <img src={props.question[0].img} className="cardimage" alt="hint" onClick={() => {cardClick(props.question[0].img,0)}} onTouchStart={(e) => mouseDown(e)} onTouchCancel={(e) => mouseUp(e)} onTouchEnd={(e) => mouseUp(e)} onMouseUp={(e) => mouseUp(e)}/>
        </div>
      </div>
      <div className="col-4 card px-2">
        <div className={`card-content px-3 d-flex align-items-center ${props.curtainUp?"cardDisplay":""}`} style={{ backgroundImage:`url(${cardBackground})` ,backgroundSize:"cover"}}>
          <img src={props.question[1].img} className="cardimage" alt="hint" onClick={() => {cardClick(props.question[1].img,1)}} onTouchStart={(e) => mouseDown(e)} onTouchCancel={(e) => mouseUp(e)} onTouchEnd={(e) => mouseUp(e)} onMouseUp={(e) => mouseUp(e)}/>
        </div>
      </div>
      <div className="col-4 card px-2">
        <div className={`card-content px-3 d-flex align-items-center ${props.curtainUp?"cardDisplay":""}`} style={{ backgroundImage:`url(${cardBackground})` ,backgroundSize:"cover"}}>
          <img src={props.question[2].img} className="cardimage" alt="hint" onClick={() => {cardClick(props.question[2].img,2)}} onTouchStart={(e) => mouseDown(e)} onTouchCancel={(e) => mouseUp(e)} onTouchEnd={(e) => mouseUp(e)} onMouseUp={(e) => mouseUp(e)}/>
        </div>
      </div>
      <CardFocus alreadyAnswer={props.alreadyAnswer} selectId={selectId} imgSrc={selectCard} setNextOpen={props.setNextOpen} animationClass={animationClass} setAnimationClass={setAnimation}/>
      <WantedWarrant isShow={props.success===3}/>
    </div>
  )
}
Card.propTypes = {
  curtainUp:PropTypes.bool,
  setNextOpen:PropTypes.func,
  question:PropTypes.array,
  alreadyAnswer: PropTypes.array,
  success:PropTypes.number,
}
export default Card;