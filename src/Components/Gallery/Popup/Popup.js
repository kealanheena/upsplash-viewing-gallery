import {useRecoilState} from 'recoil';
import {
  showModal as showModalAtom,
  popupImage as popupImageAtom,
  popupIndex as popupIndexAtom
} from '../../atoms'

import './Popup.css'

const Popup = ({images}) => {
  const [popupImage, setPopupImage] = useRecoilState(popupImageAtom)
  const [popupIndex, setPopupIndex] = useRecoilState(popupIndexAtom)
  const [showModal, setShowModal] = useRecoilState(showModalAtom)

  const handleRightArrow = () => {
    if (popupIndex < images.length - 1) {
      setPopupIndex(popupIndex + 1);
      setPopupImage(images[popupIndex]);
    }
  }

  const handleLeftArrow = () => {
    if (popupIndex > 0) {
      setPopupIndex(popupIndex - 1);
      setPopupImage(images[popupIndex]);
    }
  }
  
  const handlePopup = (url, index) => {
    if (!showModal) setPopupIndex(index)

    setShowModal(!showModal)
    setPopupImage(url)
  }

  return(
    <div className={"popup-container"}>
      <div className={"popup-image-container"}>
        <div 
          className={"popup-closing-button"}
          onClick={() => handlePopup()}
        >
          x
        </div>
        <img className={"popup-image"} src={popupImage} alt={`${popupImage}`}/>
        <div className={"popup-sliding-button-container"}>
          <div 
            onClick={() => handleLeftArrow()}
            className={"popup-sliding-button"}
          >
            {'<'}
          </div>
          <div 
            onClick={() => handleRightArrow()}
            className={"popup-sliding-button"}
          >
            {'>'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup;