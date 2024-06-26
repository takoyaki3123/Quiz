import React, { useState } from "react";
import PropTypes from 'prop-types';
import './WantedWarrant.css';
import wanted from '../../images/WantedWarrant.png';
import passed from '../../images/passed.png';
const WantedWarrant = (props) => {
  const [pass,setPass] = useState(false);
  const getPass = () => {
    setPass(true);
  }
  return(
    <div className={`WantedWarrant-container ${props.isShow?"d-block":"d-none"}`}>
      <div className="WantedWarrant d-flex justify-content-center mt-4">
        <img src={wanted} className="wanted" onClick={()=>getPass()}/>
      </div>
      <div className={`passed-container d-flex justify-content-center ${pass?"":"d-none"}`}>
        <img src={passed} className={`passed ${pass?"passedIn":""}`}/>
      </div>
      <div className={`d-flex justify-content-center ${pass?"compeleteIn":"d-none"}`}>
        <span className="eventCompelete">完成活動 請至櫃台領取抽獎券</span>
      </div>
    </div>
  )
}
WantedWarrant.propTypes = {
  isShow: PropTypes.bool,
}
export default WantedWarrant;