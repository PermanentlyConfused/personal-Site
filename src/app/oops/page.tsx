import React from "react";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/base.css";

import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function App() {
  return (
    <div className="bg-[#e8e1db]">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
