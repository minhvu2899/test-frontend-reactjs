import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { rulesSlider } from "../../constants";
import { ImageItemType } from "../../models";
import ImageItem from "../ImageItem";

interface ImageItemProps {
  images: ImageItemType[];
  classNameSliderShow: string;
}

export default function HorizontalSlideShow({
  images,
  classNameSliderShow = "",
}: ImageItemProps) {
  const [imagesSlider, setImagesSlider] = useState<ImageItemType[]>(images);
  const handleSelected = (imgSelected: ImageItemType) => {
    const newImages = [...images].map((img: ImageItemType) => ({
      ...img,
      isSelected: false,
    }));
    const indexImageSelected = newImages.findIndex(
      (image) => image.id === imgSelected.id
    );
    newImages[indexImageSelected] = { ...imgSelected, isSelected: true };
    setImagesSlider(newImages);
  };

  useEffect(() => {
    const newImages = images.map((img, index) => ({
      ...img,
      isSelected: index === 0,
    }));
    setImagesSlider(newImages);
  }, []);
  return (
    <div
      className={`flex items-center justify-between overflow-hidden flex-nowrap ${classNameSliderShow}`}
    >
      <div className="w-full" id="slider-images">
        <Slider {...rulesSlider}>
          {imagesSlider.map((img: any) => (
            <ImageItem key={img.id} onSelected={handleSelected} img={img} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
