"use client";

import { useSlide } from "@/lib/useSlide";
import Points from "@/ui/Points";
import Sources from "@/ui/Sources";

const Slide = () => {
  const { atleast } = useSlide(["definition", "professional", "proletarian"]);

  return (
    <>
      <Points
        points={[
          "Il créé et maintient des programmes",
          atleast("professional") ? "C'est un professionnel" : null,
          atleast("proletarian") ? "C'est un prolétaire" : null,
        ]}
      />

      <Sources
        sources={[atleast("proletarian") ? "Wiktionnaire - prolétaire" : null]}
      />
    </>
  );
};

export default Slide;
