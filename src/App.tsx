import "./App.css";
import HorizontalSlideShow from "./components/HorizontalSlideShow";
import { dataImages } from "./fakeData";

function App() {
  return (
    <div className="container">
      <HorizontalSlideShow
        images={dataImages}
        classNameSliderShow="w-screen h-[500px]"
      />
    </div>
  );
}
export default App;
