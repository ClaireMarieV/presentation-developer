"use client";

import { useSlide } from "@/lib/useSlide";

const Title = () => {
  const { slide } = useSlide(["pending", "started"]);

  return (
    <h1>
      {slide === "pending" && (
        <>
          Petit questionnaire pour la présentation, avec un tirage au sort à la
          fin pour une conférence en Juin
        </>
      )}
      {slide === "started" && (
        <>
          Qu&apos;est-ce qu&apos;une développeuse
          <br />
          Qu&apos;est qu&apos;un développeur ?
        </>
      )}
    </h1>
  );
};

export default Title;
