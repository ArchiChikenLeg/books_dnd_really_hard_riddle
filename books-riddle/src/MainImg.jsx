import './MainImg.css'
export default function MainImg({setUnActive}) {
    return(
        <div className="main-img-container">
            <button className="close-main-img-btn" onClick={setUnActive}>X</button>
        </div>
    )
}
