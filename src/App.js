import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Question from './question/Question';
import MainPage from './mainPage/MainPage';
import girl from './images/girl.jpg';
import raccoon from './images/raccoon.png';
import { useEffect, useState } from 'react';
import Curtain from './curtain/Curtain';
function App() {
  const [curtainUp,setCurtainUp] = useState(false);
  const [questionOpen,setQuestionOpen] = useState(false);
  const [mainPageOpen,setMainPageOpen] = useState(true);
  const [question, setQuestion] = useState([{question:"1",answer:"1",img:girl},{question:"2",answer:"2",img:raccoon},{question:"3",answer:"3",img:girl}]);
  const [qID, setQID] = useState(0);//現在問題
  const [success,setSuccess] = useState(0); //正確題數
  const [alreadyAnswer, setAlreadyAnswer] = useState([]);
  const openQuestion = (open,qID) => {
    console.log("openQuestion:",qID);
    setQuestionOpen(open);
    setQID(qID);
    setMainPageOpen(!open);
  }
  const pulled = () => {
    setCurtainUp(true);
    setMainPageOpen(true);
  }
  const answerTrue = () => {
    setSuccess(success+1);
  }
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  useEffect(()=>{
    let tmpArr = question;
    shuffle(tmpArr);
    setQuestion(tmpArr);
  },[])
  useEffect(()=>{
    console.log(success);
  },[success])
  return (
    <div className="App">
      <Curtain pull={pulled}/>
      <div className={`mainPage ${mainPageOpen?"open":"close"}`}>
        <MainPage success={success} alreadyAnswer={alreadyAnswer} setNextOpen={openQuestion} question={question} curtainUp={curtainUp}/>
      </div>
      <div className={`question-container ${questionOpen?"open":"close"}`}>
        <Question 
          answerTrue={answerTrue} 
          questionOpen={questionOpen} 
          setQuestionOpen={setQuestionOpen} 
          setMainPageOpen={setMainPageOpen} 
          alreadyAnswer={alreadyAnswer}
          setAlreadyAnswer={setAlreadyAnswer}
          qID={qID} 
          question={question}/>
      </div>
    </div>
  );
}

export default App;
