import { ImageItemType } from "../../models";

interface ImageItemProps {
  img: ImageItemType;
  onSelected: (img: ImageItemType) => void;
}
export default function ImageItem({ img, onSelected }: ImageItemProps) {
  const handleClick = (img: ImageItemType) => {
    onSelected && onSelected(img);
  };
  return (
    <li className="list-none " onClick={() => handleClick(img)}>
      <img
        src={img.url}
        alt={img.info}
        className="cursor-pointer w-40 h-40 inline-block rounded-md flex-shrink"
      />
      <div
        style={{
          zIndex: 1,
          opacity: !img.isSelected ? "0" : "1",
          transition: "all 1s",
          visibility: !img.isSelected ? "hidden" : "visible",
        }}
        className=" text-center w-full mt-14 p-12 transition duration-150 ease-linear bg-green-200 rounded-md text-base font-semibold shadow-lg"
      >
        {img.info}
      </div>
    </li>
  );
}
