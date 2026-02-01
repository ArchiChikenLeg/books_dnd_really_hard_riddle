import './MainImg.css'
export default function MainImg({setUnActive, bgImg}) {
    return(
        <div className="main-img-container" style={{backgroundImage: `url(${bgImg})`}}>
            <button className="close-main-img-btn" onClick={setUnActive}>X</button>
        </div>
    )
}
