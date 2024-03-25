import { useParams, usePathname, useRouter } from "next/navigation";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
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

const useChannel = () => {
  const [channel, setChannel] = useState<null | BroadcastChannel>(null);

  useEffect(() => {
    const channel = new BroadcastChannel("slides");
    setChannel(channel);

    return () => channel.close();
  }, []);

  return channel;
};

type UseSlideLayoutParameters = {
  communication?: boolean;
};

export const useSlideLayout = (
  { communication = true }: UseSlideLayoutParameters = { communication: true }
) => {
  const slideNumber = parseInt(usePathname().split("/").at(-1)!);
  const router = useRouter();
  const { final } = useParams();

  const channel = useChannel();

  const { slide, slides, setSlide, setSlides, index, setIndex } =
    useSlideStore();

  useEffect(() => {
    const next = () => {
      if (index >= slides.length - 1) {
        if (!final) {
          router.push((slideNumber + 1).toString());
        }
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
  }, [
    index,
    router,
    setIndex,
    setSlide,
    setSlides,
    slideNumber,
    slides,
    final,
    channel,
  ]);

  useEffect(() => {
    if (communication) {
      channel?.postMessage({ page: slideNumber, slide });
    }
  }, [channel, communication, slide, slideNumber]);

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
    (slide: Slide) => slides.indexOf(slide) > index,
    [index, slides]
  );
  const after = useCallback(
    (slide: Slide) => slides.indexOf(slide) < index,
    [index, slides]
  );
  const atleast = useCallback(
    (slide: Slide) => slides.indexOf(slide) <= index,
    [index, slides]
  );

  return { slide, before, after, atleast };
};

type Notes = Record<number, ReactNode>;

export const useNotes = ({ notes }: { notes: Notes }) => {
  const channel = useChannel();

  const [page, setPage] = useState(1);
  const [slide, setSlide] = useState<null | string>(null);

  useEffect(() => {
    if (channel) {
      channel.onmessage = ({ data: { page, slide } }) => {
        setPage(page);
        setSlide(slide);
      };
    }
  }, [channel]);

  return { page, slide, notes: notes[page] };
};
