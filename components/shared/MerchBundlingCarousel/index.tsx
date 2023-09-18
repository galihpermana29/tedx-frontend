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
} & PropsWithChildren;

const MerchBundlingCarousel = ({
  containerClassName,
  className,
  options,
  children,
}: SliderProps) => {
  options = { dragThreshold: 8, ...options };
  const [sliderRef, sliderMethod] = useEmblaCarousel(options);
  const [prevBtnEnabled, SetPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, SetNextBtnEnabled] = useState(false);

  const handlePrev = useCallback(() => {
    sliderMethod && sliderMethod.scrollPrev();
  }, [sliderMethod]);

  const handleNext = useCallback(() => {
    sliderMethod && sliderMethod.scrollNext();
  }, [sliderMethod]);

  const onSelect = useCallback((sliderMethod: EmblaCarouselType) => {
    SetPrevBtnEnabled(sliderMethod.canScrollPrev());
    SetNextBtnEnabled(sliderMethod.canScrollNext());
  }, []);

  useEffect(() => {
    if (!sliderMethod) return;

    onSelect(sliderMethod);
    sliderMethod.on('select', onSelect);
  }, [sliderMethod, onSelect]);

  return (
    <div className={`${containerClassName} flex flex-col gap-7`}>
      <div
        ref={sliderRef}
        className={`overflow-hidden flex w-full gap-5 h-fit ${className}`}>
        <div className={`flex gap-6 w-full`}>{children}</div>
      </div>
      <div className="flex justify-center items-center gap-4 px-6">
        <button
          onClick={handlePrev}
          className="rounded-full flex justify-center items-center w-14 h-14 text-white bg-orange-primary disabled:bg-zinc-400"
          aria-label="Previous Button"
          disabled={!prevBtnEnabled}>
          <LeftArrow className="w-7 h-7 mr-1" />
        </button>
        <button
          onClick={handleNext}
          className="rounded-full flex justify-center items-center w-14 h-14 text-white bg-orange-primary disabled:bg-zinc-400"
          aria-label="Next Button"
          disabled={!nextBtnEnabled}>
          <RightArrow className="w-7 h-7 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default MerchBundlingCarousel;
