"use client";

import { useSlide } from "@/lib/useSlide";
import Sources from "@/ui/Sources";

const Slide = () => {
  const { atleast } = useSlide(["no data", "bull"]);

  return (
    <>
      <h1>😔</h1>

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
