import { Settings } from "react-slick";
import { BREAK_POINT } from "./common";

const SLIDERS_TO_SHOW = {
  xs: 1,
  sm: 2,
  lg: 3,
  "2xl": 5,
};
const SPEED = 500;
export const rulesSlider: Settings = {
  dots: false,
  infinite: true,
  speed: SPEED,
  slidesToShow: SLIDERS_TO_SHOW["2xl"],
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: BREAK_POINT.lg,
      settings: {
        slidesToShow: SLIDERS_TO_SHOW.lg,
        infinite: true,
      },
    },
    {
      breakpoint: BREAK_POINT.sm,
      settings: {
        slidesToShow: SLIDERS_TO_SHOW.sm,
      },
    },
    {
      breakpoint: BREAK_POINT.xs,
      settings: {
        slidesToShow: SLIDERS_TO_SHOW.xs,
      },
    },
  ],
};
