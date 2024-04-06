import React from "react";
import PropTypes from 'prop-types';
import './MainPage.css';
import Clue from "../clue/Clue";
import Raccoon from "../raccoon/Raccoon";
import Card from '../card/Card';
// p3
const MainPage = (props) => {
  return(
    <div className="mainPageContainer">
      {/* top */}
      <div className="completeHint">
        <Clue success={props.success}/>
      </div>
      {/* mid */}
      <div className="raccoon">
        <Raccoon/>
      </div>
      {/* buttom */}
      <div className="cardContainer">
        <Card success={props.success} alreadyAnswer={props.alreadyAnswer} setNextOpen={props.setNextOpen} question={props.question} curtainUp={props.curtainUp}/>
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