import { useState } from 'react'
import './App.css'
import MainImg from './MainImg.jsx'
import SearchForm from './SearchForm.jsx'
import myData from './data.json';

function App() {

  const [MainImgIsActive, setMainImgIsActive] = useState(false);
  const [bgImg, setBgImg] = useState('https://mariart.kiev.ua/image/catalog/188157629dfa/1fab6f285c6df081.jpg')
  const answersArray = myData.answersImg;
  const setMainImgActive = ()=>{
    setMainImgIsActive(true);
  }

  const setMainImgUnActive = ()=>{
    setMainImgIsActive(false);
  }

  const handleAnswer = (answer) =>{
    console.log(answer);
    answersArray.map((item)=>{
      if(item.answer === answer.toLowerCase()){
        setBgImg(item.img);
        console.log(item.img);
        setMainImgActive();
      }
    });
    //setMainImgActive();
  }

  return (
    <>
      {MainImgIsActive && <MainImg setUnActive={setMainImgUnActive} bgImg={bgImg}/>}
      <SearchForm handleAnswer={handleAnswer} />
    </>
  )
}

export default App
