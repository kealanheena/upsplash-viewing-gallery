import {useRecoilState} from 'recoil';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  showModal as showModalAtom,
  popupImage as popupImageAtom,
  popupIndex as popupIndexAtom
} from '../../atoms'

import './GalleryCard.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

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
    <div onClick={() => handlePopup(image, index)} >
      <LazyLoadImage
        className={"gallery-img"}
        effect="blur"
        alt={alt_description}
        src={urls.raw} // use normal <img> attributes as props
      />
    </div>
  )
}

 // <img 
      //   className={"gallery-img"} 
      //   onClick={() => handlePopup(image, index)} 
      //   src={urls.raw} 
      //   alt={alt_description}
      // />

export default GalleryCard;