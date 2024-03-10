"use client";

import { useSlide } from "@/lib/useSlide";
import Definition from "@/ui/Definition";
import * as style from "./page.css";

const Slide = () => {
  const { slide, after } = useSlide([
    "développeur",
    "développement",
    "développer",
    "programation",
    "informatique",
  ]);

  return (
    <>
      <Definition word="Développeur">
        Personne chargée des{" "}
        <em
          className={
            after("développeur") ? style.emphasis.on : style.emphasis.off
          }
        >
          développements
        </em>
        , de la programmation, dans un projet informatique.
      </Definition>

      {after("développeur") && (
        <Definition word="Développement">
          Action de développer, de se développer ou résultat de cette action, au
          propre et au figuré.
        </Definition>
      )}

      {after("développement") && (
        <Definition word="Développer">
          Réaliser, implanter, implémenter (un programme).
        </Definition>
      )}

      {after("développer") && (
        <Definition word="Programmation">
          Réalisation d&apos;un programme informatique.
        </Definition>
      )}

      {after("programation") && (
        <Definition word="Informatique">
          Science du traitement automatique de l’information.
        </Definition>
      )}
    </>
  );
};

export default Slide;
