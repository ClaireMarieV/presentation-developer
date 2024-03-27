import { ReactNode } from "react";
import { motion } from "framer-motion";
import * as style from "./Definition.css";

type DefinitionProps = {
  word: string;
  children: ReactNode;
};

const Definition = ({ word, children }: DefinitionProps) => (
  <motion.div
    key={word}
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    className={style.wrapper}
  >
    <h2>{word}</h2>
    <p>{children}</p>
  </motion.div>
);

export default Definition;
