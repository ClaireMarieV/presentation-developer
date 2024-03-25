"use client";

import { useSlide } from "@/lib/useSlide";
import Sources from "@/ui/Sources";

const Slide = () => {
  const { atleast } = useSlide(["1772", "1905", "1961"]);

  return (
    <>
      <h1>1772 - Historical Description of Canterbury Cathedral</h1>
      {atleast("1905") && <h1>1905 - Popular Science Monthly</h1>}
      {atleast("1961") && <h1>1961 - Arizona Republic</h1>}

      <Sources
        sources={[
          "Oxford English Dictionary - developer",
          atleast("1905") ? "StackExchange - History" : null,
          false
            ? "https://history.stackexchange.com/questions/47898/what-is-the-origin-of-the-term-developer-in-the-context-of-software"
            : null,
        ]}
      />
    </>
  );
};

export default Slide;
