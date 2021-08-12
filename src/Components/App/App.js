import axios from 'axios';
import {Container} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {
  images as imagesAtom, 
  showModal as showModalAtom,
} from '../atoms'

import GalleryContainer from '../Gallery/GalleryContainer/GalleryContainer';
import Popup from '../Gallery/Popup/Popup';

import './App.css';

const {REACT_APP_ACCESS_KEY} = process.env

const App = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [images, setImages] = useRecoilState(imagesAtom);
  const [showModal] = useRecoilState(showModalAtom);

  const unslashApiUrl = `https://api.unsplash.com/photos?client_id=${REACT_APP_ACCESS_KEY}&page=${pageNumber}`;

  const getAllImages = () => {
    axios.get(unslashApiUrl)
      .then((res) => {
        const allImages = res.data;
        console.log(allImages)
        setPageNumber(pageNumber + 1)
        setImages(images.concat(allImages))
      })
      .catch(err => console.error(`Error: ${err}`))
  }

  useEffect(() => {
    getAllImages()
  }, [])

  return (
    <Container>
      <h1 className={"header"}>Not Pintrest</h1>
      <InfiniteScroll
        dataLength={images.length}
        next={getAllImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <GalleryContainer images={images} />
      </InfiniteScroll>
      {showModal ? 
        <Popup images={images} />
      : null}
    </Container>
  );
}

export default App;
