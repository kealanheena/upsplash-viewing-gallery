import {useRecoilState} from 'recoil';
import {
  showModal as showModalAtom,
  popupImage as popupImageAtom,
  popupIndex as popupIndexAtom
} from '../../atoms'

import './GalleryCard.css'

const GalleryCard = ({image, index}) => {
  const {alt_description, urls, } = image;

  const [, setPopupImage] = useRecoilState(popupImageAtom)
  const [, setPopupIndex] = useRecoilState(popupIndexAtom)
  const [showModal, setShowModal] = useRecoilState(showModalAtom)
  
  const handlePopup = (image, index) => {
    if (!showModal) {
      setPopupIndex(index)
      setPopupImage(image)
    }

    setShowModal(!showModal)
  }

  return(
    <div>
      <img 
        className={"gallery-img"} 
        onClick={() => handlePopup(image, index)} 
        src={urls.raw} 
        alt={alt_description}
      />
    </div>
  )
}

export default GalleryCard;