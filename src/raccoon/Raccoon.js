import React from "react";
import PropTypes from 'prop-types';
import raccoon from '../images/raccoon.png';
import pipe from '../images/pipe.png';
import smoke from '../images/smoke.png';
import './Raccoon.css';
const Raccoon = (props) => {
  return(
    <div className="raccoon-container">
      <div className="raccoon">
        <img src={raccoon}/>
      </div>
      <div className="pipe">
        <img src={pipe}/>
      </div>
      <div className="smoke">
        <img src={smoke}/>
      </div>
      <div className="raccoon-text-container">
        <span className="raccoon-text">{props.raccoonText}</span>

      </div>
    </div>
  )
}
Raccoon.propTypes = {
  raccoonText: PropTypes.string
}
export default Raccoon;