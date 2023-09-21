import { Dispatch, SetStateAction } from "react";

export type SliderType = {
  sliderType: string;
  setSliderType: Dispatch<SetStateAction<string>>;
};
