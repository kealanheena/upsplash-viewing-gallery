import './GalleryCard.css'

const GalleryCard = ({image}) => {
  return(
    <div>
      <img className={`gallery-img`} src={image} alt={"new"}/>
    </div>
  )
}

export default GalleryCard;