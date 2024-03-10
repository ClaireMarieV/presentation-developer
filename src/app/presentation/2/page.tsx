"use client";

import { useSlide } from "@/lib/useSlide";
import Definition from "@/ui/Definition";
import * as style from "./page.css";

const Slide = () => {
  const { atleast } = useSlide([
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
            atleast("développement") ? style.emphasis.on : style.emphasis.off
          }
        >
          développements
        </em>
        , de la{" "}
        <em
          className={
            atleast("programation") ? style.emphasis.on : style.emphasis.off
          }
        >
          programmation
        </em>
        , dans un projet informatique.
      </Definition>

      {atleast("développement") && (
        <Definition word="Développement">
          Action de{" "}
          <em
            className={
              atleast("développer") ? style.emphasis.on : style.emphasis.off
            }
          >
            développer
          </em>
          , de se développer ou résultat de cette action, au propre et au
          figuré.
        </Definition>
      )}

      {atleast("développer") && (
        <Definition word="Développer">
          Réaliser, implanter, implémenter (un programme).
        </Definition>
      )}

      {atleast("programation") && (
        <Definition word="Programmation">
          Réalisation d&apos;un programme{" "}
          <em
            className={
              atleast("informatique") ? style.emphasis.on : style.emphasis.off
            }
          >
            informatique
          </em>
          .
        </Definition>
      )}

      {atleast("informatique") && (
        <Definition word="Informatique">
          Science du traitement automatique de l’information.
        </Definition>
      )}
    </>
  );
};

export default Slide;
