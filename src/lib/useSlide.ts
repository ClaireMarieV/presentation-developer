import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { create } from "zustand";

type SlideState = {
  slides: Array<string>;
  setSlides: (slides: Array<string>) => void;
  index: number;
  setIndex: (index: number) => void;
  slide: string;
  setSlide: (slide: string) => void;
};

const useSlideStore = create<SlideState>()((set) => ({
  slides: [],
  setSlides: (slides) => set({ slides, slide: slides[0], index: 0 }),
  index: 0,
  setIndex: (index) => set({ index }),
  slide: "",
  setSlide: (slide) => set({ slide }),
}));

export const useSlideLayout = () => {
  const slideNumber = parseInt(usePathname().split("/").at(-1)!);
  const router = useRouter();

  const { slide, slides, setSlide, index, setIndex } = useSlideStore();

  useEffect(() => {
    const next = () => {
      if (index >= slides.length - 1) {
        router.push((slideNumber + 1).toString());
      } else {
        setIndex(index + 1);
        setSlide(slides[index + 1]);
      }
    };
    const previous = (event: MouseEvent) => {
      event.preventDefault();

      if (index <= 0) {
        router.push((slideNumber - 1).toString());
      } else {
        setIndex(index - 1);
        setSlide(slides[index - 1]);
      }
    };

    document.addEventListener("click", next);
    document.addEventListener("contextmenu", previous);

    return () => {
      document.removeEventListener("click", next);
      document.removeEventListener("contextmenu", previous);
    };
  }, [index, router, setIndex, setSlide, slideNumber, slides]);

  return slide;
};

export const useSlide = <Slide extends string>(slides: Array<Slide>) => {
  const {
    slides: storeSlides,
    setSlides,
    slide,
    setSlide,
    index,
    setIndex,
  } = useSlideStore();

  useEffect(() => {
    if (JSON.stringify(slides) !== JSON.stringify(storeSlides)) {
      setSlides(slides);
    }
  }, [setIndex, setSlide, setSlides, slides, storeSlides]);

  const before = useCallback(
    (slide: Slide) => storeSlides.indexOf(slide) > index,
    [index, storeSlides]
  );
  const after = useCallback(
    (slide: Slide) => storeSlides.indexOf(slide) < index,
    [index, storeSlides]
  );
  const atleast = useCallback(
    (slide: Slide) => storeSlides.indexOf(slide) <= index,
    [index, storeSlides]
  );

  return { slide, before, after, atleast };
};
