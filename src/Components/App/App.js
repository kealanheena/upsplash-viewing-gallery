import axios from 'axios';
import {useEffect} from 'react';
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
  const unslashApiUrl = `https://api.unsplash.com/photos?client_id=${REACT_APP_ACCESS_KEY}`
  const [images, setImages] = useRecoilState(imagesAtom)
  const [showModal] = useRecoilState(showModalAtom)



  useEffect(() => {
    const getAllImages = () => {
      axios.get(unslashApiUrl)
        .then((res) => {
          const allImages = res.data;
          console.log(allImages)
          setImages(allImages)
        })
        .catch(err => console.error(`Error: ${err}`))
    }

    getAllImages()
  }, [setImages, unslashApiUrl])

  return (
    <div className="App">
      <h1 className={"header"}>Not Pintrest</h1>
      <GalleryContainer images={images} />
      {showModal ? 
        <Popup images={images} />
      : null}
    </div>
  );
}

export default App;
