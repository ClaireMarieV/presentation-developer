import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { create } from "zustand";

type SlideState = {
  slides: Array<string>;
  setSlides: (slides: Array<string>) => void;
  index: number;
  setIndex: (index: number) => void;
  slide: string | null;
  setSlide: (slide: string | null) => void;
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

  const { slide, slides, setSlide, setSlides, index, setIndex } =
    useSlideStore();

  useEffect(() => {
    const next = () => {
      if (index >= slides.length - 1) {
        router.push((slideNumber + 1).toString());
      } else {
        setIndex(index + 1);
        setSlide(slides[index + 1] || null);
      }
    };
    const previous = (event: MouseEvent) => {
      event.preventDefault();

      if (index <= 0) {
        if (slideNumber > 1) {
          router.push((slideNumber - 1).toString());
        }
      } else {
        setIndex(index - 1);
        setSlide(slides[index - 1] || null);
      }
    };

    document.addEventListener("click", next);
    document.addEventListener("contextmenu", previous);

    return () => {
      document.removeEventListener("click", next);
      document.removeEventListener("contextmenu", previous);
    };
  }, [index, router, setIndex, setSlide, setSlides, slideNumber, slides]);

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
      setIndex(0);
      setSlide(slides[0]);
    }
  }, [setIndex, setSlide, setSlides, slides, storeSlides]);

  useEffect(
    () => () => {
      setIndex(0);
      setSlides([]);
      setSlide(null);
    },
    [setIndex, setSlide, setSlides]
  );

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
