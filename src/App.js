import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Menu from './Menu'

import { IMAGES } from "./data/data";

function App() {
  return (
    <div className='App'>
      {/* <div className="containerHome">
        <Menu></Menu>
      </div> */}
      <div className='container'>
        <ImageSlider images={IMAGES} slidesToShow={5} />
      </div>
    </div>
  );
}

export default App;
