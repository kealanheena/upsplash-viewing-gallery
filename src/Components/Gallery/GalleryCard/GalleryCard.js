import React from "react";

const GalleryCard = ({image}) => {
  return(
    <div className={`gallery-card`}>
      <img src={image} alt={}/>
    </div>
  )
}

export default GalleryCard;