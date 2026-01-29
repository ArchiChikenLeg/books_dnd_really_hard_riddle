import { useState } from 'react'
import './App.css'

function App() {

  const [MainImgIsActive, setMainImgIsActive] = useState(true);

  const setMainImgActive = ()=>{
    setMainImgIsActive(true);
  }

  const setMainImgUnActive = ()=>{
    setMainImgIsActive(false);
  }
  return (
    <>
      {MainImgIsActive && <MainImg setUnActive={setMainImgUnActive} />}
      <SearchForm setActive={setMainImgActive} />
    </>
  )
}

export default App
