import GalleryCard from "../GalleryCard/GalleryCard";
import {Container} from "@material-ui/core";
import Masonry from "react-masonry-css";

import './GalleryContainer.css'

const GalleryContainer = ({images}) => {

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return(
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className={"my-masonry-grid"}
        columnClassName={"my-masonry-grid_column"}
      >
        {images.map((image, index) => 
          <div key={index}>
            <GalleryCard image={image}/>
          </div>
        )}
      </Masonry>
    </Container>  
  )
}

export default GalleryContainer;