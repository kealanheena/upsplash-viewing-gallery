import {useRecoilState} from 'recoil';
import {
  showModal as showModalAtom,
  popupImage as popupImageAtom,
  popupIndex as popupIndexAtom
} from '../../atoms'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import './Popup.css'

const Popup = ({images}) => {
  const [popupImage, setPopupImage] = useRecoilState(popupImageAtom)
  const [popupIndex, setPopupIndex] = useRecoilState(popupIndexAtom)
  const [showModal, setShowModal] = useRecoilState(showModalAtom)

  const handleRightArrow = () => {
    if (popupIndex < images.length - 1) {
      const newPopupIndex = popupIndex + 1;
      setPopupIndex(newPopupIndex);
      setPopupImage(images[newPopupIndex]);
    }
  }

  const handleLeftArrow = () => {
    if (popupIndex > 0) {
      const newPopupIndex = popupIndex - 1;
      setPopupIndex(newPopupIndex);
      setPopupImage(images[newPopupIndex]);
    }
  }
  
  const handlePopup = (image, index) => {
    if (!showModal) {
      setPopupIndex(index)
      setPopupImage(image)
    }

    setShowModal(!showModal)
  }

  return(
    <div className={"popup-container"}>
      <div className={"popup-image-container"}>
        <div 
          className={"popup-closing-button"}
          onClick={() => handlePopup()}
        >
          <FullscreenExitIcon />
        </div>
        <img 
          className={"popup-image"} 
          src={popupImage.urls.raw} 
          alt={popupImage.alt_description}
        />
        <div className={"popup-sliding-button-container"}>
          <div 
            onClick={() => handleLeftArrow()}
            className={"popup-sliding-button"}
          >
            <ArrowBackIcon />
          </div>
          <div 
            onClick={() => handleRightArrow()}
            className={"popup-sliding-button"}
          >
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup;