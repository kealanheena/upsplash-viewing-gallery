import {useRecoilState} from 'recoil';
import {
  images as imagesAtom, 
  showModal as showModalAtom,
} from '../atoms'

import GalleryContainer from '../Gallery/GalleryContainer/GalleryContainer';
import Popup from '../Gallery/Popup/Popup';

import './App.css';

const App = () => {
  const [images, setImages] = useRecoilState(imagesAtom)
  const [showModal] = useRecoilState(showModalAtom)

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
