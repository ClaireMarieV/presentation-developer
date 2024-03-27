import { AnimatePresence, motion } from "framer-motion";
import * as style from "./Sources.css";

type SourcesProps = {
  sources: Array<string | null>;
};

const Sources = ({ sources }: SourcesProps) =>
  sources.filter((source) => source).length > 0 ? (
    <section className={style.wrapper}>
      <h6 className={style.title}>Sources</h6>
      <ul className={style.sources}>
        <AnimatePresence>
          {sources
            .filter((source) => source)
            .map((source, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={style.source}
              >
                {source}
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>
    </section>
  ) : (
    <></>
  );

export default Sources;
