'use client';

import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { LeftArrow } from '@/components/icons/LeftArrow';
import { RightArrow } from '@/components/icons/RightArrow';

type SliderProps = {
  containerClassName?: string;
  className?: string;
  options?: EmblaOptionsType;
  hideButton?: boolean;
  showProgress?: boolean;
} & PropsWithChildren;

const Carousel = ({
  containerClassName,
  className,
  options,
  children,
  hideButton,
  showProgress,
}: SliderProps) => {
  options = { dragThreshold: 8, ...options };
  const [sliderRef, sliderMethod] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1); // Track current slide
  const [totalSlides, setTotalSlides] = useState(0);

  const handlePrev = useCallback(() => {
    sliderMethod && sliderMethod.scrollPrev();
  }, [sliderMethod]);

  const handleNext = useCallback(() => {
    sliderMethod && sliderMethod.scrollNext();
  }, [sliderMethod]);

  const onSelect = useCallback((sliderMethod: EmblaCarouselType) => {
    setPrevBtnEnabled(sliderMethod.canScrollPrev());
    setNextBtnEnabled(sliderMethod.canScrollNext());
    setCurrentSlide(sliderMethod.selectedScrollSnap()); // Update current slide
    setTotalSlides(sliderMethod.slideNodes().length);
  }, []);

  useEffect(() => {
    if (!sliderMethod) return;

    onSelect(sliderMethod);
    sliderMethod.on('select', onSelect);
  }, [sliderMethod, onSelect]);

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className={`${containerClassName} flex flex-col gap-7`}>
      <div
        ref={sliderRef}
        className={`overflow-hidden flex w-full gap-5 h-fit ${className}`}>
        <div className={`flex gap-6 w-full`}>{children}</div>
      </div>
      <div
        className={`justify-center items-center gap-4 px-6 ${
          hideButton ? 'hidden' : 'flex'
        }`}>
        <button
          onClick={handlePrev}
          className="rounded-full flex justify-center items-center w-14 h-14 text-white bg-orange-primary disabled:blur-[3px]"
          aria-label="Previous Button"
          disabled={!prevBtnEnabled}>
          <LeftArrow className="w-7 h-7 mr-1" />
        </button>
        <button
          onClick={handleNext}
          className="rounded-full flex justify-center items-center w-14 h-14 text-white bg-orange-primary disabled:blur-[3px]"
          aria-label="Next Button"
          disabled={!nextBtnEnabled}>
          <RightArrow className="w-7 h-7 ml-1" />
        </button>
      </div>
      <div className={`bg-[#E5E7EB] h-2 ${showProgress ? 'block' : 'hidden'}`}>
        <div
          className="h-2 transition-all duration-300 bg-red-primary"
          style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Carousel;
