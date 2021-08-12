import {useRecoilState} from 'recoil';
import {
  showModal as showModalAtom,
  popupImage as popupImageAtom,
  popupIndex as popupIndexAtom
} from '../../atoms'

import './GalleryCard.css'

const GalleryCard = ({image, index}) => {
  const [popupImage, setPopupImage] = useRecoilState(popupImageAtom)
  const [popupIndex, setPopupIndex] = useRecoilState(popupIndexAtom)
  const [showModal, setShowModal] = useRecoilState(showModalAtom)
  
  const handlePopup = (url, index) => {
    if (!showModal) setPopupIndex(index)

    setShowModal(!showModal)
    setPopupImage(url)
  }

  return(
    <div>
      <img 
        className={"gallery-img"} 
        onClick={() => handlePopup(image, index)} 
        src={image} 
        alt={`${image}`}
      />
    </div>
  )
}

export default GalleryCard;