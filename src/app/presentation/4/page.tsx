"use client";

import { motion } from "framer-motion";
import { useSlide } from "@/lib/useSlide";
import Sources from "@/ui/Sources";
import Points from "@/ui/Points";

const Slide = () => {
  const { atleast } = useSlide([
    "1772",
    "ada lovelace",
    "1905",
    "1961",
    "ge computer",
  ]);

  return (
    <>
      <Points
        points={[
          "1772 - Historical Description of Canterbury Cathedral",
          atleast("1905") ? "1905 - Popular Science Monthly" : null,
          atleast("1961") ? "1961 - Arizona Republic" : null,
        ]}
      />

      <Sources
        sources={[
          "Oxford English Dictionary - developer",
          atleast("ada lovelace") ? "Wikipedia / Ada Lovelace" : null,
          atleast("1905") ? "StackExchange / History" : null,
          atleast("ge computer") ? "Computer History Museum" : null,
          atleast("ge computer")
            ? "Wikipedia - Electronic Recording Machine, Accounting"
            : null,
          false
            ? "https://history.stackexchange.com/questions/47898/what-is-the-origin-of-the-term-developer-in-the-context-of-software"
            : null,
          false ? "https://www.computerhistory.org/brochures/g-i/" : null,
          false
            ? "https://en.wikipedia.org/wiki/Electronic_Recording_Machine,_Accounting"
            : null,
        ]}
      />
    </>
  );
};

export default Slide;
