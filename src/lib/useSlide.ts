import { useCallback, useEffect, useRef, useState } from "react";
import { create } from "zustand";

type SlideState = {
  slides: Array<string>;
  setSlides: (slides: Array<string>) => void;
  slide: string;
  setSlide: (slide: string) => void;
};

const useSlideStore = create<SlideState>()((set) => ({
  slides: [],
  setSlides: (slides) => set({ slides, slide: slides[0] }),
  slide: "",
  setSlide: (slide) => set({ slide }),
}));

export const useSlide = <Slide extends string>(slides?: Array<Slide>) => {
  const index = useRef(0);

  const { slides: localSlides, setSlides, slide, setSlide } = useSlideStore();

  useEffect(() => {
    if (slides && JSON.stringify(slides) !== JSON.stringify(localSlides)) {
      setSlides(slides);
      index.current = 0;
    }
  }, [localSlides, setSlide, setSlides, slides]);

  const next = useCallback(() => {
    if (localSlides.length > 0) {
      index.current = Math.min(index.current + 1, localSlides.length - 1);
      setSlide(localSlides[index.current]);
    }
  }, [localSlides, setSlide]);
  const previous = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();

      if (localSlides.length > 0) {
        index.current = Math.max(index.current - 1, 0);
        setSlide(localSlides[index.current]);
      }
    },
    [localSlides, setSlide]
  );

  const before = useCallback(
    (slide: Slide) =>
      localSlides.length > 0
        ? localSlides.indexOf(slide) > index.current
        : false,
    [localSlides]
  );
  const after = useCallback(
    (slide: Slide) =>
      localSlides.length > 0
        ? localSlides.indexOf(slide) < index.current
        : false,
    [localSlides]
  );
  const atleast = useCallback(
    (slide: Slide) =>
      localSlides.length > 0
        ? localSlides.indexOf(slide) <= index.current
        : false,
    [localSlides]
  );

  useEffect(() => {
    document.addEventListener("click", next);
    document.addEventListener("contextmenu", previous);

    () => {
      document.removeEventListener("click", next);
      document.removeEventListener("contextmenu", previous);
    };
  });

  return { slide, before, after, atleast };
};
