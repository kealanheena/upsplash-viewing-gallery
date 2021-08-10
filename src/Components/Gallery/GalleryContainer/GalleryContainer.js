import React from "react";
import GalleryCard from "../GalleryCard/GalleryCard";

const GalleryContainer = ({images}) => {
  return(
    <div className={"gallery-container"}>
      {images.map((image, index) => 
        <GalleryCard key={index} image={image}/>
      )}
    </div>
  )
}

export default GalleryContainer;