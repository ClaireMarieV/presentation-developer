"use client";

import { useSlide } from "@/lib/useSlide";
import Points from "@/ui/Points";
import Sources from "@/ui/Sources";

const Slide = () => {
  const { slide, atleast } = useSlide(["no data", "bull"]);

  return (
    <>
      {slide === "no data" && <Points points={["😔"]} />}
      {slide === "bull" && <Points points={["Bull"]} />}

      <Sources
        sources={[
          atleast("bull") ? "Wikipedia - Bull" : null,
          atleast("bull")
            ? "Cigref - Histoire parallèle de l’informatique et des entreprises"
            : null,
          false
            ? "https://www.cigref.fr/archives/histoire-cigref/blog/histoire-parallele-de-linformatique-et-des-entreprises/"
            : null,
        ]}
      />
    </>
  );
};

export default Slide;
