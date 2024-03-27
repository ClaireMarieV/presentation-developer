"use client";

import { useSlide } from "@/lib/useSlide";
import Points from "@/ui/Points";
import Sources from "@/ui/Sources";

const Slide = () => {
  const { atleast } = useSlide(["definition", "wittgenstein"]);

  return (
    <>
      <Points
        points={[
          "Personne chargée de la réalisation d'un programme de traitement automatique de l'information",
        ]}
      />

      <Sources
        sources={[
          atleast("wittgenstein") ? "Wittgenstein - Cahier bleu" : null,
        ]}
      />
    </>
  );
};

export default Slide;
