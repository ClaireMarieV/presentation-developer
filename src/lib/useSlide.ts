import { useCallback, useEffect, useRef, useState } from "react";
import { create } from "zustand";

type SlideState = {
  slides: Array<string>;
  setSlides: (slides: Array<string>) => void;
};

const useSlideStore = create<SlideState>()((set) => ({
  slides: [],
  setSlides: (slides) => set({ slides }),
}));

export const useSlide = <Slide extends string>(slides?: Array<Slide>) => {
  const index = useRef(0);

  const { slides: localSlides, setSlides } = useSlideStore();

  const [slide, setSlide] = useState(localSlides[index.current]);

  useEffect(() => {
    if (slides && JSON.stringify(slides) !== JSON.stringify(localSlides)) {
      setSlides(slides);
    }
  }, [localSlides, setSlides, slides]);

  const next = useCallback(() => {
    index.current = Math.min(index.current + 1, localSlides.length - 1);
    setSlide(localSlides[index.current]);
  }, [localSlides]);
  const previous = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      index.current = Math.max(index.current - 1, 0);
      setSlide(localSlides[index.current]);
    },
    [localSlides]
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

  useEffect(() => {
    document.addEventListener("click", next);
    document.addEventListener("contextmenu", previous);

    () => {
      document.removeEventListener("click", next);
      document.removeEventListener("contextmenu", previous);
    };
  });

  return { slide, before, after };
};
