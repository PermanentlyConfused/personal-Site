"use client";
import React, { ReactNode, useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

type PropType = {
  slides: ReactNode;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const progressNode = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <div className="embla md:px-20 lg:max-w-[80vw] lg:px-40 xl:px-60">
      <div className="embla__viewport" ref={emblaRef}>
        {/* {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number text-black">
                <span className="">{index + 1}</span>
              </div>
            </div>
          ))} */}
        {slides}
      </div>

      <div className="embla__controls grid grid-cols-3 justify-items-center lg:grid-rows-3 lg:px-10">
        <div className="embla__buttons col-start-2 row-start-2 lg:col-start-1 lg:row-start-1">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div
          className={`embla__progress col-start-2 row-start-1 w-full lg:col-start-2 lg:row-start-1 ${showAutoplayProgress ? "" : "embla__progress--hidden"}`}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div>

        <button
          className="embla__play col-start-2 row-start-3 flex lg:col-start-3 lg:row-start-1"
          onClick={toggleAutoplay}
          type="button"
        >
          {autoplayIsPlaying ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
