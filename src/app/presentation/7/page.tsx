"use client";

import { useSlide } from "@/lib/useSlide";
import Points from "@/ui/Points";
import { Answer, Option } from "@prisma/client";
import { useQuery } from "valentin";

const Slide = () => {
  const { atleast } = useSlide([
    "definition",
    "examples",
    "your definition",
    "daily",
  ]);

  const [, , yourDefinition] = useQuery<Option & { answers: Array<Answer> }>(
    "/api/questions/6fc131aa-3bf2-4fd8-a1e2-40aa3d0b17b9/answers/top"
  );
  const [, , yourReality] = useQuery<Option & { answers: Array<Answer> }>(
    "/api/questions/473632d0-e9b1-4c67-a824-049be4c79243/answers/top"
  );

  return (
    <Points
      points={[
        "Personne chargée de la réalisation d'un programme de traitement automatique de l'information",
        atleast("examples")
          ? "Un technicien employé par une entreprise pour travailler sur les outils informatiques"
          : null,
        atleast("your definition") && yourDefinition
          ? yourDefinition.text
          : null,
        atleast("daily") && yourReality ? yourReality.text : null,
      ]}
    />
  );
};

export default Slide;
