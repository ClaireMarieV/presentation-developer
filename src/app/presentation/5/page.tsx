"use client";

import { useSlide } from "@/lib/useSlide";
import Sources from "@/ui/Sources";

const Slide = () => {
  const { atleast } = useSlide([""]);

  return (
    <>
      <h1>En france</h1>

      <Sources sources={[]} />
    </>
  );
};

export default Slide;
