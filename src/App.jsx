import React, {useEffect, useState} from 'react'
import './App.scss';
import Home from './pages/home/Home';
import Trivia from './pages/trivia/Trivia';
import End from './pages/end/End';
import QR from './pages/qr/QR';
import Questions from './assets/data/questions.json';
import Logo from './assets/imgs/general/logo.png';

import { getDatabase, ref, child, push} from "firebase/database";
import app from './FirebaseConfig'

function App() {
  const [page, setPage] = useState(0);
  const [topic, setTopic] = useState("Maquinaria");
  const [questions, setQuestions] = useState({
    total: 0,
    correct: 0
  });

  useEffect(() => {
    bloquearGestos()
    if(localStorage.getItem('postKey') === null){
      const db = getDatabase(app);
      const newPostKey = push(child(ref(db), '/')).key;
      localStorage.setItem('postKey', newPostKey)
    }

  }, [])

  useEffect(() => {
    if(page === 0){
      setQuestions({total: 0,
        correct: 0
      });
    }
  }, [page])
  
  function bloquearGestos(){
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('selectstart', event => event.preventDefault());
  }
  return (
    <>
      {page === 0 && <Home goToNextPage={() => {setPage(1)}} logo={Logo}/>}
      {page === 1 && <Trivia topic={topic} intervalTime={3} goToNextPage={() => {setPage(2)}} questions={Questions} setQuestionInfo={setQuestions} questionTime={15} numberOfQuestions={3} logo={Logo}/>}
      {page === 2 && <End goToNextPage={() => {setPage(3)}} totalQuestions={questions.total} correctQuestions={questions.correct} logo={Logo}/>}
      {page === 3 && <QR goToNextPage={() => {setPage(0)}} logo={Logo}/>}
    </>
  );
}

export default App;
