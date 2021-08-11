import './Popup.css'

const Popup = ({image, handlePopup, handleSwipe}) => {
  return(
    <div className={"popup-container"}>
      <div className={"popup-image-container"}>
        <div 
          className={"popup-closing-button"}
          onClick={() => handlePopup()}
        >
          x
        </div>
        <img className={"popup-image"} src={image} alt={`${image}`}/>

        <div onClick={() => handleSwipe("right")}>Right</div>
        <div onClick={() => handleSwipe("left")}>Left</div>
      </div>
    </div>
  )
}

export default Popup;