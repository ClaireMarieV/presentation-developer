import * as style from "./Sources.css";

type SourcesProps = {
  sources: Array<string | null>;
};

const Sources = ({ sources }: SourcesProps) => (
  <section className={style.wrapper}>
    <h6 className={style.title}>Sources</h6>
    <ul className={style.sources}>
      {sources
        .filter((source) => source)
        .map((source, index) => (
          <li key={index} className={style.source}>
            {source}
          </li>
        ))}
    </ul>
  </section>
);

export default Sources;
