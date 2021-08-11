import './GalleryCard.css'

const GalleryCard = ({image, handlePopup}) => {
  return(
    <div>
      <img className={"gallery-img"} onClick={() => handlePopup(image)} src={image} alt={"new"}/>
      <div className="gallery-img-overlay">Image Title</div>
    </div>
  )
}

export default GalleryCard;