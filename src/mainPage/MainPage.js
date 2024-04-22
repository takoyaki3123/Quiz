import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './MainPage.css';
import Clue from "../clue/Clue";
import Raccoon from "../raccoon/Raccoon";
import Card from '../card/Card';
import WantedWarrant from "../wantedWarrant/WantedWarrant";
// p3
const MainPage = (props) => {
  const [raccoonText,setRaccoonText] = useState("");
  const [textArr, setTextArr] = useState(["恩 我喜歡你的眼光","不管你選擇哪張卡片，我都相信你的判斷","哦，這張卡片啊","卡片的選擇就像人生的抉擇，不容輕忽","別猶豫，選擇一張卡片吧","這張卡片將成為我們破案的關鍵"]);
  
  function shuffle() {
    let array = [...textArr];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setTextArr(array);
  }
  useEffect(()=>{
    setRaccoonText(textArr[0]);
  },[textArr])
  return(
    <div className="mainPageContainer">
      {/* top */}
      <div className="completeHint">
        <Clue success={props.success}/>
      </div>
      <div className={`mainPage-wanted ${props.success===3?"d-block":"d-none"}`}>
        <WantedWarrant isShow={props.success===3}/>
      </div>
      {/* mid */}
      <div className={`raccoon  ${props.success!==3?"d-block":"d-none"}`}>
        <Raccoon raccoonText={raccoonText}/>
      </div>
      {/* buttom */}
      <div className={`cardContainer  ${props.success!==3?"d-block":"d-none"}`}>
        <Card raccoonTextChoose={()=>{shuffle()}} success={props.success} alreadyAnswer={props.alreadyAnswer} setNextOpen={props.setNextOpen} question={props.question} curtainUp={props.curtainUp}/>
        <span className="mt-3 card-hint d-flex justify-content-center">請選擇一張線索</span>
      </div>
    </div>
  );
}
MainPage.propTypes = {
  curtainUp: PropTypes.bool,
  setOpen: PropTypes.func,
  setNextOpen: PropTypes.func,
  question:PropTypes.array,
  alreadyAnswer: PropTypes.array,
  success:PropTypes.number,
}
export default MainPage;