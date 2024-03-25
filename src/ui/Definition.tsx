import { ReactNode } from "react";
import * as style from "./Definition.css";

type DefinitionProps = {
  word: string;
  children: ReactNode;
};

const Definition = ({ word, children }: DefinitionProps) => (
  <div className={style.wrapper}>
    <h2>{word}</h2>
    <p>{children}</p>
  </div>
);

export default Definition;
