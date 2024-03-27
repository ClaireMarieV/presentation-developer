import { useMutation } from "valentin";
import * as style from "./Rafle.css";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type RafleProps = { initialName: string };

const Rafle = ({ initialName }: RafleProps) => {
  const [participate, loading, error] = useMutation<{ name: string }>(
    "/api/rafle"
  );

  const [name, setName] = useState(initialName);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    participate({ name });
  };

  return (
    <form className={style.rafle} onSubmit={submit}>
      <label className={style.label}>
        Si vous souhaitez participer au tirage au sort, entrez votre nom:
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={style.input}
        />
      </label>
      <button
        disabled={loading || name === ""}
        className={style.button}
        type="submit"
      >
        Participer
      </button>

      <AnimatePresence>
        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={style.error}
          >
            {error.message}
          </motion.div>
        )}
      </AnimatePresence>

      <p className={style.description}>
        Pour plus d&apos;informations, vous pouvez vous rendre sur le{" "}
        <a
          href="https://c3fest.com/"
          target="_blank"
          rel="noreferrer noopener"
          className={style.link}
        >
          site de la conférence
        </a>
      </p>
    </form>
  );
};

export default Rafle;
