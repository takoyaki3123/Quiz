import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './Clue.css'
import Clue0 from '../../images/clue0.png';
import Clue1 from '../../images/clue1.png';
import Clue2 from '../../images/clue2.png';
import Clue3 from '../../images/clue3.png';

// p3上面的圖
const Clue = (props) => {
  const [nowClue, setNowClue] = useState(Clue0);
  useEffect(()=>{
    switch (props.success){
      case 0:
        setNowClue(Clue0);
        break;
      case 1:
        setNowClue(Clue1);
        break;
      case 2:
        setNowClue(Clue2);
        break;
      case 3:
        setNowClue(Clue3);
        break;
      default:
        break;
    }
  },[props.success])
  return(
    <div className="clue">
      <div className="board mt-3 mx-2">
        <div className="d-flex justify-content-center h-100">
          <img src={nowClue}/>
          {/* <span className="board-content align-self-center">
            會根據破解的數量改變
          </span> */}
        </div>
      </div>
      <hr className="under-board my-1" size="20" color="#695747"/>
    </div>
  )
}
Clue.propTypes = {
  success: PropTypes.number,
}
export default Clue;