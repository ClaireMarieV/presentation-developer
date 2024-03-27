"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react";

type PointsProps = {
  points: Array<ReactElement | string | null>;
};

const Points = ({ points }: PointsProps) =>
  points
    .filter((point) => point)
    .map((point, index) => (
      <motion.h1
        key={index}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
      >
        {point}
      </motion.h1>
    ));

export default Points;
