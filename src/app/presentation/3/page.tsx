"use client";

import { useSlide } from "@/lib/useSlide";
import Sources from "@/ui/Sources";

const Slide = () => {
  const { atleast } = useSlide(["definition", "wittgenstein"]);

  return (
    <>
      <h1>
        Personne chargée de la réalisation d&apos;un programme de traitement
        automatique de l&apos;information
      </h1>

      <Sources
        sources={[
          atleast("wittgenstein") ? "Wittgenstein - Cahier bleu" : null,
        ]}
      />
    </>
  );
};

export default Slide;
