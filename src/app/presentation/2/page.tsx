"use client";

import { useSlide } from "@/lib/useSlide";
import Definition from "@/ui/Definition";
import * as style from "./page.css";
import Sources from "@/ui/Sources";

const Slide = () => {
  const { atleast } = useSlide([
    "développeur",
    "développement",
    "développer",
    "programmation",
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
            atleast("programmation") ? style.emphasis.on : style.emphasis.off
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

      {atleast("programmation") && (
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

      <Sources
        sources={[
          "Wiktionnaire - développeur",
          atleast("développement") ? "Wiktionnaire - développement" : null,
          atleast("développer") ? "Wiktionnaire - développer" : null,
          atleast("programmation") ? "Wiktionnaire - programmation" : null,
          atleast("informatique") ? "Wiktionnaire - informatique" : null,
        ]}
      />
    </>
  );
};

export default Slide;
