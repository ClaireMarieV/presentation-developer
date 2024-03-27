"use client";

import { User } from "@prisma/client";
import { useEffect } from "react";
import { useMutation } from "valentin";
import { AnimatePresence, motion } from "framer-motion";
import * as style from "./page.css";

const Rafle = () => {
  const [rafle, , , user] = useMutation<string | null, User>(
    (userId) => (userId ? `/api/rafle?userId=${userId}` : "/api/rafle"),
    "GET"
  );

  useEffect(() => {
    if (user) {
      const interval = setInterval(() => rafle(user.id), 2000);

      return () => clearInterval(interval);
    }
  }, [rafle, user]);

  return (
    <main className={style.page}>
      <AnimatePresence>
        {user && (
          <motion.h1
            key="user"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {user.name}
          </motion.h1>
        )}
        <button
          key="button"
          onClick={() => rafle(null)}
          className={style.button}
        >
          Tirer au sort
        </button>
      </AnimatePresence>
    </main>
  );
};

export default Rafle;
