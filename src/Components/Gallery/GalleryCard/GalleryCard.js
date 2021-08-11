import './GalleryCard.css'

const GalleryCard = ({image, index, handlePopup}) => {
  return(
    <div>
      <img className={"gallery-img"} onClick={() => handlePopup(image, index)} src={image} alt={"new"}/>
    </div>
  )
}

export default GalleryCard;