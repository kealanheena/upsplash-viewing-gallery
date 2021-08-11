import './Popup.css'

const Popup = ({image, handlePopup}) => {
  return(
    <div className={"popup-container"}>
      <div className={"popup-image-container"}>
        <button 
          className={"popup-closing-button"}
          onClick={() => handlePopup()}
        >
          X
        </button>
        <img className={"popup-image"} src={image} alt={`${image}`}/>
      </div>
    </div>
  )
}

export default Popup;