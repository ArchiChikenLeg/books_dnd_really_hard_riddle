import { useState } from 'react'
import './App.css'
import MainImg from './MainImg.jsx'
import SearchForm from './SearchForm.jsx'
import myData from './data.json';

function App() {

  const [MainImgIsActive, setMainImgIsActive] = useState(false);
  const [bgImg, setBgImg] = useState('https://mariart.kiev.ua/image/catalog/188157629dfa/1fab6f285c6df081.jpg');
  const [prevWrongInd, setPrevWrongInd] = useState(3);
  const [prevRightInd, setPrevRightInd] = useState(5);
  const answersArray = myData.answersImg;
  const wrongAnswerImgs = myData.wrongAnswerImg;
  const setMainImgActive = ()=>{
    setMainImgIsActive(true);
  }

  const setMainImgUnActive = ()=>{
    setMainImgIsActive(false);
  }

  const handleAnswer = (answer) =>{
    console.log(answer);

    answersArray.map((item)=>{
      if(item.answer == answer.toLowerCase()){
      const rightAnswerImgs = item.img;
      let randomRightImg = rightAnswerImgs[0];
      if (rightAnswerImgs.length == 1){
        randomRightImg = rightAnswerImgs[0];
      } 
      else {
        let randomRightIndex;
        do {
          randomRightIndex = Math.floor(Math.random() * rightAnswerImgs.length);
        } while (randomRightIndex === prevRightInd);
        setPrevRightInd(randomRightIndex);

        randomRightImg = rightAnswerImgs[randomRightIndex];
        console.log(randomRightIndex);
      }
        setBgImg(randomRightImg);
        console.log("correct answer");
      }
    });

    if(!answersArray.some(item => item.answer == answer.toLowerCase())){
      let randomWrongIndex;
      do {
        randomWrongIndex = Math.floor(Math.random() * wrongAnswerImgs.length);
      } while (randomWrongIndex === prevWrongInd);
      setPrevWrongInd(randomWrongIndex);

      const randomWrongImg = wrongAnswerImgs[randomWrongIndex];

      console.log(randomWrongIndex);
      console.log("wrong answer");

      setBgImg(randomWrongImg);
    }

    setMainImgActive();
  }

  return (
    <>
      <div className="riddle-img"></div>
      {MainImgIsActive && <MainImg setUnActive={setMainImgUnActive} bgImg={bgImg} className = "main-img"/>}
      <SearchForm handleAnswer={handleAnswer} />
    </>
  )
}

export default App
