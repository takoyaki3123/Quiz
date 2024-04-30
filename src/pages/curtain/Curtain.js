import React, { useState } from 'react';
import './Curtain.css';
import curtainImg from '../../images/curtainImg.png';
import rope from '../../images/rope.png';
import PropTypes from 'prop-types';
// p2的畫面
const Curtain = (props) => {
  const [pulled,setPulled] = useState(false);
  const pullRope = () => {
    setPulled(true);
    props.pull();
  }
  return(
    
    <div className={`curtain-container ${pulled?"pull":""}`}>
      <div className={`curtain`} style={{ backgroundImage:`url(${curtainImg})`,backgroundSize:"100% 101%" }}>
        <div className={`rope ${pulled?"pull":""}`} onClick={()=>pullRope()}  style={{ backgroundImage:`url(${rope})`,backgroundSize:"cover" }}></div>
        <div className='title'></div>
      </div>
    </div>
  )
}
Curtain.propTypes = {
  pull: PropTypes.func
}
export default Curtain;