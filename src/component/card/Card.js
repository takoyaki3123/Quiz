import React, { useState } from "react";
import PropTypes from "prop-types";
import './Card.css';

import CardFocus from "./CardFocus";
import cardBackground from '../../images/cardBackground.png';
// p3下面的卡片
const Card = (props) => {
  const [animationClass,setAnimation] = useState("focusOut");
  const [selectCard, setSelectCard] = useState("");
  const [selectId,setSelectId] = useState(-1);
  const mouseDown = (e) => {
    e.target.className = "cardimage mt-2 pressing";
  }
  const mouseUp = (e) => {
    e.target.className = "cardimage mt-2 down";
  }
  const cardClick = (img,id) => {
    setAnimation(animationClass==="focusOut"?"focusIn":"focusOut");
    setSelectCard(img);
    setSelectId(id);
    props.raccoonTextChoose();
  }
  return(
    <div className="cards flex-row pt-3  d-flex ">
      <div className={` ${props.success===0?"col-4":props.success===1?"col-6 px-4":"col-12 px-5"} card pb-1 ${props.alreadyAnswer.includes(0)?"d-none":""}`}>
        <div className={`  ${props.success===0?"ms-1":""} card-content px-3 d-flex align-items-center mx-auto ${props.curtainUp?"cardDisplay":""}`} style={{ backgroundImage:`url(${cardBackground})` ,backgroundSize:"cover"}}>
          <img src={props.question[0].img} className="cardimage mt-2" alt="hint" onClick={() => {cardClick(props.question[0].img,0)}} onTouchStart={(e) => mouseDown(e)} onTouchCancel={(e) => mouseUp(e)} onTouchEnd={(e) => mouseUp(e)} onMouseUp={(e) => mouseUp(e)}/>
        </div>
      </div>
      <div className={` ${props.success===0?"col-4":props.success===1?"col-6 px-4":"col-12 px-5"} card pb-1 ${props.alreadyAnswer.includes(1)?"d-none":""}`}>
        <div className={`card-content px-3 d-flex align-items-center mx-auto ${props.curtainUp?"cardDisplay":""}`} style={{ backgroundImage:`url(${cardBackground})` ,backgroundSize:"cover"}}>
          <img src={props.question[1].img} className="cardimage mt-2" alt="hint" onClick={() => {cardClick(props.question[1].img,1)}} onTouchStart={(e) => mouseDown(e)} onTouchCancel={(e) => mouseUp(e)} onTouchEnd={(e) => mouseUp(e)} onMouseUp={(e) => mouseUp(e)}/>
        </div>
      </div>
      <div className={`${props.success===0?"col-4":props.success===1?"col-6 px-4":"col-12 px-5"} card pb-1 ${props.alreadyAnswer.includes(2)?"d-none":""}`}>
        <div className={`card-content px-3 d-flex align-items-center mx-auto ${props.curtainUp?"cardDisplay":""}`} style={{ backgroundImage:`url(${cardBackground})` ,backgroundSize:"cover"}}>
          <img src={props.question[2].img} className="cardimage mt-2" alt="hint" onClick={() => {cardClick(props.question[2].img,2)}} onTouchStart={(e) => mouseDown(e)} onTouchCancel={(e) => mouseUp(e)} onTouchEnd={(e) => mouseUp(e)} onMouseUp={(e) => mouseUp(e)}/>
        </div>
      </div>
      <CardFocus alreadyAnswer={props.alreadyAnswer} selectId={selectId} imgSrc={selectCard} setNextOpen={props.setNextOpen} animationClass={animationClass} setAnimationClass={setAnimation}/>

    </div>
  )
}
Card.propTypes = {
  // bool
  curtainUp:PropTypes.bool,
  // func
  setNextOpen:PropTypes.func,
  raccoonTextChoose: PropTypes.func,
  //array
  question:PropTypes.array,
  alreadyAnswer: PropTypes.array,
  //number
  success:PropTypes.number,
}
export default Card;